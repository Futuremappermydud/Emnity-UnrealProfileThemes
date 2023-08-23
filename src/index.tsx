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
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(UnrealProfileColors);