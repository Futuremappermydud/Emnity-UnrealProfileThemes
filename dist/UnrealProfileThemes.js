function B(e){window.enmity.plugins.registerPlugin(e)}const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const i=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const b=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const R={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function A(...e){return window.enmity.modules.bulk(...e)}function I(...e){return window.enmity.modules.getByProps(...e)}function k(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function O(e){return window.enmity.patcher.create(e)}var U="UnrealProfileThemes",V="1.0.0",M="Uses hidden 3y3 codes to allow you to change your profile theme colors for anyone using the plugin",H=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],_={source:"https://github.com/Futuremappermydud/Emnity-UnrealProfileThemes/",dist:"https://github.com/Futuremappermydud/Emnity-UnrealProfileThemes/blob/main/dist/UnrealProfileThemes.js"},f={name:U,version:V,description:M,authors:H,links:_};function z(e,n,r){return window.enmity.utilities.findInReactTree(e,n,r)}const{components:o}=window.enmity;o.Alert;const G=o.Button;o.FlatList;const j=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const Y=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const S=o.Text;o.TextInput,o.TouchableHighlight;const F=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const y=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const K=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const $=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function W(e,n,r){window.enmity.settings.set(e,n,r)}function D(e,n,r){return window.enmity.settings.getBoolean(e,n,r)}const L=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),a=b.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...L},image:{width:75,height:75,borderRadius:10,...L},mainText:{opacity:.975,letterSpacing:.25},header:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:g.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),T=window.enmity.modules.common.Components.General.Animated,[N]=A(R.byProps("transitionToGuild","openURL"));var q=({manifest:e})=>{const n=i.useRef(new T.Value(1)).current,r=()=>{T.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},t=()=>{T.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},l=()=>N.openURL(e.links.source),d={transform:[{scale:n}]};return i.createElement(y,{style:a.container},i.createElement(F,{onPress:l,onPressIn:r,onPressOut:t},i.createElement(T.View,{style:d},i.createElement(j,{style:[a.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),i.createElement(y,{style:a.textContainer},i.createElement(F,{onPress:()=>N.openURL(e.links.source)},i.createElement(S,{style:[a.mainText,a.header]},e.name)),i.createElement(y,{style:{flexDirection:"row"}},i.createElement(S,{style:[a.mainText,a.subHeader]},"A project by ",e.authors[0].name)),i.createElement(y,null,i.createElement(F,{style:{flexDirection:"row"}},i.createElement(S,{style:[a.mainText,a.subHeader]},"Version:"),i.createElement(S,{style:[a.mainText,a.subHeader,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},e.version)))))};const J=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),Q=b.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:g.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:J}});var X=({settings:e})=>i.createElement(Y,null,i.createElement(q,{manifest:f}),i.createElement(y,{style:[Q.container]},i.createElement(K,{label:"Nitro First",subLabel:"If on then use nitro colors first if available then 3y3 colors. If off then only use 3y3 codes",trailing:i.createElement($,{value:D(f.name,"nitroFirst",!0),onChange:n=>{W(f.name,"nitroFirst",n)}})})));const C=O("unreal-profile-colors"),Z=I("getUserProfile"),ee=k("EditProfileTheme",{default:!1}),[oe]=A(R.byProps("setString"));function ne(e,n){const r=`[#${e.toString(16).padStart(6,"0")},#${n.toString(16).padStart(6,"0")}]`,t=Array.from(r).map(l=>l.codePointAt(0)).filter(l=>l>=32&&l<=127).map(l=>String.fromCodePoint(l+917504)).join("");return" "+t}function te(e){if(e==null)return null;const n=e.match(/\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u);if(n!=null){const r=[...n[0]].map(t=>String.fromCodePoint(t.codePointAt(0)-917504)).join("");return r.substring(1,r.length-1).split(",").map(t=>parseInt(t.replace("#","0x"),16))}else return null}function ie(e){return e==null?null:e.replace(/\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]+?)\u{e005d}/u,"")}const re=b.createThemedStyleSheet({divider:{backgroundColor:b.ThemeColorMap.BACKGROUND_ACCENT,marginLeft:0,marginTop:16},title:{flexDirection:"column",paddingTop:16},button:{marginTop:16}}),le={...f,onStart(){C.instead(Z,"getUserProfile",(e,n,r)=>{let t=r.apply(e,n);if(D(f.name,"nitroFirst",!0)&&(t==null?void 0:t.themeColors))return t;const l=te(t==null?void 0:t.bio);return l&&(t.themeColors=l,t.premiumType=2,t.bio=ie(t==null?void 0:t.bio)),t}),C.after(ee,"default",(e,n,r)=>{var t,l;console.log("hello");let d=(t=z(r,s=>{var p,h,c,w,v;return console.log((p=s==null?void 0:s.type)==null?void 0:p.displayName),(c=(h=s==null?void 0:s.props)==null?void 0:h.children)==null||c.forEach(m=>{var u;return console.log((u=m==null?void 0:m.type)==null?void 0:u.name)}),console.log("----------------------------------------------------------------"),((w=s==null?void 0:s.type)==null?void 0:w.displayName)==="View"&&((v=s==null?void 0:s.props)==null?void 0:v.children.findIndex(m=>{var u;return((u=m==null?void 0:m.type)==null?void 0:u.name)==="ColorSwatch"}))!==-1}))==null?void 0:t.props;(l=d==null?void 0:d.children)==null||l.unshift(i.createElement(y,null,i.createElement(G,{color:"brand",text:"Copy 3y3",size:"large",onPress:()=>{var s,p,h;let c,w;(s=d==null?void 0:d.children)==null||s.forEach(m=>{var u,E,P;if(console.log((u=m==null?void 0:m.type)==null?void 0:u.name),((E=m==null?void 0:m.type)==null?void 0:E.name)==="ColorSwatch"){let x=(P=m==null?void 0:m.props)==null?void 0:P.description;x=="Primary"&&(c=m),x=="Accent"&&(w=m)}});let v=ne((p=c==null?void 0:c.props)==null?void 0:p.color,(h=w==null?void 0:w.props)==null?void 0:h.color);oe.setString(v)},style:re.button})))})},onStop(){C.unpatchAll()},getSettingsPanel({settings:e}){return i.createElement(X,{settings:e})}};B(le);
