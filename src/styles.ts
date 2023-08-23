import { Constants, StyleSheet } from 'enmity/metro/common';

export const styles = StyleSheet.createThemedStyleSheet({
    container: {
       backgroundColor: Constants.Colors.BRAND_500,
 
       height: 50,
       borderRadius: 5,
       margin: 5,
 
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: "row"
   },
   text: {
       color: Constants.ThemeColorMap.TEXT_NORMAL,
       fontFamily: Constants.PRIMARY_BOLD,
 
       paddingLeft : 10,
       paddingRight : 10,
       letterSpacing: 0.25,
       fontSize: 16,
 
       textAlign: 'center'
   },
 })