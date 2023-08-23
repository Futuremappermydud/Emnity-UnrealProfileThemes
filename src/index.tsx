import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { bulk, filters, getByName, getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { findInReactTree } from "enmity/utilities"
import Settings from './components/Settings';
import { getBoolean } from 'enmity/api/settings';
import { TouchableOpacity, View, Text } from 'enmity/components';
import { decode, encode, getFixedBio } from './3y3';
import { styles } from './styles';

const Patcher = create('unreal-profile-colors');
const UserProfileStore = getByProps("getUserProfile");
const EditProfileTheme = getByName("EditProfileTheme", { default: false })

const [
   Clipboard,
] = bulk(
   filters.byProps('setString'),
);

const UnrealProfileColors: Plugin = {
   ...manifest,

   onStart() {
      //Decodes 3y3 from bio and assigns color
      Patcher.instead(UserProfileStore, 'getUserProfile', (self, args, res) => {
         let result = res.apply(self, args);
         if (getBoolean(manifest.name, "disableAllThemes", false)) 
         {
            result.themeColors = undefined;
            return result;
         }
         if (getBoolean(manifest.name, "nitroFirst", true) && result?.themeColors) return result;
         const colors = decode(result?.bio);
         if (colors) {
            result.themeColors = colors;
            result.premiumType = 2;
            if(getBoolean(manifest.name, "strip", false))
            {
               result.bio = getFixedBio(result?.bio, '');
            }
         }
         return result;
      });
      //Adds copy button to profile edit
      Patcher.after(EditProfileTheme, 'default', (_, __, res) => {
         let EditThemeSection = findInReactTree(res, r => {
            return r?.type?.displayName === "View" && r?.props?.children.findIndex(i => i?.type?.name === "ColorSwatch") !== -1
         }
        )?.props;

        EditThemeSection?.children?.unshift(
         <View>
            <TouchableOpacity
               onPress={() => {
                  let primaryPicker;
                  let accentPicker;
                  //Iterate over children of theme selection and pick the primary and accent swatches
                  EditThemeSection?.children?.forEach(value => { 
                     if(value?.type?.name === "ColorSwatch")
                     {
                        let type = value?.props?.description;
                        if(type == "Primary")
                           primaryPicker = value;
                        if(type == "Accent")
                           accentPicker = value;
                     }
                  });
                  let encoded = encode(primaryPicker?.props?.color, accentPicker?.props?.color);
                  Clipboard.setString(encoded);
               }}
               style={styles.container}
            >
               <Text style={styles.text}>Copy 3y3</Text>
            </TouchableOpacity>
         </View>
        );
      })
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(UnrealProfileColors);