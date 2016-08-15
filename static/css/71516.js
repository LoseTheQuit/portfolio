import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "iceWhite": {
        "color": "rgba(241, 241, 241, .65)",
        "transition": "all linear 1.00s",
        "float": "right"
    },
    "mediumBlue": {
        "color": "#007db6",
        "transition": "all linear 1.00s"
    },
    "lightBlue": {
        "color": "#009ddc",
        "transition": "all linear 1.00s"
    },
    "iceWhite:hover": {
        "color": "rgba(241, 241, 241, .50)",
        "transition": "all linear 1.00s"
    },
    "nav>li>a:focus": {
        "color": "rgba(0, 0, 0, .50)",
        "backgroundColor": ": rgba(0, 0, 0, .50)"
    },
    "nav>li>a:hover": {
        "color": "rgba(0, 0, 0, .50)",
        "backgroundColor": ": rgba(0, 0, 0, .50)"
    },
    "nav open>a": {
        "color": "rgba(0, 0, 0, .50) !important",
        "backgroundColor": ": rgba(0, 0, 0, .50) !important"
    },
    "nav open>a:focus": {
        "color": "rgba(0, 0, 0, .50) !important",
        "backgroundColor": ": rgba(0, 0, 0, .50) !important"
    },
    "nav open>a:hover": {
        "color": "rgba(0, 0, 0, .50) !important",
        "backgroundColor": ": rgba(0, 0, 0, .50) !important"
    },
    "addSomeMargin": {
        "marginBottom": 20
    },
    "dividingLine": {
        "backgroundColor": "#009ddc",
        "width": "80%",
        "height": 3,
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "opacity": 0.15
    },
    "navbar": {
        "height": 70,
        "paddingTop": 20
    },
    "dropdown-menu": {
        "background": "rgba(0, 0, 0, 0.5)",
        "color": "white"
    },
    "dropdown-menu li>a": {
        "color": "white"
    },
    "dropdown-menu>li": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "dropdown-menu li>a:hover": {
        "background": "white"
    },
    "mashUpCallOut": {
        "height": 100 * vh,
        "color": "white",
        "background": "#00a3e0"
    },
    "navbar-global navbar-toggle": {
        "borderColor": "#777"
    },
    "navbar-global navbar-toggle li": {
        "display": "block"
    },
    "navbar-global navbar-toggle icon-bar": {
        "backgroundColor": "#777"
    },
    "dropdown-header": {
        "color": "#fff"
    },
    "headLine": {
        "color": "white",
        "fontSize": 89
    }
});