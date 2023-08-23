import { FormSwitch, FormRow, ScrollView, View } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, StyleSheet, Constants } from 'enmity/metro/common';
import Credits from './Credits';
import manifest from "../../manifest.json";

interface SettingsProps {
   settings: SettingsStore;
}

type DefaultObject = { [key: string]: string | number | DefaultObject }
const shadow = (opacity: number = 0.10): DefaultObject => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 4,
    },
    shadowOpacity: opacity,
    shadowRadius: 4.65,
    elevation: 8
});


const styles = StyleSheet.createThemedStyleSheet({
   container: {
      width: "90%",
      marginTop: 25,
      marginLeft: '5%',
      borderRadius: 10,
      backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
      shadow
   }
});

export default ({ settings }: SettingsProps) => {
   return <ScrollView>
      <Credits manifest={manifest}/>
      <View style={[styles.container]}>
         <FormRow
            label="Nitro First"
            subLabel="If on then use nitro colors first if available then 3y3 colors. If off then only use 3y3 codes"
            trailing={<FormSwitch value={settings.getBoolean("nitroFirst", true)} onValueChange={()=>{settings.toggle("nitroFirst", true);}} />}
         />
         <FormRow
            label="Show missing letters"
            subLabel="If enabled then 3y3 codes will be stripped after parsing so that they are not visible. This will make it difficult to edit your bio."
            trailing={<FormSwitch value={settings.getBoolean("strip", false)} onValueChange={()=>{settings.toggle("strip", false);}} />}
         />
      </View>
   </ScrollView>;
};