import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, StyleSheet } from 'enmity/metro/common';
import { bulk, filters, getByName, getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { findInReactTree } from "enmity/utilities"
import Settings from './components/Settings';
import { getBoolean } from 'enmity/api/settings';
import { Button, View } from 'enmity/components';
import { cp } from 'fs';

const Patcher = create('unreal-profile-colors');
const UserProfileStore = getByProps("getUserProfile");
const EditProfileTheme = getByName("EditProfileTheme", { default: false })

const [
   Clipboard,
] = bulk(
   filters.byProps('setString'),
);

function encode(primary: number, accent: number): string {
   const message = `[#${primary.toString(16).padStart(6, "0")},#${accent.toString(16).padStart(6, "0")}]`;
   const padding = "";
   const encoded = Array.from(message)
       .map(x => x.codePointAt(0))
       .filter(x => x! >= 0x20 && x! <= 0x7f)
       .map(x => String.fromCodePoint(x! + 0xe0000))
       .join("");

   return (padding || "") + " " + encoded;
}

// Courtesy of Cynthia.
function decode(bio: string): Array<number> | null {
   if (bio == null) return null;

   const colorString = bio.match(
       /\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u,
   );

   if (colorString != null) {
       const parsed = [...colorString[0]]
           .map(x => String.fromCodePoint(x.codePointAt(0)! - 0xe0000))
           .join("");
       const colors = parsed
           .substring(1, parsed.length - 1)
           .split(",")
           .map(x => parseInt(x.replace("#", "0x"), 16));

       return colors;
   } else {
       return null;
   }
}

function getFixedBio(bioString: string): string | null {
   if (bioString == null) return null;

   const bio = bioString.replace(
      /\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u,
      ''
  );
  return bio;
}

const styles = StyleSheet.createThemedStyleSheet({
   divider: {
       backgroundColor: StyleSheet.ThemeColorMap.BACKGROUND_ACCENT,
       marginLeft: 0,
       marginTop: 16,
   },
   title: {
       flexDirection: "column",
       paddingTop: 16
   },
   button: { marginTop: 16 }
})

const UnrealProfileColors: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(UserProfileStore, 'getUserProfile', (self, args, res) => {
         let result = res.apply(self, args);
         if (getBoolean(manifest.name, "nitroFirst", true) && result?.themeColors) return result;
         const colors = decode(result?.bio);
         if (colors) {
            result.themeColors = colors;
            result.premiumType = 2;
            result.bio = getFixedBio(result?.bio);
         }
         return result;
      });
      Patcher.after(EditProfileTheme, 'default', (_, __, res) => {
         console.log('hello');
         let EditThemeSection = findInReactTree(res, r => {
            console.log(r?.type?.displayName);
            r?.props?.children?.forEach(value => console.log(value?.type?.name));
            console.log('----------------------------------------------------------------');
            return r?.type?.displayName === "View" && r?.props?.children.findIndex(i => i?.type?.name === "EditProfileTheme") !== -1
         }
        )?.props;

        EditThemeSection?.children?.unshift(
         <View>
            <Button 
               color='brand'
               text='Copy 3y3'
               size='large'
               onPress={() => {
                  let colors = EditThemeSection?.pendingThemeColors;
                  if(!colors) return;
                  let encoded = encode(colors[0], colors[1]);
                  Clipboard.setString(encoded);
               }}
               style={styles.button}
            />
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
