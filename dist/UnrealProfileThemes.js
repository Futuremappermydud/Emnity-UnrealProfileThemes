function D(e){window.enmity.plugins.registerPlugin(e)}const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const i=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const h=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const E={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function P(...e){return window.enmity.modules.bulk(...e)}function L(...e){return window.enmity.modules.getByProps(...e)}function N(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function B(e){return window.enmity.patcher.create(e)}var I="UnrealProfileThemes",k="1.0.0",O="Uses hidden 3y3 codes to allow you to change your profile theme colors for anyone using the plugin",V=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],U={source:"https://github.com/Futuremappermydud/Emnity-UnrealProfileThemes/",dist:"https://github.com/Futuremappermydud/Emnity-UnrealProfileThemes/blob/main/dist/UnrealProfileThemes.js"},y={name:I,version:k,description:O,authors:V,links:U};function M(e,n,r){return window.enmity.utilities.findInReactTree(e,n,r)}const{components:o}=window.enmity;o.Alert;const H=o.Button;o.FlatList;const _=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const j=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const b=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const u=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const z=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const G=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function Y(e,n,r){window.enmity.settings.set(e,n,r)}function x(e,n,r){return window.enmity.settings.getBoolean(e,n,r)}const R=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),s=h.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...R},image:{width:75,height:75,borderRadius:10,...R},mainText:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:w.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),f=window.enmity.modules.common.Components.General.Animated,[A]=P(E.byProps("transitionToGuild","openURL"));var $=({manifest:e})=>{const n=i.useRef(new f.Value(1)).current,r=()=>{f.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},t=()=>{f.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},m=()=>A.openURL(e.links.source),a={transform:[{scale:n}]};return i.createElement(u,{style:s.container},i.createElement(b,{onPress:m,onPressIn:r,onPressOut:t},i.createElement(f.View,{style:a},i.createElement(_,{style:[s.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),i.createElement(u,{style:s.textContainer},i.createElement(b,{onPress:()=>A.openURL(e.links.source)},i.createElement(g,{style:[s.mainText,s.header]},e.name)),i.createElement(u,{style:{flexDirection:"row"}},i.createElement(g,{style:[s.mainText,s.subHeader]},"A project by ",e.authors[0].name)),i.createElement(u,null,i.createElement(b,{style:{flexDirection:"row"}},i.createElement(g,{style:[s.mainText,s.subHeader]},"Version:"),i.createElement(g,{style:[s.mainText,s.subHeader,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version)))))};const K=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),W=h.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:w.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:K}});var q=({settings:e})=>i.createElement(j,null,i.createElement($,{manifest:y}),i.createElement(u,{style:[W.container]},i.createElement(z,{label:"Nitro First",subLabel:"If on then use nitro colors first if available then 3y3 colors. If off then only use 3y3 codes",trailing:i.createElement(G,{value:x(y.name,"nitroFirst",!0),onChange:n=>{Y(y.name,"nitroFirst",n)}})})));const v=B("unreal-profile-colors"),J=L("getUserProfile"),Q=N("EditProfileTheme",{default:!1}),[X]=P(E.byProps("setString"));function Z(e,n){const r=`[#${e.toString(16).padStart(6,"0")},#${n.toString(16).padStart(6,"0")}]`,t=Array.from(r).map(m=>m.codePointAt(0)).filter(m=>m>=32&&m<=127).map(m=>String.fromCodePoint(m+917504)).join("");return" "+t}function ee(e){if(e==null)return null;const n=e.match(/\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u);if(n!=null){const r=[...n[0]].map(t=>String.fromCodePoint(t.codePointAt(0)-917504)).join("");return r.substring(1,r.length-1).split(",").map(t=>parseInt(t.replace("#","0x"),16))}else return null}function oe(e){return e==null?null:e.replace(/\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u,"")}const ne=h.createThemedStyleSheet({divider:{backgroundColor:h.ThemeColorMap.BACKGROUND_ACCENT,marginLeft:0,marginTop:16},title:{flexDirection:"column",paddingTop:16},button:{marginTop:16}}),te={...y,onStart(){v.instead(J,"getUserProfile",(e,n,r)=>{let t=r.apply(e,n);if(x(y.name,"nitroFirst",!0)&&(t==null?void 0:t.themeColors))return t;const m=ee(t==null?void 0:t.bio);return m&&(t.themeColors=m,t.premiumType=2,t.bio=oe(t==null?void 0:t.bio)),t}),v.after(Q,"default",(e,n,r)=>{var t,m;console.log("hello");let a=(t=M(r,l=>{var p,S,T,F,C;return console.log((p=l==null?void 0:l.type)==null?void 0:p.displayName),(T=(S=l==null?void 0:l.props)==null?void 0:S.children)==null||T.forEach(d=>{var c;return console.log((c=d==null?void 0:d.type)==null?void 0:c.name)}),console.log("----------------------------------------------------------------"),((F=l==null?void 0:l.type)==null?void 0:F.displayName)==="View"&&((C=l==null?void 0:l.props)==null?void 0:C.children.findIndex(d=>{var c;return((c=d==null?void 0:d.type)==null?void 0:c.name)==="ColorSwatch"}))!==-1}))==null?void 0:t.props;(m=a==null?void 0:a.children)==null||m.unshift(i.createElement(u,null,i.createElement(H,{color:"brand",text:"Copy 3y3",size:"large",onPress:()=>{let l=a==null?void 0:a.pendingThemeColors;if(!l)return;let p=Z(l[0],l[1]);X.setString(p)},style:ne.button})))})},onStop(){v.unpatchAll()},getSettingsPanel({settings:e}){return i.createElement(q,{settings:e})}};D(te);
