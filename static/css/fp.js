import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url('http://kurld.com/images/wallpapers/blurred-wallpaper/blurred-wallpaper-23.jpg') no-repeat center center",
        "backgroundSize": "cover"
    },
    "bodyWrapper": {
        "height": 100 * vh
    },
    "flashCard": {
        "width": "80%",
        "marginTop": 100,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "border": "1px solid rgba(0, 0, 0, .250)",
        "paddingTop": "2%",
        "paddingRight": "2%",
        "paddingBottom": "2%",
        "paddingLeft": "2%",
        "background": "rgba(0, 0, 0, .25)"
    }
});