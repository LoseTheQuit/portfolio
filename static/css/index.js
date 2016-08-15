import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
        "font": "14px / 1.625 \"Raleway\", \"Helvetica Neue\", sans-serif",
        "height": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "color": "#828b90",
        "font": "inherit",
        "background": "#000"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "background": "transparent",
        "textDecoration": "none",
        "color": "#0088cb"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "700"
    },
    "strong": {
        "fontWeight": "700"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2.625,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontWeight": "100",
        "lineHeight": 1,
        "color": "#1e1e1e",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "wordWrap": "break-word"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle",
        "maxWidth": "100%",
        "height": "auto",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 1,
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "background": "#ebebeb",
        "border": 0,
        "maxWidth": 1690
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "code": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "borderRadius": 0,
        "WebkitAppearance": "none"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "color": "#1e1e1e",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit",
        "borderRadius": 0,
        "WebkitAppearance": "none",
        "display": "block",
        "width": "100%",
        "background": "#f5f5f5",
        "border": "1px solid #fff"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "boxSizing": "content-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "boxSizing": "border-box"
    },
    "*:before": {
        "boxSizing": "border-box"
    },
    "*:after": {
        "boxSizing": "border-box"
    },
    "a:focus": {
        "outline": "none"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative",
        "quotes": "\\201C\" \"\\201D\" \"\\2018\" \"\\2019",
        "fontStyle": "normal"
    },
    "container": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container-fluid": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "row": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "8.33333333%"
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "16.66666667%"
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "25%"
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "33.33333333%"
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "41.66666667%"
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "50%"
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "58.33333333%"
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "66.66666667%"
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "75%"
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "83.33333333%"
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "91.66666667%"
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "100%"
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-pull-11": {
        "right": "91.66666667%"
    },
    "col-xs-pull-10": {
        "right": "83.33333333%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-8": {
        "right": "66.66666667%"
    },
    "col-xs-pull-7": {
        "right": "58.33333333%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-5": {
        "right": "41.66666667%"
    },
    "col-xs-pull-4": {
        "right": "33.33333333%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-2": {
        "right": "16.66666667%"
    },
    "col-xs-pull-1": {
        "right": "8.33333333%"
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-push-11": {
        "left": "91.66666667%"
    },
    "col-xs-push-10": {
        "left": "83.33333333%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-8": {
        "left": "66.66666667%"
    },
    "col-xs-push-7": {
        "left": "58.33333333%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-5": {
        "left": "41.66666667%"
    },
    "col-xs-push-4": {
        "left": "33.33333333%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-2": {
        "left": "16.66666667%"
    },
    "col-xs-push-1": {
        "left": "8.33333333%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66666667%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333333%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66666667%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333333%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66666667%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333333%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66666667%"
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333333%"
    },
    "col-xs-offset-0": {
        "marginLeft": "0%"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container:before": {
        "content": " ",
        "display": "table"
    },
    "container:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container-fluid:before": {
        "content": " ",
        "display": "table"
    },
    "container-fluid:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "row:before": {
        "content": " ",
        "display": "table"
    },
    "row:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "center-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "pull-right": {
        "float": "right !important"
    },
    "pull-left": {
        "float": "left !important"
    },
    "hide": {
        "display": "none !important"
    },
    "show": {
        "display": "block !important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "carousel": {
        "position": "relative"
    },
    "carousel-inner": {
        "position": "relative",
        "overflow": "hidden",
        "width": "100%"
    },
    "carousel-inner> item": {
        "display": "none",
        "position": "relative",
        "WebkitTransition": "0.6s ease-in-out left",
        "transition": "0.6s ease-in-out left"
    },
    "carousel-inner> item> img": {
        "lineHeight": 1,
        "display": "block",
        "width": "100% \\9",
        "maxWidth": "100%",
        "height": "auto"
    },
    "carousel-inner> item> a> img": {
        "lineHeight": 1,
        "display": "block",
        "width": "100% \\9",
        "maxWidth": "100%",
        "height": "auto"
    },
    "carousel-inner> active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner> next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner> prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner> nextleft": {
        "left": 0
    },
    "carousel-inner> prevright": {
        "left": 0
    },
    "carousel-inner> activeleft": {
        "left": "-100%"
    },
    "carousel-inner> activeright": {
        "left": "100%"
    },
    "carousel-control": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": 30,
        "opacity": 0.5,
        "filter": "alpha(opacity=50)",
        "fontSize": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.6)",
        "zIndex": 4
    },
    "carousel-controlleft": {
        "background": "none"
    },
    "carousel-controlright": {
        "left": "auto",
        "right": 0,
        "background": "none"
    },
    "carousel-control:hover": {
        "outline": 0,
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control:focus": {
        "outline": 0,
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control icon-prev": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "left": "50%",
        "marginLeft": -10,
        "width": 20,
        "height": 20,
        "marginTop": -10,
        "fontFamily": "serif"
    },
    "carousel-control icon-next": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "right": "50%",
        "marginRight": -10,
        "width": 20,
        "height": 20,
        "marginTop": -10,
        "fontFamily": "serif"
    },
    "carousel-indicators": {
        "position": "absolute",
        "bottom": 10,
        "left": "50%",
        "zIndex": 7,
        "width": "60%",
        "marginLeft": "-30%",
        "paddingLeft": 0,
        "listStyle": "none",
        "textAlign": "center",
        "marginBottom": 0
    },
    "carousel-indicators li": {
        "display": "inline-block",
        "width": 10,
        "height": 10,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "textIndent": -999,
        "border": "1px solid #fff",
        "borderRadius": 10,
        "cursor": "pointer",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "verticalAlign": "middle"
    },
    "carousel-indicators active": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 12,
        "height": 12,
        "backgroundColor": "#fff"
    },
    "carousel-caption": {
        "position": "absolute",
        "left": "15%",
        "right": "15%",
        "bottom": 20,
        "zIndex": 6,
        "paddingTop": 20,
        "paddingBottom": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0, 0, 0, 0.6)"
    },
    "carousel-caption btn": {
        "textShadow": "none"
    },
    "hidden": {
        "display": "none !important",
        "visibility": "hidden !important"
    },
    "affix": {
        "position": "fixed",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-xs": {
        "display": "none !important"
    },
    "visible-sm": {
        "display": "none !important"
    },
    "visible-md": {
        "display": "none !important"
    },
    "visible-lg": {
        "display": "none !important"
    },
    "visible-xs-block": {
        "display": "none !important"
    },
    "visible-xs-inline": {
        "display": "none !important"
    },
    "visible-xs-inline-block": {
        "display": "none !important"
    },
    "visible-sm-block": {
        "display": "none !important"
    },
    "visible-sm-inline": {
        "display": "none !important"
    },
    "visible-sm-inline-block": {
        "display": "none !important"
    },
    "visible-md-block": {
        "display": "none !important"
    },
    "visible-md-inline": {
        "display": "none !important"
    },
    "visible-md-inline-block": {
        "display": "none !important"
    },
    "visible-lg-block": {
        "display": "none !important"
    },
    "visible-lg-inline": {
        "display": "none !important"
    },
    "visible-lg-inline-block": {
        "display": "none !important"
    },
    "visible-print": {
        "display": "none !important"
    },
    "visible-print-block": {
        "display": "none !important"
    },
    "visible-print-inline": {
        "display": "none !important"
    },
    "visible-print-inline-block": {
        "display": "none !important"
    },
    "icon": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "width": 32,
        "height": 32,
        "lineHeight": 32,
        "overflow": "hidden",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "0 0",
        "whiteSpace": "nowrap",
        "color": "inherit",
        "textIndent": 32,
        "textAlign": "center",
        "fontSize": 0
    },
    "icon-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "font-icon": {
        "fontFamily": "'pw-icons'",
        "fontSize": "inherit",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1
    },
    "font-icon-facebook:before": {
        "content": "\\e600"
    },
    "font-icon-linked-in:before": {
        "content": "\\e601"
    },
    "font-icon-twitter:before": {
        "content": "\\e602"
    },
    "icon-bar-chart": {
        "width": 30,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M0%2C30h6V14.001H0V30z%20M2%2C16.001h2v12H2V16.001z%20M16%2C30h6V0h-6V30%20z%20M18%2C2.001h2v26h-2V2.001z%20M24%2C10.001V30h6V10.001H24z%20M28%2C28.001h-2v-16h2V28.001z%20M8%2C30h6V4.001H8V30z%20M10%2C6h2v22.001h-2V6z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-discicon-bar-chart": {
        "backgroundPosition": "50% 45%"
    },
    "icon-binder": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M23%2C18.001H9c-0.552%2C0-1%2C0.448-1%2C1c0%2C0.553%2C0.448%2C1%2C1%2C1h14%20c0.552%2C0%2C1-0.447%2C1-1C24%2C18.449%2C23.552%2C18.001%2C23%2C18.001z%20M28%2C0H4C1.791%2C0%2C0%2C1.792%2C0%2C4.001v24c0%2C2.209%2C1.791%2C4%2C4%2C4h24%20c2.209%2C0%2C4-1.791%2C4-4v-24C32%2C1.792%2C30.209%2C0%2C28%2C0z%20M30%2C28.001c0%2C1.104-0.896%2C2-2%2C2H4c-1.104%2C0-2-0.896-2-2v-24%20c0-1.105%2C0.896-2%2C2-2h24c1.104%2C0%2C2%2C0.896%2C2%2C2V28.001z%20M23%2C12H9c-0.552%2C0-1%2C0.449-1%2C1c0%2C0.552%2C0.448%2C1%2C1%2C1h14c0.552%2C0%2C1-0.448%2C1-1%20C24%2C12.449%2C23.552%2C12%2C23%2C12z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-binoculars": {
        "width": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20%20width%3D%2228%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233C4042%22%20d%3D%22M26%2C6V0h-8v6h-2v5.999h-4V6h-2V0H2v6H0v26h12V21.999h4V32h12V6%0D%0A%20H26z%20M4%2C2h4v4H4V2z%20M10%2C29.999H2v-4h8V29.999z%20M10%2C23.999H2V8h8V23.999z%20M16%2C19.999h-4v-6h4V19.999z%20M20%2C2h4v4h-4V2z%20M26%2C29.999%0D%0A%20h-8v-4h8V29.999z%20M26%2C23.999h-8V8h8V23.999z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-book": {
        "width": 30,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M15%2C2.002L0%2C0v0.002v2.001v22v2L15%2C30l15-3.997v-2v-22V0.002V0%0D%0AL15%2C2.002z%20M14%2C27.734L2%2C24.536V2.27l12%2C1.598V27.734z%20M28%2C24.536l-12%2C3.198V3.868L28%2C2.27V24.536z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-browser": {
        "width": 30,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M29%2C0H1C0.447%2C0%2C0%2C0.448%2C0%2C1v28c0%2C0.553%2C0.447%2C1%2C1%2C1h28%0D%0A%20c0.552%2C0%2C1-0.447%2C1-1V1C30%2C0.448%2C29.552%2C0%2C29%2C0z%20M28%2C27c0%2C0.553-0.448%2C1.001-1%2C1.001H3c-0.553%2C0-1-0.448-1-1.001V10h26V27z%20M28%2C8%20H2V3c0-0.552%2C0.447-1%2C1-1h24c0.552%2C0%2C1%2C0.448%2C1%2C1V8z%20M4%2C6.001h2V4H4V6.001z%20M8%2C6.001h2V4H8V6.001z%20M12%2C6.001h2V4h-2V6.001z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-bug": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M32%2C20v-1.999h-4.188c-0.245-1.44-0.731-2.799-1.44-4.018%0D%0A%20l3.624-2.166l-1.008-1.808l-3.804%2C2.273c-1.845-2.192-4.461-3.702-7.427-4.139l4.234-7.153L20.342%2C0L16%2C7.334L11.658%2C0%0D%0A%20l-1.65%2C0.991l4.236%2C7.155c-2.967%2C0.434-5.583%2C1.945-7.428%2C4.137L3.013%2C10.01l-1.008%2C1.808l3.624%2C2.166%0D%0A%20c-0.708%2C1.219-1.195%2C2.577-1.44%2C4.018H0V20h4c0%2C1.582%2C0.313%2C3.088%2C0.87%2C4.471l-2.865%2C1.713l1.008%2C1.807l2.798-1.673%0D%0A%20C7.928%2C29.725%2C11.694%2C32%2C16%2C32c4.306%2C0%2C8.071-2.275%2C10.188-5.683l2.799%2C1.673l1.008-1.807l-2.865-1.713%0D%0A%20C27.687%2C23.088%2C28%2C21.582%2C28%2C20H32z%20M16%2C10c3.269%2C0%2C6.162%2C1.576%2C7.987%2C4.001H8.013C9.837%2C11.576%2C12.731%2C10%2C16%2C10z%20M16%2C30%0D%0A%20c-5.523%2C0-10-4.478-10-10c0-1.423%2C0.302-2.774%2C0.837-4h18.325C25.698%2C17.226%2C26%2C18.577%2C26%2C20C26%2C25.522%2C21.522%2C30%2C16%2C30z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-discicon-bug": {
        "backgroundPosition": "50% 45%"
    },
    "icon-calendar": {
        "width": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2232%22%20viewBox%3D%220%200%2030%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M25.998%2C14.001h-6v6h6V14.001z%20M23.998%2C18h-2v-2h2V18z%0D%0A%20M28.997%2C2.001h-6.999V0h-2v2.001H9.999V0H8v2.001H2c-1.104%2C0-2%2C0.896-2%2C2.001V30c0%2C1.105%2C0.896%2C2%2C2%2C2h25.997c1.104%2C0%2C2-0.895%2C2-2%0D%0A%20V4.002C29.997%2C2.896%2C30.102%2C2.001%2C28.997%2C2.001z%20M27.997%2C29c0%2C0.553-0.447%2C1-0.999%2C1H3c-0.552%2C0-1-0.447-1-1V10.001h25.997V29z%0D%0A%20M27.997%2C8.001H2v-3c0-0.553%2C0.447-1%2C1-1h5v2h2v-2h9.999v2h2v-2h5c0.552%2C0%2C0.999%2C0.447%2C0.999%2C1V8.001z%20M9.999%2C22H4v6h6V22z%20M8%2C26%0D%0A%20H6v-2h2V26z%20M17.998%2C22h-5.999v6h5.999V22z%20M15.999%2C26h-2v-2h2V26z%20M17.998%2C14.001h-5.999v6h5.999V14.001z%20M15.999%2C18h-2v-2h2V18z%0D%0A%20M25.998%2C22h-6v6h6V22z%20M23.998%2C26h-2v-2h2V26z%20M9.999%2C14.001H4v6h6V14.001z%20M8%2C18H6v-2h2V18z%22/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-clipboard": {
        "width": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M6%2C16h16v-2H6V16z%20M21%2C3.999V2h-3c0-1.104-0.896-2-2-2h-4%20c-1.104%2C0-2%2C0.896-2%2C2H7v1.999H0V32h28V3.999H21z%20M9%2C3.999h3V3c0-0.553%2C0.448-1%2C1-1h2c0.553%2C0%2C1%2C0.447%2C1%2C1v0.999h3V8h-4h-2H9%20V3.999z%20M26%2C30.001H2V6h5v4h14V6h5V30.001z%20M6%2C21h16v-1.999H6V21z%20M6%2C26h10v-1.999H6V26z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-clock": {
        "backgroundImage": "url(/img/icons/clock.svg)"
    },
    "icon-cloud": {
        "height": 24
    },
    "icon-cloudicon-disc": {
        "backgroundPosition": "50% 47%"
    },
    "icon-calendaricon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2232%22%20viewBox%3D%220%200%2030%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M25.998%2C14.001h-6v6h6V14.001z%20M23.998%2C18h-2v-2h2V18z%0D%0AM28.997%2C2.001h-6.999V0h-2v2.001H9.999V0H8v2.001H2c-1.104%2C0-2%2C0.896-2%2C2.001V30c0%2C1.105%2C0.896%2C2%2C2%2C2h25.997c1.104%2C0%2C2-0.895%2C2-2%0D%0A%20V4.002C29.997%2C2.896%2C30.102%2C2.001%2C28.997%2C2.001z%20M27.997%2C29c0%2C0.553-0.447%2C1-0.999%2C1H3c-0.552%2C0-1-0.447-1-1V10.001h25.997V29z%0D%0AM27.997%2C8.001H2v-3c0-0.553%2C0.447-1%2C1-1h5v2h2v-2h9.999v2h2v-2h5c0.552%2C0%2C0.999%2C0.447%2C0.999%2C1V8.001z%20M9.999%2C22H4v6h6V22z%20M8%2C26%0D%0A%20H6v-2h2V26z%20M17.998%2C22h-5.999v6h5.999V22z%20M15.999%2C26h-2v-2h2V26z%20M17.998%2C14.001h-5.999v6h5.999V14.001z%20M15.999%2C18h-2v-2h2V18z%0D%0AM25.998%2C22h-6v6h6V22z%20M23.998%2C26h-2v-2h2V26z%20M9.999%2C14.001H4v6h6V14.001z%20M8%2C18H6v-2h2V18z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-cash": {
        "height": 24,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2024%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M13%2C4.002c-2.762%2C0-5%2C2.236-5%2C4.999c0%2C2.76%2C2.238%2C5%2C5%2C5%20s5-2.241%2C5-5C18%2C6.238%2C15.762%2C4.002%2C13%2C4.002z%20M13%2C12c-1.657%2C0-3-1.344-3-3c0-1.657%2C1.343-3%2C3-3c1.656%2C0%2C3%2C1.343%2C3%2C3%20C16%2C10.656%2C14.656%2C12%2C13%2C12z%20M26%2C16.001V2c0-1.105-0.896-2-2-2H2C0.896%2C0%2C0%2C0.896%2C0%2C2v14.001C0%2C17.105%2C0.896%2C18%2C2%2C18h22%20C25.104%2C18%2C26%2C17.105%2C26%2C16.001z%20M23%2C16.001H3c-0.553%2C0-1-0.448-1-1V3c0-0.553%2C0.447-1%2C1-1h20c0.552%2C0%2C1%2C0.447%2C1%2C1v12.001%20C24%2C15.553%2C23.552%2C16.001%2C23%2C16.001z%20M30%2C6h-2v2h1c0.552%2C0%2C1%2C0.448%2C1%2C1v12c0%2C0.552-0.448%2C1.001-1%2C1.001H9%20c-0.553%2C0-1-0.449-1-1.001v-0.999H6v2C6%2C23.105%2C6.896%2C24%2C8%2C24h22c1.104%2C0%2C2-0.895%2C2-1.998V8C32%2C6.896%2C31.104%2C6%2C30%2C6z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-coins": {
        "width": 24,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2230%22%20viewBox%3D%220%200%2024%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M24%2C6c0-3.313-5.373-6-12-6C5.372%2C0%2C0%2C2.687%2C0%2C6%0D%0A%20c0%2C0.342%2C0.07%2C0.675%2C0.181%2C1.002H0v5v0V18v0.002v7h0.181C1.136%2C27.838%2C6.056%2C30%2C12%2C30c5.942%2C0%2C10.863-2.162%2C11.819-4.998H24v-18%0D%0A%20h-0.181C23.93%2C6.675%2C24%2C6.342%2C24%2C6z%20M12%2C2c5.522%2C0%2C10%2C1.791%2C10%2C4s-4.478%2C4-10%2C4C6.477%2C10%2C2%2C8.208%2C2%2C6S6.477%2C2%2C12%2C2z%20M2%2C9.314%0D%0A%20c2.149%2C1.619%2C5.824%2C2.687%2C10%2C2.687c4.176%2C0%2C7.851-1.068%2C10-2.687v2.687C21.998%2C14.21%2C17.521%2C16%2C12%2C16%0D%0A%20c-5.522%2C0-9.999-1.79-10-3.999V9.314z%20M2%2C15.314C4.149%2C16.933%2C7.824%2C18%2C12%2C18c4.176%2C0%2C7.851-1.067%2C10-2.685v2.687%0D%0A%20C21.998%2C20.209%2C17.521%2C22%2C12%2C22c-5.522%2C0-9.999-1.791-10-3.998V15.314z%20M12%2C28c-5.522%2C0-9.999-1.791-10-4v-2.686%0D%0A%20C4.149%2C22.933%2C7.823%2C24%2C12%2C24c4.176%2C0%2C7.851-1.067%2C10-2.685V24C21.998%2C26.209%2C17.521%2C28%2C12%2C28z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-coinsicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2230%22%20viewBox%3D%220%200%2024%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M24%2C6c0-3.313-5.373-6-12-6C5.372%2C0%2C0%2C2.687%2C0%2C6%0D%0A%09%09%09c0%2C0.342%2C0.07%2C0.675%2C0.181%2C1.002H0v5v0V18v0.002v7h0.181C1.136%2C27.838%2C6.056%2C30%2C12%2C30c5.942%2C0%2C10.863-2.162%2C11.819-4.998H24v-18%0D%0A%09%09%09h-0.181C23.93%2C6.675%2C24%2C6.342%2C24%2C6z%20M12%2C2c5.522%2C0%2C10%2C1.791%2C10%2C4s-4.478%2C4-10%2C4C6.477%2C10%2C2%2C8.208%2C2%2C6S6.477%2C2%2C12%2C2z%20M2%2C9.314%0D%0A%09%09%09c2.149%2C1.619%2C5.824%2C2.687%2C10%2C2.687c4.176%2C0%2C7.851-1.068%2C10-2.687v2.687C21.998%2C14.21%2C17.521%2C16%2C12%2C16%0D%0A%09%09%09c-5.522%2C0-9.999-1.79-10-3.999V9.314z%20M2%2C15.314C4.149%2C16.933%2C7.824%2C18%2C12%2C18c4.176%2C0%2C7.851-1.067%2C10-2.685v2.687%0D%0A%09%09%09C21.998%2C20.209%2C17.521%2C22%2C12%2C22c-5.522%2C0-9.999-1.791-10-3.998V15.314z%20M12%2C28c-5.522%2C0-9.999-1.791-10-4v-2.686%0D%0A%09%09%09C4.149%2C22.933%2C7.823%2C24%2C12%2C24c4.176%2C0%2C7.851-1.067%2C10-2.685V24C21.998%2C26.209%2C17.521%2C28%2C12%2C28z%22/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-compass": {
        "width": 28,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2230%22%20viewBox%3D%220%200%2028%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ececec%22%20d%3D%22M28%2C28.997l-9.894-16.1c1.146-0.917%2C1.896-2.311%2C1.896-3.895%0D%0Ac0-2.42-1.716-4.438-3.994-4.901V0h-1.997v4.102c-2.279%2C0.464-3.995%2C2.481-3.995%2C4.901c0%2C1.583%2C0.75%2C2.979%2C1.897%2C3.895%0D%0Al-4.155%2C6.76c-2.697-1.793-4.741-4.486-5.688-7.655H0c1.006%2C3.891%2C3.438%2C7.21%2C6.708%2C9.365l-4.688%2C7.629L3.718%2C30l4.707-7.66%0D%0Ac2.142%2C1.061%2C4.549%2C1.668%2C7.104%2C1.668c2.237%2C0%2C4.36-0.468%2C6.292-1.296L26.301%2C30L28%2C28.997z%20M15.01%2C6.002%20c1.654%2C0%2C2.995%2C1.343%2C2.995%2C3.001c0%2C1.657-1.341%2C3-2.995%2C3c-1.655%2C0-2.996-1.343-2.996-3C12.014%2C7.345%2C13.355%2C6.002%2C15.01%2C6.002z%20%20M15.529%2C22.007c-2.17%2C0-4.219-0.501-6.053-1.377l4.197-6.83c0.428%2C0.12%2C0.871%2C0.205%2C1.337%2C0.205c0.466%2C0%2C0.907-0.084%2C1.335-0.204%0D%0Al4.413%2C7.18C19.14%2C21.632%2C17.381%2C22.007%2C15.529%2C22.007z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-compose": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ededed%22%20d%3D%22M27.995%2C30H2V4.004h15.998V2.005H0V32h29.994V14.004h-1.999V30z%20M7.403%2C17.569L7.403%2C17.569L6.7%2C18.272l-0.702%2C7.73l7.73-0.703L32%2C7.028L24.972%2C0l-4.216%2C4.216L19.35%2C5.622L8.528%2C16.445%20L7.403%2C17.569z%20M24.972%2C2.812l4.217%2C4.216l-2.811%2C2.811l-4.217-4.217L24.972%2C2.812z%20M20.756%2C7.028l4.217%2C4.216L14.431%2C21.785%20l-4.216-4.216L20.756%2C7.028z%20M13.025%2C23.191l-4.919%2C0.703l0.703-4.919L13.025%2C23.191z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-credit-card": {
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M0%2C14v9.999C0%2C26.208%2C1.791%2C28%2C4%2C28h24c2.209%2C0%2C4-1.792%2C4-4.001%20V14v-2H0V14z%20M2%2C14h28v9.999c0%2C1.104-0.896%2C2-2%2C2H4c-1.104%2C0-2-0.896-2-2V14z%20M28%2C0H4C1.791%2C0%2C0%2C1.791%2C0%2C4v2v1.999h32V6V4%20C32%2C1.791%2C30.209%2C0%2C28%2C0z%20M30%2C6H2V4c0-1.105%2C0.896-2.001%2C2-2.001h24c1.104%2C0%2C2%2C0.896%2C2%2C2.001V6z%20M12%2C19.999H4V22h8V19.999z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-devices": {
        "width": 37,
        "height": 41,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2237%22%20height%3D%2241%22%20viewBox%3D%220%200%2037%2041%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233C4042%22%20d%3D%22M4%2C3c0-0.552%2C0.447-1%2C1-1h22c0.552%2C0%2C1%2C0.448%2C1%2C1v14.999h2V2%0D%0A%09%09%09c0-1.104-0.896-2-2-2H4C2.896%2C0%2C2%2C0.896%2C2%2C2v20h2V3z%20M31%2C24H1c-0.553%2C0-1%2C0.447-1%2C1v4c0%2C0.553%2C0.447%2C1%2C1%2C1h30c0.553%2C0%2C1-0.447%2C1-1%0D%0A%09%09%09v-4C32%2C24.447%2C31.553%2C24%2C31%2C24z%20M30%2C28H2v-2h28V28z%20M26%2C17.999V4H6v18h2V6h16v11.999H26z%22/%3E%0D%0A%3Crect%20x%3D%2218.5%22%20y%3D%2210.5%22%20fill%3D%22%23FFF%22%20width%3D%2217.062%22%20height%3D%2228.596%22/%3E%0D%0A%3Cpath%20fill%3D%22%233C4042%22%20d%3D%22M33%2C9H21c-2.209%2C0-4%2C1.791-4%2C4v24c0%2C2.209%2C1.791%2C4%2C4%2C4h12%0D%0A%09%09%09c2.209%2C0%2C4-1.791%2C4-4V13C37%2C10.791%2C35.209%2C9%2C33%2C9z%20M35%2C37c0%2C1.104-0.896%2C2-2%2C2H21c-1.104%2C0-2-0.896-2-2v-6h16V37z%20M35%2C29H19V17h16%0D%0A%09%09%09V29z%20M35%2C14.999H19V13c0-1.104%2C0.896-2%2C2-2h12c1.104%2C0%2C2%2C0.896%2C2%2C2V14.999z%20M27%2C37c1.104%2C0%2C2-0.896%2C2-1.999%0D%0A%09%09%09C29%2C33.896%2C28.104%2C33%2C27%2C33s-2%2C0.896-2%2C2.001C25%2C36.104%2C25.896%2C37%2C27%2C37z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-diamond": {
        "width": 36,
        "height": 36,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%3E%0D%0A%3Cpath%20opacity%3D%220.08%22%20d%3D%22M18%2C2.828l15.172%2C15.171L18%2C33.172L2.829%2C17.999L18%2C2.828%20M18%2C0L0%2C17.999L18%2C36l18-18.001L18%2C0L18%2C0z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-doc": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20enable-background%3D%22new%200%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M23%2C12H9c-0.552%2C0-1%2C0.448-1%2C1c0%2C0.553%2C0.448%2C1%2C1%2C1h14%0D%0A%20c0.552%2C0%2C1-0.447%2C1-1C24%2C12.448%2C23.552%2C12%2C23%2C12z%20M23%2C18.001H9c-0.552%2C0-1%2C0.447-1%2C1C8%2C19.553%2C8.448%2C20%2C9%2C20h14%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.999C24%2C18.448%2C23.552%2C18.001%2C23%2C18.001z%20M28%2C0H4C1.791%2C0%2C0%2C1.791%2C0%2C4v24c0%2C2.209%2C1.791%2C4%2C4%2C4h24%0D%0A%20c2.209%2C0%2C4-1.791%2C4-4V4C32%2C1.791%2C30.209%2C0%2C28%2C0z%20M30%2C28c0%2C1.104-0.896%2C2-2%2C2H4c-1.104%2C0-2-0.896-2-2V4c0-1.104%2C0.896-2%2C2-2h24%0D%0A%20c1.104%2C0%2C2%2C0.896%2C2%2C2V28z%20M23%2C6H9C8.448%2C6%2C8%2C6.448%2C8%2C7c0%2C0.553%2C0.448%2C1%2C1%2C1h14c0.552%2C0%2C1-0.447%2C1-1C24%2C6.448%2C23.552%2C6%2C23%2C6z%0D%0A%20%20M23%2C24H9c-0.552%2C0-1%2C0.448-1%2C1s0.448%2C1.001%2C1%2C1.001h14c0.552%2C0%2C1-0.449%2C1-1.001S23.552%2C24%2C23%2C24z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-doc-stack": {
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c545f%22%20d%3D%22M32%2C8L16%2C0L0%2C8l16%2C8L32%2C8z%20M16%2C1.998l12%2C5.779L16%2C14L4%2C7.777%20L16%2C1.998z%20M16%2C19.999L4.464%2C14H0l16%2C8l16-8h-4.465L16%2C19.999z%20M16%2C26L4.464%2C19.999H0L16%2C28l16-8.001h-4.465L16%2C26z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-double-diamond": {
        "width": 44,
        "height": 36,
        "backgroundImage": "url(/img/icons/double-diamond.svg)"
    },
    "icon-download": {
        "width": 26,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2226%22%20height%3D%2232%22%20viewBox%3D%220%200%2026%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M12.155%2C25.519c0.041%2C0.066%2C0.072%2C0.138%2C0.13%2C0.195%20c0.195%2C0.195%2C0.451%2C0.287%2C0.706%2C0.283c0.003%2C0%2C0.006%2C0.002%2C0.009%2C0.002s0.006-0.002%2C0.009-0.002%20c0.255%2C0.004%2C0.511-0.088%2C0.706-0.283c0.058-0.058%2C0.089-0.129%2C0.13-0.196l9.871-10.851c0.381-0.382%2C0.381-1%2C0-1.382%20c-0.382-0.381-1-0.381-1.381%2C0L14%2C22.447V1c0-0.553-0.448-1-1-1s-1%2C0.447-1%2C1v21.448l-8.333-9.164c-0.382-0.381-1-0.381-1.381%2C0%20c-0.381%2C0.382-0.381%2C1%2C0%2C1.382L12.155%2C25.519z%20M25%2C30H1c-0.552%2C0-1%2C0.448-1%2C0.999C0%2C31.552%2C0.448%2C32%2C1%2C32h24%20c0.553%2C0%2C1-0.448%2C1-1.001C26%2C30.448%2C25.553%2C30%2C25%2C30z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-downloadicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2226%22%20height%3D%2232%22%20viewBox%3D%220%200%2026%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M12.155%2C25.519c0.041%2C0.066%2C0.072%2C0.138%2C0.13%2C0.195%20c0.195%2C0.195%2C0.451%2C0.287%2C0.706%2C0.283c0.003%2C0%2C0.006%2C0.002%2C0.009%2C0.002s0.006-0.002%2C0.009-0.002%20c0.255%2C0.004%2C0.511-0.088%2C0.706-0.283c0.058-0.058%2C0.089-0.129%2C0.13-0.196l9.871-10.851c0.381-0.382%2C0.381-1%2C0-1.382%20c-0.382-0.381-1-0.381-1.381%2C0L14%2C22.447V1c0-0.553-0.448-1-1-1s-1%2C0.447-1%2C1v21.448l-8.333-9.164c-0.382-0.381-1-0.381-1.381%2C0%20c-0.381%2C0.382-0.381%2C1%2C0%2C1.382L12.155%2C25.519z%20M25%2C30H1c-0.552%2C0-1%2C0.448-1%2C0.999C0%2C31.552%2C0.448%2C32%2C1%2C32h24%20c0.553%2C0%2C1-0.448%2C1-1.001C26%2C30.448%2C25.553%2C30%2C25%2C30z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-envelope": {
        "width": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2232%22%20viewBox%3D%220%200%2030%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ededed%22%20d%3D%22M28%2C0H2C0.896%2C0%2C0%2C0.895%2C0%2C1.998v28.004C0%2C31.105%2C0.896%2C32%2C2%2C32%20h26c1.104%2C0%2C2-0.895%2C2-1.998V1.998C30%2C0.895%2C29.104%2C0%2C28%2C0z%20M3%2C1.998h24C28.03%2C1.998%2C23%2C6%2C23%2C6H7C7%2C6%2C1.969%2C1.998%2C3%2C1.998z%20%20M2%2C3.999L4%2C6c0%2C0%2C0.896%2C2%2C2%2C2h8v16H6c-1.104%2C0-2%2C2-2%2C2l-2%2C2.001V3.999z%20M27%2C30.002H3C1.999%2C30.002%2C7%2C26%2C7%2C26h16%20C23%2C26%2C28.001%2C30.002%2C27%2C30.002z%20M28%2C28.001L26%2C26c0%2C0-0.896-2-2-2h-8V8h8c1.104%2C0%2C2-2%2C2-2l2-2.001V28.001z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-eye": {
        "height": 24,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2024%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M16%2C4c-4.418%2C0-8%2C3.582-8%2C8c0%2C4.418%2C3.582%2C8%2C8%2C8%20c4.418%2C0%2C8-3.582%2C8-8C24%2C7.582%2C20.418%2C4%2C16%2C4z%20M16%2C17.998c-3.314%2C0-6-2.686-6-5.999s2.686-6%2C6-6c3.313%2C0%2C6%2C2.687%2C6%2C6%20S19.313%2C17.998%2C16%2C17.998z%20M32%2C12c0%2C0-7.164-12-16-12C7.164%2C0%2C0%2C12%2C0%2C12L0%2C12l0%2C0.001C0%2C12.001%2C7.164%2C24%2C16%2C24%20c8.836%2C0%2C16-11.999%2C16-11.999V12L32%2C12z%20M16%2C22C9.803%2C22%2C4.244%2C14.717%2C2.379%2C11.991C4.758%2C8.469%2C10.305%2C2.001%2C16%2C2.001%20c6.197%2C0%2C11.756%2C7.283%2C13.621%2C10.011C27.242%2C15.533%2C21.695%2C22%2C16%2C22z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-facebook": {
        "width": 9,
        "height": 17,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%229%22%20height%3D%2217%22%20viewBox%3D%220%200%209%2017%22%3E%0D%0A%3Cpath%20fill%3D%22%238c8c8c%22%20d%3D%22M5.842%2C17V9.246h2.653l0.397-3.022H5.842v-1.93c0-0.875%2C0.247-1.471%2C1.527-1.471L9%2C2.822V0.119%20C8.717%2C0.083%2C7.75%2C0%2C6.623%2C0C4.271%2C0%2C2.66%2C1.408%2C2.66%2C3.995v2.229H0v3.022h2.66V17H5.842z%22/%3E%0D%0A%3C/svg%3E')"
    },
    "icon-fancy-diamond": {
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2230%22%20viewBox%3D%220%200%2032%2030%22%3E%0D%0A%3Cpath%20fill%3D%22%231b1b1b%22%20d%3D%22M31.841%2C9.239l-4.373-8.35c-0.255-0.487-0.914-0.885-1.464-0.885H15.925C15.919%2C0.004%2C15.913%2C0%2C15.907%2C0%0D%0A%20c-0.009%2C0-0.018%2C0.003-0.027%2C0.004H5.997c-0.55%2C0-1.211%2C0.396-1.47%2C0.882L0.165%2C9.075c-0.259%2C0.485-0.207%2C1.247%2C0.113%2C1.693%0D%0A%20l15.007%2C18.894C15.447%2C29.887%2C15.661%2C30%2C15.874%2C30c0.212%2C0%2C0.424-0.109%2C0.587-0.33l1.177-1.445l0.188-0.063l-0.045-0.113%0D%0A%20l13.933-17.121C32.038%2C10.486%2C32.096%2C9.726%2C31.841%2C9.239z%20M29.455%2C8.993h-5.758l2.487-6.245L29.455%2C8.993z%20M20.749%2C10.992%0D%0A%20l-4.89%2C12.277l-4.934-12.277H20.749z%20M10.675%2C8.993l5.242-6.981l5.242%2C6.981H10.675z%20M17.933%2C2.001h6.398l-2.224%2C5.581%0D%0A%20L17.933%2C2.001z%20M9.617%2C7.739L7.311%2C2.001h6.62L9.617%2C7.739z%20M8.87%2C10.992l5.746%2C14.494L3.001%2C10.992H8.87z%20M22.901%2C10.992h6.192%0D%0A%20L17.069%2C25.634L22.901%2C10.992z%20M5.687%2C2.962l2.391%2C6.031H2.474L5.687%2C2.962z%20M29.912%2C9.995V9.867l0.041%2C0.078L29.912%2C9.995z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-fancy-diamondicon-lite": {
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2230%22%20viewBox%3D%220%200%2032%2030%22%3E%0D%0A%3Cpath%20fill%3D%22%23ececec%22%20d%3D%22M31.841%2C9.239l-4.373-8.35c-0.255-0.487-0.914-0.885-1.464-0.885H15.925C15.919%2C0.004%2C15.913%2C0%2C15.907%2C0%0D%0A%20c-0.009%2C0-0.018%2C0.003-0.027%2C0.004H5.997c-0.55%2C0-1.211%2C0.396-1.47%2C0.882L0.165%2C9.075c-0.259%2C0.485-0.207%2C1.247%2C0.113%2C1.693%0D%0A%20l15.007%2C18.894C15.447%2C29.887%2C15.661%2C30%2C15.874%2C30c0.212%2C0%2C0.424-0.109%2C0.587-0.33l1.177-1.445l0.188-0.063l-0.045-0.113%0D%0A%20l13.933-17.121C32.038%2C10.486%2C32.096%2C9.726%2C31.841%2C9.239z%20M29.455%2C8.993h-5.758l2.487-6.245L29.455%2C8.993z%20M20.749%2C10.992%0D%0A%20l-4.89%2C12.277l-4.934-12.277H20.749z%20M10.675%2C8.993l5.242-6.981l5.242%2C6.981H10.675z%20M17.933%2C2.001h6.398l-2.224%2C5.581%0D%0A%20L17.933%2C2.001z%20M9.617%2C7.739L7.311%2C2.001h6.62L9.617%2C7.739z%20M8.87%2C10.992l5.746%2C14.494L3.001%2C10.992H8.87z%20M22.901%2C10.992h6.192%0D%0A%20L17.069%2C25.634L22.901%2C10.992z%20M5.687%2C2.962l2.391%2C6.031H2.474L5.687%2C2.962z%20M29.912%2C9.995V9.867l0.041%2C0.078L29.912%2C9.995z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-file-stack": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M1.5%2C3h13C14.775%2C3%2C15%2C2.776%2C15%2C2.5C15%2C2.224%2C14.775%2C2%2C14.5%2C2%20h-13C1.224%2C2%2C1%2C2.224%2C1%2C2.5C1%2C2.776%2C1.224%2C3%2C1.5%2C3z%20M0%2C4v12h16V4H0z%20M15%2C14.999H1V5h14V14.999z%20M3.5%2C1H13%20c0.275%2C0%2C0.5-0.224%2C0.5-0.5C13.5%2C0.224%2C13.275%2C0%2C13%2C0H3.5C3.224%2C0%2C3%2C0.224%2C3%2C0.5C3%2C0.776%2C3.224%2C1%2C3.5%2C1z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-file-stackicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M1.5%2C3h13C14.775%2C3%2C15%2C2.776%2C15%2C2.5C15%2C2.224%2C14.775%2C2%2C14.5%2C2%0D%0A%20h-13C1.224%2C2%2C1%2C2.224%2C1%2C2.5C1%2C2.776%2C1.224%2C3%2C1.5%2C3z%20M0%2C4v12h16V4H0z%20M15%2C14.999H1V5h14V14.999z%20M3.5%2C1H13%0D%0A%20c0.275%2C0%2C0.5-0.224%2C0.5-0.5C13.5%2C0.224%2C13.275%2C0%2C13%2C0H3.5C3.224%2C0%2C3%2C0.224%2C3%2C0.5C3%2C0.776%2C3.224%2C1%2C3.5%2C1z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-film": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M30%2C0h-4h-2H8H6H2C0.896%2C0%2C0%2C0.896%2C0%2C2v3.999v2v3.999v2.001V18%20v1.999V24v2v3.999C0%2C31.104%2C0.896%2C32%2C2%2C32h4h2h16h2h4c1.104%2C0%2C2-0.896%2C2-2.001V26v-2v-4.001V18v-4.001v-2.001V7.999v-2V2%20C32%2C0.896%2C31.104%2C0%2C30%2C0z%20M8%2C11.998V7.999v-2V2h16v3.999v2v3.999v2.001v2H8v-2V11.998z%20M2%2C3c0-0.553%2C0.447-1%2C1-1h3v3.999H2V3z%20M2%2C7.999h4v3.999H2V7.999z%20M6%2C29.999H3c-0.553%2C0-1-0.447-1-1V26h4V29.999z%20M6%2C24H2v-4.001h4V24z%20M2%2C18v-4.001h4v2V18H2z%20M24%2C19.999V24v2v3.999H8V26v-2v-4.001V18h16V19.999z%20M30%2C28.999c0%2C0.553-0.448%2C1-1%2C1h-3V26h4V28.999z%20M30%2C24h-4v-4.001h4V24z%20M30%2C18h-4v-2.001v-2h4V18z%20M30%2C11.998h-4V7.999h4V11.998z%20M30%2C5.999h-4V2h3c0.552%2C0%2C1%2C0.447%2C1%2C1V5.999z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-food": {
        "height": 26,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2226%22%20viewBox%3D%220%200%2032%2026%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M0%2C20h0.051C0.028%2C19.668%2C0%2C19.338%2C0%2C19%0D%0A%20C0%2C11.054%2C7.184%2C4.567%2C15%2C4.05V2h-2c-0.553%2C0-1-0.448-1-1C12%2C0.447%2C12.447%2C0%2C13%2C0h6c0.552%2C0%2C1%2C0.447%2C1%2C1.001c0%2C0.551-0.448%2C1-1%2C1h-2%0D%0A%20v2.05C24.815%2C4.567%2C32%2C11.054%2C32%2C19c0%2C0.338-0.028%2C0.668-0.051%2C1H32v2H0V20z%20M2.05%2C20h27.899C29.975%2C19.67%2C30%2C19.338%2C30%2C19%0D%0A%20c0-7.181-6.82-12.999-14-12.999S2%2C11.819%2C2%2C19C2%2C19.338%2C2.025%2C19.67%2C2.05%2C20z%20M1%2C24h30c0.552%2C0%2C1%2C0.449%2C1%2C1c0%2C0.553-0.448%2C1-1%2C1H1%0D%0A%20c-0.553%2C0-1-0.447-1-1C0%2C24.449%2C0.447%2C24%2C1%2C24z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-discicon-food": {
        "backgroundPosition": "50% 43%"
    },
    "icon-gear": {
        "width": 16,
        "height": 16,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M16%2C8c0-1.04-0.796-1.884-1.81-1.981%20c-0.11-0.345-0.251-0.676-0.415-0.994c0.65-0.786%2C0.617-1.947-0.119-2.683c-0.735-0.736-1.896-0.77-2.683-0.119%0D%0A%20C10.656%2C2.061%2C10.326%2C1.92%2C9.98%2C1.81C9.884%2C0.795%2C9.039%2C0%2C8%2C0S6.117%2C0.795%2C6.019%2C1.81C5.674%2C1.92%2C5.343%2C2.061%2C5.026%2C2.224%0D%0A%20C4.24%2C1.574%2C3.079%2C1.607%2C2.343%2C2.343C1.607%2C3.079%2C1.574%2C4.241%2C2.225%2C5.027C2.061%2C5.344%2C1.92%2C5.675%2C1.81%2C6.02%0D%0A%20C0.796%2C6.117%2C0%2C6.961%2C0%2C8s0.796%2C1.883%2C1.81%2C1.98c0.11%2C0.346%2C0.251%2C0.677%2C0.415%2C0.994c-0.65%2C0.785-0.617%2C1.947%2C0.118%2C2.683%0D%0A%20c0.736%2C0.736%2C1.897%2C0.77%2C2.683%2C0.119c0.317%2C0.164%2C0.648%2C0.305%2C0.993%2C0.415C6.116%2C15.205%2C6.961%2C16%2C8%2C16s1.884-0.795%2C1.98-1.809%0D%0A%20c0.346-0.11%2C0.676-0.251%2C0.993-0.415c0.786%2C0.65%2C1.947%2C0.617%2C2.683-0.119c0.736-0.735%2C0.77-1.896%2C0.119-2.682%0D%0A%20c0.164-0.317%2C0.305-0.649%2C0.415-0.995C15.204%2C9.884%2C16%2C9.04%2C16%2C8z%20M13.408%2C9.001c-0.143%2C0.774-0.456%2C1.485-0.886%2C2.108%0D%0A%20l0.427%2C0.428c0.391%2C0.391%2C0.391%2C1.022%2C0%2C1.414c-0.391%2C0.391-1.023%2C0.391-1.414%2C0l-0.429-0.429%0D%0A%20C10.483%2C12.951%2C9.773%2C13.264%2C9%2C13.406v0.595c0%2C0.552-0.448%2C1-1%2C1c-0.553%2C0-1-0.448-1-1v-0.595%0D%0A%20c-0.773-0.143-1.483-0.455-2.107-0.884l-0.429%2C0.429c-0.39%2C0.391-1.023%2C0.391-1.414%2C0c-0.391-0.392-0.391-1.023%2C0-1.414%0D%0A%20l0.428-0.428c-0.43-0.624-0.743-1.335-0.886-2.108H2c-0.553%2C0-1-0.448-1-1s0.447-1%2C1-1h0.592c0.143-0.774%2C0.456-1.484%2C0.885-2.108%0D%0A%20L3.05%2C4.465c-0.391-0.392-0.391-1.024%2C0-1.415c0.391-0.39%2C1.024-0.39%2C1.414%2C0l0.428%2C0.428C5.516%2C3.05%2C6.227%2C2.737%2C7%2C2.595V2%0D%0A%20c0-0.552%2C0.447-1%2C1-1c0.552%2C0%2C1%2C0.448%2C1%2C1v0.595c0.773%2C0.143%2C1.483%2C0.455%2C2.107%2C0.884l0.428-0.428c0.391-0.39%2C1.023-0.39%2C1.414%2C0%0D%0A%20c0.391%2C0.391%2C0.391%2C1.023%2C0%2C1.415l-0.427%2C0.427c0.43%2C0.624%2C0.743%2C1.334%2C0.886%2C2.108H14c0.552%2C0%2C1%2C0.448%2C1%2C1s-0.448%2C1-1%2C1H13.408z%0D%0A%20%20M8%2C5C6.343%2C5%2C5%2C6.344%2C5%2C8c0%2C1.657%2C1.343%2C3%2C3%2C3c1.656%2C0%2C3-1.344%2C3-3C11%2C6.344%2C9.656%2C5%2C8%2C5z%20M8%2C10c-1.104%2C0-2-0.895-2-2%0D%0A%20s0.896-2%2C2-2s2%2C0.895%2C2%2C2S9.104%2C10%2C8%2C10z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-gearicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M16%2C8c0-1.04-0.796-1.884-1.81-1.981%0D%0A%20c-0.11-0.345-0.251-0.676-0.415-0.994c0.65-0.786%2C0.617-1.947-0.119-2.683c-0.735-0.736-1.896-0.77-2.683-0.119%0D%0A%20C10.656%2C2.061%2C10.326%2C1.92%2C9.98%2C1.81C9.884%2C0.795%2C9.039%2C0%2C8%2C0S6.117%2C0.795%2C6.019%2C1.81C5.674%2C1.92%2C5.343%2C2.061%2C5.026%2C2.224%0D%0A%20C4.24%2C1.574%2C3.079%2C1.607%2C2.343%2C2.343C1.607%2C3.079%2C1.574%2C4.241%2C2.225%2C5.027C2.061%2C5.344%2C1.92%2C5.675%2C1.81%2C6.02%0D%0A%20C0.796%2C6.117%2C0%2C6.961%2C0%2C8s0.796%2C1.883%2C1.81%2C1.98c0.11%2C0.346%2C0.251%2C0.677%2C0.415%2C0.994c-0.65%2C0.785-0.617%2C1.947%2C0.118%2C2.683%0D%0A%20c0.736%2C0.736%2C1.897%2C0.77%2C2.683%2C0.119c0.317%2C0.164%2C0.648%2C0.305%2C0.993%2C0.415C6.116%2C15.205%2C6.961%2C16%2C8%2C16s1.884-0.795%2C1.98-1.809%0D%0A%20c0.346-0.11%2C0.676-0.251%2C0.993-0.415c0.786%2C0.65%2C1.947%2C0.617%2C2.683-0.119c0.736-0.735%2C0.77-1.896%2C0.119-2.682%0D%0A%20c0.164-0.317%2C0.305-0.649%2C0.415-0.995C15.204%2C9.884%2C16%2C9.04%2C16%2C8z%20M13.408%2C9.001c-0.143%2C0.774-0.456%2C1.485-0.886%2C2.108%0D%0A%20l0.427%2C0.428c0.391%2C0.391%2C0.391%2C1.022%2C0%2C1.414c-0.391%2C0.391-1.023%2C0.391-1.414%2C0l-0.429-0.429%0D%0A%20C10.483%2C12.951%2C9.773%2C13.264%2C9%2C13.406v0.595c0%2C0.552-0.448%2C1-1%2C1c-0.553%2C0-1-0.448-1-1v-0.595%0D%0A%20c-0.773-0.143-1.483-0.455-2.107-0.884l-0.429%2C0.429c-0.39%2C0.391-1.023%2C0.391-1.414%2C0c-0.391-0.392-0.391-1.023%2C0-1.414%0D%0A%20l0.428-0.428c-0.43-0.624-0.743-1.335-0.886-2.108H2c-0.553%2C0-1-0.448-1-1s0.447-1%2C1-1h0.592c0.143-0.774%2C0.456-1.484%2C0.885-2.108%0D%0A%20L3.05%2C4.465c-0.391-0.392-0.391-1.024%2C0-1.415c0.391-0.39%2C1.024-0.39%2C1.414%2C0l0.428%2C0.428C5.516%2C3.05%2C6.227%2C2.737%2C7%2C2.595V2%0D%0A%20c0-0.552%2C0.447-1%2C1-1c0.552%2C0%2C1%2C0.448%2C1%2C1v0.595c0.773%2C0.143%2C1.483%2C0.455%2C2.107%2C0.884l0.428-0.428c0.391-0.39%2C1.023-0.39%2C1.414%2C0%0D%0A%20c0.391%2C0.391%2C0.391%2C1.023%2C0%2C1.415l-0.427%2C0.427c0.43%2C0.624%2C0.743%2C1.334%2C0.886%2C2.108H14c0.552%2C0%2C1%2C0.448%2C1%2C1s-0.448%2C1-1%2C1H13.408z%0D%0A%20%20M8%2C5C6.343%2C5%2C5%2C6.344%2C5%2C8c0%2C1.657%2C1.343%2C3%2C3%2C3c1.656%2C0%2C3-1.344%2C3-3C11%2C6.344%2C9.656%2C5%2C8%2C5z%20M8%2C10c-1.104%2C0-2-0.895-2-2%0D%0A%20s0.896-2%2C2-2s2%2C0.895%2C2%2C2S9.104%2C10%2C8%2C10z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-globe": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M31.949%2C15C31.431%2C6.632%2C24.498%2C0%2C16%2C0%20C7.501%2C0%2C0.57%2C6.632%2C0.051%2C15H0v2h0.05C0.569%2C25.368%2C7.5%2C32%2C16%2C32c8.498%2C0%2C15.431-6.632%2C15.949-14.999H32v-2H31.949z%20M26.704%2C7%20h-1.778c-1.062%2C0.296-2.355%2C0.538-3.806%2C0.71c-0.495-2.178-1.18-4.016-1.995-5.348C22.141%2C3.051%2C24.779%2C4.715%2C26.704%2C7z%20M12.015%2C17.001h7.971c-0.037%2C1.843-0.177%2C3.587-0.398%2C5.164C18.44%2C22.061%2C17.24%2C22.001%2C16%2C22.001c-1.241%2C0-2.44%2C0.06-3.587%2C0.164%0D%0A%20C12.192%2C20.588%2C12.052%2C18.844%2C12.015%2C17.001z%20M12.015%2C15c0.037-1.846%2C0.178-3.591%2C0.399-5.17C13.559%2C9.938%2C14.759%2C10%2C16%2C10%0D%0A%20s2.441-0.061%2C3.586-0.169c0.222%2C1.58%2C0.362%2C3.325%2C0.399%2C5.17H12.015z%20M16%2C1.999c1.344%2C0%2C2.529%2C2.326%2C3.253%2C5.884%0D%0A%20C18.217%2C7.957%2C17.131%2C8%2C16%2C8s-2.217-0.043-3.253-0.117C13.471%2C4.325%2C14.657%2C1.999%2C16%2C1.999z%20M12.874%2C2.362%0D%0A%20c-0.815%2C1.333-1.499%2C3.17-1.994%2C5.348C9.429%2C7.538%2C8.135%2C7.296%2C7.074%2C7H5.296C7.22%2C4.715%2C9.859%2C3.051%2C12.874%2C2.362z%20M4.602%2C7.897%0D%0A%20c1.486%2C0.745%2C3.532%2C1.336%2C5.917%2C1.7c-0.274%2C1.673-0.448%2C3.489-0.493%2C5.403H2.043C2.23%2C12.361%2C3.154%2C9.929%2C4.602%2C7.897z%0D%0A%20M10.025%2C17.001c0.045%2C1.909%2C0.219%2C3.721%2C0.491%2C5.39c-2.387%2C0.354-4.443%2C0.927-5.957%2C1.651c-1.423-2.02-2.331-4.429-2.516-7.041%0D%0A%20H10.025z%20M5.295%2C25h1.648c1.095-0.301%2C2.433-0.546%2C3.935-0.719c0.495%2C2.182%2C1.179%2C4.023%2C1.996%2C5.357%0D%0A%20C9.859%2C28.95%2C7.22%2C27.286%2C5.295%2C25z%20M16%2C30.001c-1.344%2C0-2.529-2.327-3.253-5.888C13.784%2C24.042%2C14.87%2C24%2C16%2C24%0D%0A%20s2.217%2C0.042%2C3.254%2C0.113C18.529%2C27.674%2C17.344%2C30.001%2C16%2C30.001z%20M19.126%2C29.639c0.817-1.334%2C1.501-3.176%2C1.996-5.357%0D%0A%20c1.502%2C0.173%2C2.84%2C0.418%2C3.935%2C0.719h1.648C24.78%2C27.286%2C22.141%2C28.95%2C19.126%2C29.639z%20M27.44%2C24.042%0D%0A%20c-1.514-0.725-3.57-1.298-5.956-1.651c0.272-1.669%2C0.446-3.48%2C0.491-5.39h7.98C29.771%2C19.613%2C28.863%2C22.022%2C27.44%2C24.042z%0D%0A%20M21.976%2C15c-0.045-1.914-0.22-3.73-0.493-5.403c2.384-0.364%2C4.43-0.955%2C5.916-1.7c1.447%2C2.032%2C2.371%2C4.464%2C2.558%2C7.103H21.976z%22%0D%0A%20/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-graph": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233v4042%22%20d%3D%22M25.5%2C5.936c-0.479-0.276-1.09-0.111-1.366%2C0.366l-6.178%2C5.64%0D%0A%20l-4.883-3.478c-0.25-0.371-0.747-0.528-1.211-0.436c-0.087%2C0.012-0.168%2C0.037-0.25%2C0.071c-0.019%2C0.008-0.039%2C0.008-0.057%2C0.017%0D%0A%20c-0.018%2C0.009-0.027%2C0.024-0.044%2C0.033c-0.071%2C0.041-0.134%2C0.088-0.194%2C0.146c-0.059%2C0.054-0.108%2C0.109-0.151%2C0.171%0D%0A%20c-0.009%2C0.015-0.024%2C0.022-0.033%2C0.038l-5%2C5.975c-0.276%2C0.482-0.112%2C1.098%2C0.366%2C1.375c0.478%2C0.279%2C1.09%2C0.113%2C1.366-0.367%0D%0A%20l4.41-5.27l4.65%2C3.312c0.078%2C0.115%2C0.181%2C0.21%2C0.298%2C0.285c0.075%2C0.094%2C0.165%2C0.18%2C0.276%2C0.244%0D%0A%20c0.479%2C0.276%2C1.09%2C0.112%2C1.365-0.367l7-6.391C26.143%2C6.823%2C25.979%2C6.211%2C25.5%2C5.936z%20M31%2C0h-3H4H1C0.447%2C0%2C0%2C0.447%2C0%2C0.999%0D%0A%20c0%2C0.554%2C0.447%2C1%2C1%2C1h1v17.995c0%2C1.105%2C0.895%2C1.999%2C2%2C1.999h8.637l-2.489%2C4.581c-0.307%2C0.455-0.125%2C1.035%2C0.407%2C1.299%0D%0A%20c0.532%2C0.262%2C1.211%2C0.107%2C1.518-0.348l2.778-5.114c0.089-0.133%2C0.126-0.275%2C0.136-0.418h2.026c0.01%2C0.143%2C0.047%2C0.285%2C0.136%2C0.418%0D%0A%20l2.777%2C5.114c0.308%2C0.455%2C0.986%2C0.609%2C1.519%2C0.348c0.531-0.264%2C0.714-0.844%2C0.407-1.299l-2.489-4.581H28c1.104%2C0%2C2-0.894%2C2-1.999%0D%0A%20V1.999h1c0.553%2C0%2C1-0.447%2C1-1C32%2C0.447%2C31.553%2C0%2C31%2C0z%20M28%2C2.999v1.002v14.993c0%2C0.553-0.448%2C1-1%2C1H5c-0.553%2C0-1-0.447-1-1V4.001%0D%0A%20V2.999V2.001h0.99c0.003%2C0%2C0.006-0.002%2C0.01-0.002h22c0.004%2C0%2C0.006%2C0.002%2C0.01%2C0.002H28V2.999z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-grid": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M0%2C8h8V0H0V8z%20M2%2C2h4v4H2V2z%20M0%2C32h8v-8H0V32z%20M2%2C26h4v4H2V26z%0D%0A%20M0%2C20h8v-8H0V20z%20M2%2C14h4v4H2V14z%20M24%2C0v8h8V0H24z%20M30%2C6h-4V2h4V6z%20M24%2C20h8v-8h-8V20z%20M26%2C14h4v4h-4V14z%20M24%2C32h8v-8h-8V32z%0D%0A%20M26%2C26h4v4h-4V26z%20M12%2C32h8v-8h-8V32z%20M14%2C26h4v4h-4V26z%20M12%2C20h8v-8h-8V20z%20M14%2C14h4v4h-4V14z%20M12%2C8h8V0h-8V8z%20M14%2C2h4v4h-4V2z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-gridicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M0%2C8h8V0H0V8z%20M2%2C2h4v4H2V2z%20M0%2C32h8v-8H0V32z%20M2%2C26h4v4H2V26z%0D%0A%20M0%2C20h8v-8H0V20z%20M2%2C14h4v4H2V14z%20M24%2C0v8h8V0H24z%20M30%2C6h-4V2h4V6z%20M24%2C20h8v-8h-8V20z%20M26%2C14h4v4h-4V14z%20M24%2C32h8v-8h-8V32z%0D%0A%20M26%2C26h4v4h-4V26z%20M12%2C32h8v-8h-8V32z%20M14%2C26h4v4h-4V26z%20M12%2C20h8v-8h-8V20z%20M14%2C14h4v4h-4V14z%20M12%2C8h8V0h-8V8z%20M14%2C2h4v4h-4V2z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-hamburger-rotated": {
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M8.531%2C0L7.026%2C2.577l23.468%2C13.395L32%2C13.394L8.531%2C0z%0D%0A%20%20M3.513%2C8.592l23.469%2C13.394l1.506-2.577L5.019%2C6.014L3.513%2C8.592z%20M0%2C14.606L23.469%2C28l1.506-2.578L1.505%2C12.029L0%2C14.606z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-hamburger-rotatedicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e4e4e4%22%20d%3D%22M8.531%2C0L7.026%2C2.577l23.468%2C13.395L32%2C13.394L8.531%2C0z%0D%0A%20M3.513%2C8.592l23.469%2C13.394l1.506-2.577L5.019%2C6.014L3.513%2C8.592z%20M0%2C14.606L23.469%2C28l1.506-2.578L1.505%2C12.029L0%2C14.606z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-image": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M10%2C12c1.657%2C0%2C3-1.343%2C3-3s-1.343-3-3-3C8.343%2C6%2C7%2C7.343%2C7%2C9%0D%0A%20S8.343%2C12%2C10%2C12z%20M9%2C7.999h2V10H9V7.999z%20M30%2C0H2C0.895%2C0%2C0%2C0.896%2C0%2C2v28c0%2C1.104%2C0.895%2C2%2C2%2C2h28c1.104%2C0%2C2-0.896%2C2-2V2%0D%0A%20C32%2C0.896%2C31.104%2C0%2C30%2C0z%20M30%2C29.001C30%2C29.552%2C29.553%2C30%2C29%2C30H3c-0.552%2C0-1-0.448-1-0.999V3c0-0.553%2C0.447-1%2C1-1h26%0D%0A%20c0.553%2C0%2C1%2C0.447%2C1%2C1V29.001z%20M26.199%2C12.29l-8.355%2C9.295l-6.044-4.295c-0.22-0.22-0.512-0.312-0.799-0.294%0D%0A%20c-0.288-0.017-0.58%2C0.075-0.8%2C0.294L4.289%2C25.2c-0.408%2C0.408-0.408%2C1.069%2C0%2C1.479c0.408%2C0.408%2C1.07%2C0.408%2C1.478%2C0l5.44-7.281%0D%0A%20l6.025%2C4.281c0.211%2C0.211%2C0.49%2C0.308%2C0.768%2C0.3c0.277%2C0.008%2C0.556-0.089%2C0.767-0.3l8.911-9.912c0.408-0.409%2C0.408-1.069%2C0-1.477%0D%0A%20C27.27%2C11.882%2C26.607%2C11.882%2C26.199%2C12.29z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-island": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill%3D%22%233c4042%22%20d%3D%22M31.857%2C30.486C28.582%2C25.027%2C22.358%2C21.5%2C16%2C21.5c-0.015%2C0-0.029%2C0.002-0.044%2C0.002%0D%0A%20c-0.624-5.578%2C2.846-9.792%2C3.602-10.632c0.379-0.133%2C0.735-0.214%2C1.054-0.214c2.684%2C0%2C3.264%2C5.319%2C3.264%2C6.637v1.799l1.527-0.949%0D%0A%20c3.304-2.055%2C4.764-5.557%2C4.723-7.941c-0.064-3.698-2.336-5.819-6.233-5.819c-1.329%2C0-2.573%2C0.239-3.36%2C0.433%0D%0A%20C19.669%2C3.25%2C17.354%2C0%2C13%2C0C8.548%2C0%2C4.966%2C1.773%2C3.172%2C4.865c-1.848%2C3.184-1.507%2C7.314%2C0.96%2C11.63l0.927%2C1.624l0.836-1.672%0D%0A%20c0.258-0.515%2C1.086-2.013%2C1.813-2.74l0.167-0.167l0.989-2.965l0.713%2C2.842l1.254-1.86c0.018-0.025%2C1.746-2.545%2C4.094-2.545%0D%0A%20c0.88%2C0%2C1.773%2C0.373%2C2.667%2C1.081c-1.376%2C1.692-4.221%2C5.951-3.63%2C11.536c-5.62%2C0.66-10.895%2C3.985-13.818%2C8.858%0D%0A%20c-0.284%2C0.473-0.131%2C1.088%2C0.343%2C1.371c0.473%2C0.283%2C1.087%2C0.131%2C1.372-0.342C4.779%2C26.646%2C10.33%2C23.5%2C16%2C23.5%0D%0A%20s11.222%2C3.146%2C14.143%2C8.016C30.33%2C31.828%2C30.661%2C32%2C31.001%2C32c0.175%2C0%2C0.353-0.045%2C0.514-0.143%0D%0A%20C31.988%2C31.574%2C32.142%2C30.959%2C31.857%2C30.486z%20M10.512%2C8.925L9.413%2C4.529L8.689%2C4.77l-2.567%2C7.701%0D%0A%20c-0.382%2C0.418-0.751%2C0.936-1.066%2C1.428C3.709%2C10.842%2C3.644%2C8.035%2C4.902%2C5.87C5.599%2C4.668%2C6.664%2C3.723%2C8%2C3.063V3h0.122%0D%0A%20C9.497%2C2.35%2C11.153%2C2%2C13%2C2c4.244%2C0%2C6%2C4.195%2C6.071%2C4.371l0.351%2C0.875l0.895-0.298c0.017-0.005%2C1.722-0.567%2C3.575-0.567%0D%0A%20c3.735%2C0%2C4.205%2C2.2%2C4.233%2C3.854c0.021%2C1.252-0.628%2C3.421-2.397%2C5.131c-0.397-2.818-1.704-6.711-5.116-6.711%0D%0A%20c-0.437%2C0-0.894%2C0.068-1.363%2C0.203c-1.379-1.227-2.832-1.848-4.324-1.848C13.041%2C7.011%2C11.518%2C8.005%2C10.512%2C8.925z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-lightbulb": {
        "width": 22,
        "backgroundImage": "url(/img/icons/lightbulb.svg)"
    },
    "icon-linked-in": {
        "width": 18,
        "height": 18,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0D%0A%3Cpath%20fill%3D%22%238c8c8c%22%20d%3D%22M0.296%2C5.977h3.732V18H0.296V5.977z%20M2.163%2C0c1.192%2C0%2C2.162%2C0.971%2C2.162%2C2.166%0D%0A%20c0%2C1.197-0.969%2C2.168-2.162%2C2.168C0.966%2C4.333%2C0%2C3.362%2C0%2C2.166C0%2C0.971%2C0.966%2C0%2C2.163%2C0%22/%3E%0D%0A%3Cpath%20fill%3D%22%238c8c8c%22%20d%3D%22M6.368%2C5.977h3.579v1.642h0.051c0.499-0.945%2C1.715-1.942%2C3.53-1.942%0D%0A%20c3.775%2C0%2C4.473%2C2.49%2C4.473%2C5.728V18h-3.727v-5.847c0-1.396-0.027-3.188-1.938-3.188c-1.941%2C0-2.237%2C1.52-2.237%2C3.088V18H6.368%0D%0A%20V5.977z%22/%3E%0D%0A%3C/svg%3E%0D%0A%0D%0A')"
    },
    "icon-linked-inicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0D%0A%3Cpath%20fill%3D%22%23d0d0cf%22%20d%3D%22M0.296%2C5.977h3.732V18H0.296V5.977z%20M2.163%2C0c1.192%2C0%2C2.162%2C0.971%2C2.162%2C2.166%0D%0A%20c0%2C1.197-0.969%2C2.168-2.162%2C2.168C0.966%2C4.333%2C0%2C3.362%2C0%2C2.166C0%2C0.971%2C0.966%2C0%2C2.163%2C0%22/%3E%0D%0A%3Cpath%20fill%3D%22%23d0d0cf%22%20d%3D%22M6.368%2C5.977h3.579v1.642h0.051c0.499-0.945%2C1.715-1.942%2C3.53-1.942%0D%0A%20c3.775%2C0%2C4.473%2C2.49%2C4.473%2C5.728V18h-3.727v-5.847c0-1.396-0.027-3.188-1.938-3.188c-1.941%2C0-2.237%2C1.52-2.237%2C3.088V18H6.368%0D%0A%20V5.977z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-list": {
        "width": 28,
        "height": 20,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2220%22%20viewBox%3D%220%200%2028%2020%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M3%2C0H1C0.448%2C0%2C0%2C0.446%2C0%2C0.999V3c0%2C0.552%2C0.448%2C0.999%2C1%2C0.999h2%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.999V0.999C4%2C0.446%2C3.552%2C0%2C3%2C0z%20M9%2C3h18c0.553%2C0%2C1-0.449%2C1-1c0-0.552-0.447-1.001-1-1.001H9%0D%0A%20C8.448%2C0.999%2C8%2C1.448%2C8%2C2C8%2C2.551%2C8.448%2C3%2C9%2C3z%20M3%2C8H1C0.448%2C8%2C0%2C8.448%2C0%2C9v2c0%2C0.551%2C0.448%2C1%2C1%2C1h2c0.552%2C0%2C1-0.449%2C1-1V9%0D%0A%20C4%2C8.448%2C3.552%2C8%2C3%2C8z%20M27%2C9H9C8.448%2C9%2C8%2C9.448%2C8%2C10c0%2C0.553%2C0.448%2C1.001%2C1%2C1.001h18c0.553%2C0%2C1-0.449%2C1-1.001%0D%0A%20C28%2C9.448%2C27.553%2C9%2C27%2C9z%20M3%2C16H1c-0.552%2C0-1%2C0.448-1%2C1.001V19c0%2C0.553%2C0.448%2C1%2C1%2C1h2c0.552%2C0%2C1-0.447%2C1-1v-1.999%0D%0A%20C4%2C16.448%2C3.552%2C16%2C3%2C16z%20M27%2C17.001H9c-0.552%2C0-1%2C0.447-1%2C1C8%2C18.553%2C8.448%2C19%2C9%2C19h18c0.553%2C0%2C1-0.447%2C1-0.999%0D%0A%20C28%2C17.448%2C27.553%2C17.001%2C27%2C17.001z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-magnify": {
        "backgroundImage": "url(/img/icons/magnify.svg)"
    },
    "icon-mail": {
        "height": 26,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2226%22%20viewBox%3D%220%200%2032%2026%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M4%2C15.999h14v-2H4V15.999z%20M20%2C12h8V4h-8V12z%20M22%2C6h4v4h-4V6z%20%20M30%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2.001V24c0%2C1.104%2C0.896%2C2%2C2%2C2h28c1.104%2C0%2C2-0.896%2C2-2V2.001C32%2C0.896%2C31.104%2C0%2C30%2C0z%20M30%2C22.999%0D%0A%20C30%2C23.552%2C29.552%2C24%2C29%2C24H3c-0.553%2C0-1-0.448-1-1.001V3c0-0.553%2C0.447-0.999%2C1-0.999h26c0.552%2C0%2C1%2C0.446%2C1%2C0.999V22.999z%20M4%2C20%0D%0A%20h14v-2.001H4V20z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-map-pin": {
        "width": 24,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ececec%22%20d%3D%22M21%2C30h-7.287C17.027%2C26.022%2C24%2C17.054%2C24%2C12%20c0-6.626-5.373-12-12-12C5.373%2C0%2C0%2C5.374%2C0%2C12c0%2C5.053%2C6.973%2C14.022%2C10.287%2C18H3c-0.552%2C0-1%2C0.447-1%2C1s0.448%2C1%2C1%2C1h18%20c0.552%2C0%2C1-0.447%2C1-1S21.552%2C30%2C21%2C30z%20M12%2C2.001c5.522%2C0%2C10%2C4.533%2C10%2C10.125S12%2C29%2C12%2C29S2%2C17.717%2C2%2C12.125S6.477%2C2.001%2C12%2C2.001%20z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-medical": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2229%22%20viewBox%3D%220%200%2032%2029%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M24%2C0c-3%2C0-7%2C3.001-8%2C4.016C15%2C3.001%2C11%2C0%2C8%2C0%0D%0A%20C2.477%2C0%2C0%2C4.48%2C0%2C10.005C0%2C16.008%2C16%2C29%2C16%2C29s16-12.992%2C16-18.995C32%2C4.48%2C29.522%2C0%2C24%2C0z%20M16%2C26.405%0D%0A%20c-6.194-5.223-14-13.142-14-16.4c0-2.408%2C0.584-8.004%2C6-8.004c2.114%2C0%2C5.568%2C2.397%2C6.576%2C3.42L16%2C6.865l1.424-1.444%0D%0A%20c1.009-1.023%2C4.462-3.42%2C6.576-3.42c5.415%2C0%2C6%2C5.597%2C6%2C8.004c0%2C0.151-0.033%2C0.323-0.066%2C0.494h-5.552l-2.5-2.452%0D%0A%20C21.798%2C7.878%2C21.68%2C7.724%2C21.5%2C7.623c-0.242-0.136-0.518-0.161-0.767-0.093c-0.093%2C0.024-0.177%2C0.072-0.259%2C0.123%0D%0A%20c-0.026%2C0.016-0.057%2C0.022-0.081%2C0.041c-0.048%2C0.036-0.082%2C0.09-0.124%2C0.136c-0.046%2C0.05-0.1%2C0.09-0.136%2C0.15l-3.19%2C6.432%0D%0A%20l-1.871-3.446c-0.231-0.343-0.674-0.515-1.106-0.467H9c-0.553%2C0-1%2C0.447-1%2C1C8%2C12.052%2C8.447%2C12.5%2C9%2C12.5h4.465l2.461%2C4.534%0D%0A%20c0.2%2C0.296%2C0.558%2C0.448%2C0.929%2C0.459c0.022%2C0.003%2C0.043%2C0.002%2C0.064%2C0.004c0.057-0.001%2C0.111-0.003%2C0.168-0.012%0D%0A%20c0.248-0.022%2C0.475-0.132%2C0.646-0.321c0.022-0.023%2C0.044-0.046%2C0.063-0.07c0.021-0.028%2C0.05-0.045%2C0.067-0.075l3.411-6.876%0D%0A%20l1.846%2C1.811c0.141%2C0.271%2C0.398%2C0.458%2C0.71%2C0.513c0.04%2C0.008%2C0.078%2C0.02%2C0.118%2C0.023c0.018%2C0.001%2C0.032%2C0.01%2C0.05%2C0.01h5.106%0D%0A%20C26.895%2C16.362%2C20.94%2C22.238%2C16%2C26.405z%22/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-map-pin-multiple": {
        "height": 30,
        "backgroundImage": "url(/img/icons/map-pin-multiple.svg)"
    },
    "icon-microscope": {
        "width": 26,
        "backgroundImage": "url(/img/icons/microscope.svg)"
    },
    "icon-modal-close": {
        "width": 20,
        "height": 20,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23cfcfcf%22%20d%3D%22M22.715%2C9.285c-0.382-0.381-1-0.381-1.381%2C0L16%2C14.619%0D%0A%20l-5.334-5.334c-0.381-0.381-0.999-0.381-1.381%2C0c-0.381%2C0.382-0.381%2C1%2C0%2C1.381L14.619%2C16l-5.334%2C5.334%0D%0A%20c-0.381%2C0.381-0.381%2C0.998%2C0%2C1.381c0.382%2C0.381%2C1%2C0.381%2C1.381%2C0L16%2C17.381l5.334%2C5.334c0.381%2C0.381%2C0.999%2C0.381%2C1.381%2C0%0D%0A%20c0.381-0.383%2C0.381-1%2C0-1.381L17.381%2C16l5.334-5.333C23.096%2C10.285%2C23.096%2C9.667%2C22.715%2C9.285z%20M16%2C0C7.163%2C0%2C0%2C7.163%2C0%2C16%0D%0A%20s7.163%2C16%2C16%2C16c8.836%2C0%2C16-7.162%2C16-16S24.836%2C0%2C16%2C0z%20M16%2C30C8.268%2C30%2C2%2C23.732%2C2%2C16C2%2C8.268%2C8.268%2C1.999%2C16%2C1.999%0D%0A%20c7.731%2C0%2C14%2C6.27%2C14%2C14.002C30%2C23.732%2C23.731%2C30%2C16%2C30z%22/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')",
        "cursor": "pointer",
        "backgroundSize": "100%"
    },
    "icon-modal-closeicon-white": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M22.715%2C9.285c-0.382-0.381-1-0.381-1.381%2C0L16%2C14.619%0D%0A%20l-5.334-5.334c-0.381-0.381-0.999-0.381-1.381%2C0c-0.381%2C0.382-0.381%2C1%2C0%2C1.381L14.619%2C16l-5.334%2C5.334%0D%0A%20c-0.381%2C0.381-0.381%2C0.998%2C0%2C1.381c0.382%2C0.381%2C1%2C0.381%2C1.381%2C0L16%2C17.381l5.334%2C5.334c0.381%2C0.381%2C0.999%2C0.381%2C1.381%2C0%0D%0A%20c0.381-0.383%2C0.381-1%2C0-1.381L17.381%2C16l5.334-5.333C23.096%2C10.285%2C23.096%2C9.667%2C22.715%2C9.285z%20M16%2C0C7.163%2C0%2C0%2C7.163%2C0%2C16%0D%0A%20s7.163%2C16%2C16%2C16c8.836%2C0%2C16-7.162%2C16-16S24.836%2C0%2C16%2C0z%20M16%2C30C8.268%2C30%2C2%2C23.732%2C2%2C16C2%2C8.268%2C8.268%2C1.999%2C16%2C1.999%0D%0A%20c7.731%2C0%2C14%2C6.27%2C14%2C14.002C30%2C23.732%2C23.731%2C30%2C16%2C30z%22/%3E%0D%0A%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-monitor": {
        "width": 30,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%231b1b1b%22%20d%3D%22M28%2C0H2C0.896%2C0%2C0%2C0.895%2C0%2C1.999v20C0%2C23.105%2C0.896%2C24%2C2%2C24h12v4%0D%0A%20h-3c-0.552%2C0-1%2C0.448-1%2C1c0%2C0.553%2C0.448%2C1%2C1%2C1h8c0.552%2C0%2C1-0.447%2C1-1c0-0.552-0.448-1-1-1h-3v-4h12c1.104%2C0%2C2-0.895%2C2-2.001v-20%0D%0A%20C30%2C0.895%2C29.104%2C0%2C28%2C0z%20M28%2C20.998c0%2C0.554-0.448%2C1.001-1%2C1.001H16h-2H3c-0.552%2C0-1-0.447-1-1.001v-18%0D%0A%20c0-0.552%2C0.448-0.999%2C1-0.999h24c0.552%2C0%2C1%2C0.447%2C1%2C0.999V20.998z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-monitoricon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ececec%22%20d%3D%22M28%2C0H2C0.896%2C0%2C0%2C0.895%2C0%2C1.999v20C0%2C23.105%2C0.896%2C24%2C2%2C24h12v4%0D%0A%20h-3c-0.552%2C0-1%2C0.448-1%2C1c0%2C0.553%2C0.448%2C1%2C1%2C1h8c0.552%2C0%2C1-0.447%2C1-1c0-0.552-0.448-1-1-1h-3v-4h12c1.104%2C0%2C2-0.895%2C2-2.001v-20%0D%0A%20C30%2C0.895%2C29.104%2C0%2C28%2C0z%20M28%2C20.998c0%2C0.554-0.448%2C1.001-1%2C1.001H16h-2H3c-0.552%2C0-1-0.447-1-1.001v-18%0D%0A%20c0-0.552%2C0.448-0.999%2C1-0.999h24c0.552%2C0%2C1%2C0.447%2C1%2C0.999V20.998z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-mountain": {
        "height": 22,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2222%22%20viewBox%3D%220%200%2032%2022%22%20enable-background%3D%22new%200%200%2032%2022%22%3E%0D%0A%3Cpath%20fill%3D%22%23ececec%22%20d%3D%22M32%2C21.998L20%2C0l-5.542%2C10.161L10.5%2C3L0%2C22h21l-0.001-0.002H32z%20M20%2C4.177l8.631%2C15.822h-8.736%0D%0A%20l-4.291-7.764L20%2C4.177z%20M17.609%2C19.999h-6.24l3.1-5.683L17.609%2C19.999z%20M10.5%2C7.134l2.822%2C5.107L9.09%2C19.999h-5.7L10.5%2C7.134z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-padlock": {
        "width": 20,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2232%22%20viewBox%3D%220%200%2020%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M18%2C16.018V8c0-4.418-3.582-8-8-8C5.582%2C0%2C2%2C3.582%2C2%2C8v8.018%0D%0A%20c-1.25%2C1.669-2%2C3.735-2%2C5.981C0%2C27.522%2C4.477%2C32%2C10%2C32c5.523%2C0%2C10-4.478%2C10-10.001C20%2C19.753%2C19.25%2C17.687%2C18%2C16.018z%20M4%2C8%0D%0A%20c0-3.314%2C2.686-6%2C6-6c3.313%2C0%2C6%2C2.686%2C6%2C6v6.014c-1.673-1.258-3.745-2.013-6-2.013c-2.254%2C0-4.328%2C0.755-6%2C2.013V8z%20M10%2C29.999%0D%0A%20c-4.418%2C0-8-3.58-8-8c0-4.418%2C3.582-8%2C8-8c4.418%2C0%2C8%2C3.582%2C8%2C8C18%2C26.419%2C14.418%2C29.999%2C10%2C29.999z%20M10%2C17.999%0D%0A%20c-0.552%2C0-1%2C0.449-1%2C1V25c0%2C0.552%2C0.448%2C0.999%2C1%2C0.999s1-0.447%2C1-0.999v-6.001C11%2C18.448%2C10.552%2C17.999%2C10%2C17.999z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-padlockicon-disc": {
        "backgroundSize": "auto 50% !important"
    },
    "icon-page": {
        "width": 23,
        "backgroundImage": "url(/img/icons/page.svg)"
    },
    "icon-pencil": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M20.902%2C11.312l3.108-5.394L13.781%2C0l-3.216%2C5.581L9.843%2C6.833%0D%0A%20l0%2C0L0%2C23.916L2.162%2C32l8.067-2.167l0.492-0.854h0l0.561-0.976l8.79-15.253L20.902%2C11.312z%20M3.639%2C29.438l-1.441-5.39l6.82%2C3.945%0D%0A%20L3.639%2C29.438z%20M10.002%2C26.284l-6.82-3.944l8.367-14.521l6.819%2C3.945L10.002%2C26.284z%20M12.533%2C6.111l1.969-3.416l6.819%2C3.944%0D%0A%20l-1.969%2C3.417L12.533%2C6.111z%20M14.005%2C29.996v1.999H32v-1.999H14.005z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-pie-chart": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M7.5%2C0C6.987%2C0%2C6.488%2C0.053%2C6%2C0.141V1v0.15V2.08%0D%0A%20C2.609%2C2.566%2C0%2C5.474%2C0%2C9c0%2C3.866%2C3.134%2C7%2C7%2C7c1.919%2C0%2C3.641-0.786%2C4.904-2.038l0.349%2C0.243l0.149-0.039%0D%0A%20c-0.022%2C0.02-0.042%2C0.041-0.064%2C0.061l0.857%2C0.57C14.914%2C13.242%2C16%2C11%2C16%2C8.5C16%2C3.806%2C12.194%2C0%2C7.5%2C0z%20M7%2C15%0D%0A%20c-3.313%2C0-6-2.686-6-6c0-2.973%2C2.164-5.433%2C5-5.91v6.736L5.99%2C9.84L6%2C9.847V10h0.22l4.858%2C3.386C10.007%2C14.383%2C8.578%2C15%2C7%2C15z%0D%0A%20%20M7%2C9.275V3V2V1.025C7.166%2C1.015%2C7.331%2C1%2C7.5%2C1C11.643%2C1%2C15%2C4.358%2C15%2C8.5c0%2C1.927-0.735%2C3.677-1.931%2C5.005L7%2C9.275z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-pie-charticon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M7.5%2C0C6.987%2C0%2C6.488%2C0.053%2C6%2C0.141V1v0.15V2.08%0D%0A%20C2.609%2C2.566%2C0%2C5.474%2C0%2C9c0%2C3.866%2C3.134%2C7%2C7%2C7c1.919%2C0%2C3.641-0.786%2C4.904-2.038l0.349%2C0.243l0.149-0.039%0D%0A%20c-0.022%2C0.02-0.042%2C0.041-0.064%2C0.061l0.857%2C0.57C14.914%2C13.242%2C16%2C11%2C16%2C8.5C16%2C3.806%2C12.194%2C0%2C7.5%2C0z%20M7%2C15%0D%0A%20c-3.313%2C0-6-2.686-6-6c0-2.973%2C2.164-5.433%2C5-5.91v6.736L5.99%2C9.84L6%2C9.847V10h0.22l4.858%2C3.386C10.007%2C14.383%2C8.578%2C15%2C7%2C15z%0D%0A%20%20M7%2C9.275V3V2V1.025C7.166%2C1.015%2C7.331%2C1%2C7.5%2C1C11.643%2C1%2C15%2C4.358%2C15%2C8.5c0%2C1.927-0.735%2C3.677-1.931%2C5.005L7%2C9.275z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-play-button": {
        "display": "block",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "width": 60,
        "height": 60,
        "marginTop": -30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -30,
        "zIndex": 1,
        "backgroundColor": "rgba(0, 0, 0, 0.24)",
        "backgroundPosition": "56% 50%",
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2245%22%20height%3D%2257%22%20viewBox%3D%220%200%2045%2057%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M0%2C0v57l45-28.499%22/%3E%0D%0A%3C/svg%3E%0D%0A')",
        "backgroundSize": "20px auto",
        "borderRadius": "100%",
        "border": "2px solid #fff"
    },
    "icon-puzzle": {
        "backgroundImage": "url(/img/icons/puzzle.svg)"
    },
    "icon-quotes": {
        "width": 30,
        "height": 28,
        "backgroundImage": "url(/img/icons/quotes.svg)"
    },
    "icon-receipt": {
        "width": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23e3e3e3%22%20d%3D%22M14%2C12H6v2h8V12z%20M18%2C14h4v-2h-4V14z%20M18%2C18h4v-2h-4V18z%20M22%2C6H6%20v2h16V6z%20M0%2C0v32h2l4-2.999L9.977%2C32L14%2C29.001L18%2C32l4-2.999L26%2C32h2V0H0z%20M26%2C30l-4-3l-4%2C3l-4-3l-4%2C3l-4-3l-4%2C3V2h24V30z%20M14%2C16%20H6v2h8V16z%20M14%2C20H6v2h8V20z%20M18%2C22h4v-2h-4V22z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-rings": {
        "width": 52,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2252%22%20height%3D%2232%22%20viewBox%3D%220%200%2052%2032%22%3E%0D%0A%3Cpath%20opacity%3D%220.5%22%20fill%3D%22%23fff%22%20d%3D%22M16%2C2c7.72%2C0%2C14%2C6.28%2C14%2C13.999C30%2C23.719%2C23.72%2C30%2C16%2C30S2%2C23.719%2C2%2C15.999C2%2C8.28%2C8.28%2C2%2C16%2C2%20M16%2C0%0D%0A%20C7.164%2C0%2C0%2C7.163%2C0%2C15.999C0%2C24.837%2C7.164%2C32%2C16%2C32c8.837%2C0%2C16-7.163%2C16-16.001C32%2C7.163%2C24.837%2C0%2C16%2C0L16%2C0z%22/%3E%0D%0A%3Cpath%20opacity%3D%220.5%22%20fill%3D%22%23fff%22%20d%3D%22M36%2C2c7.72%2C0%2C14%2C6.28%2C14%2C13.999C50%2C23.719%2C43.72%2C30%2C36%2C30s-14-6.281-14-14.001C22%2C8.28%2C28.28%2C2%2C36%2C2%20M36%2C0%20c-8.836%2C0-16%2C7.163-16%2C15.999C20%2C24.837%2C27.164%2C32%2C36%2C32c8.837%2C0%2C16-7.163%2C16-16.001C52%2C7.163%2C44.837%2C0%2C36%2C0L36%2C0z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-server-x": {
        "width": 41,
        "height": 39,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2241%22%20height%3D%2239%22%20viewBox%3D%220%200%2041%2039%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M28%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2v28c0%2C1.105%2C0.896%2C2%2C2%2C2h26%0D%0A%09%09%09c1.104%2C0%2C2-0.895%2C2-2V2C30%2C0.896%2C29.104%2C0%2C28%2C0z%20M28%2C10H5c-0.553%2C0-1%2C0.449-1%2C1C4%2C11.553%2C4.447%2C12%2C5%2C12h23v8H5%0D%0A%09%09%09c-0.553%2C0-1%2C0.447-1%2C1s0.447%2C1%2C1%2C1h23v7c0%2C0.553-0.447%2C1-1%2C1H3c-0.553%2C0-1-0.447-1-1V3c0-0.552%2C0.447-1%2C1-1h24%0D%0A%09%09%09c0.553%2C0%2C1%2C0.447%2C1%2C1V10z%20M23.333%2C18h1.334C25.403%2C18%2C26%2C17.403%2C26%2C16.667v-1.333C26%2C14.596%2C25.403%2C14%2C24.667%2C14h-1.334%0D%0A%09%09%09C22.597%2C14%2C22%2C14.596%2C22%2C15.333v1.333C22%2C17.403%2C22.597%2C18%2C23.333%2C18z%20M24.667%2C4h-1.334C22.597%2C4%2C22%2C4.597%2C22%2C5.334v1.332%0D%0A%09%09%09c0%2C0.736%2C0.597%2C1.335%2C1.333%2C1.335h1.334C25.403%2C8.001%2C26%2C7.402%2C26%2C6.666V5.334C26%2C4.597%2C25.403%2C4%2C24.667%2C4z%20M23.333%2C28h1.334%0D%0A%09%09%09C25.403%2C28%2C26%2C27.402%2C26%2C26.666v-1.332C26%2C24.596%2C25.403%2C24%2C24.667%2C24h-1.334C22.597%2C24%2C22%2C24.596%2C22%2C25.334v1.332%0D%0A%09%09%09C22%2C27.402%2C22.597%2C28%2C23.333%2C28z%22/%3E%0D%0A%09%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M10.271%2C8.271c0.384-0.384%2C1.007-0.384%2C1.392%2C0L37.711%2C34.32%0D%0A%09%09c0.385%2C0.385%2C0.385%2C1.008%2C0%2C1.391c-0.385%2C0.385-1.008%2C0.385-1.393%2C0L10.271%2C9.663C9.886%2C9.279%2C9.886%2C8.656%2C10.271%2C8.271z%0D%0A%09%09%20M37.711%2C8.271c-0.385-0.384-1.008-0.384-1.393%2C0L10.271%2C34.32c-0.385%2C0.385-0.385%2C1.008%2C0%2C1.391c0.384%2C0.385%2C1.007%2C0.385%2C1.392%2C0%0D%0A%09%09L37.711%2C9.663C38.096%2C9.279%2C38.096%2C8.656%2C37.711%2C8.271z%22/%3E%0D%0A%3C/svg%3E%0D%0A')",
        "backgroundRepeat": "no-repeat"
    },
    "icon-server-xicon-disc": {
        "backgroundPosition": "60% 60%"
    },
    "icon-sensor": {
        "width": 29,
        "height": 29,
        "backgroundImage": "url(/img/icons/sensor.svg)"
    },
    "icon-sensoricon-disc": {
        "backgroundPosition": "50% 47%"
    },
    "icon-silo": {
        "width": 26,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2226%22%20height%3D%2230%22%20viewBox%3D%220%200%2026%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M13%2C0.001c-1.657%2C0-3%2C1.39-3%2C3.103v24.827%0D%0A%20C10%2C29.646%2C11.343%2C30%2C13%2C30c1.656%2C0%2C3-0.354%2C3-2.069V3.104C16%2C1.391%2C14.656%2C0.001%2C13%2C0.001z%20M14%2C27.931%0D%0A%20c0%2C0.572-0.448%2C1.035-1%2C1.035c-0.553%2C0-1-0.463-1-1.035V3.104c0-0.57%2C0.447-1.034%2C1-1.034c0.552%2C0%2C1%2C0.464%2C1%2C1.034V27.931z%20M21%2C0%0D%0A%20c-1.657%2C0-3%2C1.391-3%2C3.104v24.827C18%2C29.646%2C19.343%2C30%2C21%2C30c1.656%2C0%2C3-0.354%2C3-2.069V3.104C24%2C1.391%2C22.656%2C0%2C21%2C0z%20M22%2C27.931%0D%0A%20c0%2C0.572-0.447%2C1.035-1%2C1.035s-1-0.463-1-1.035V3.104c0-0.571%2C0.447-1.035%2C1-1.035s1%2C0.464%2C1%2C1.035V27.931z%20M5%2C0%0D%0A%20C3.343%2C0%2C2%2C1.39%2C2%2C3.104v24.827C2%2C29.646%2C3.343%2C30%2C5%2C30c1.657%2C0%2C3-0.354%2C3-2.069V3.104C8%2C1.39%2C6.657%2C0%2C5%2C0z%20M6%2C27.931%0D%0A%20c0%2C0.572-0.448%2C1.035-1%2C1.035c-0.553%2C0-1-0.463-1-1.035V3.104C4%2C2.533%2C4.447%2C2.07%2C5%2C2.07c0.552%2C0%2C1%2C0.463%2C1%2C1.034V27.931z%22/%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M3%2C5.173h4v2.068H3V5.173z%22/%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M11%2C5.173h4v2.068h-4V5.173z%22/%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M19%2C5.173h4v2.068h-4V5.173z%22/%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M0%2C28h26v2H0V28z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-signpost": {
        "backgroundImage": "url(/img/icons/signpost.svg)"
    },
    "icon-spiral": {
        "width": 28,
        "height": 33,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2233%22%20viewBox%3D%220%200%2028%2033%22%3E%0D%0A%0D%0A%3Cpath%20fill%3D%22%233c4042%22%20d%3D%22M13.378%2C32.764c-0.293%2C0-0.587-0.007-0.884-0.024c-3.953-0.211-7.515-1.819-9.772-4.414%0D%0A%09c-1.911-2.194-2.917-5.475-2.69-8.772c0.224-3.263%2C1.461-6.105%2C3.657-8.009c3.796-3.292%2C10.363-3.097%2C13.407%2C0.401%0D%0A%09c1.391%2C1.595%2C2.021%2C3.993%2C1.845%2C6.314c-0.154%2C2.038-0.992%2C3.796-2.363%2C4.949c-2.535%2C2.136-6.079%2C1.905-8.189-0.525%0D%0A%09c-1.403-1.617-1.674-4.553%2C0.333-6.477c0.404-0.385%2C1.04-0.365%2C1.419%2C0.047c0.378%2C0.412%2C0.359%2C1.062-0.045%2C1.448%0D%0A%09c-1.093%2C1.048-0.988%2C2.719-0.204%2C3.623c1.39%2C1.602%2C3.713%2C1.734%2C5.411%2C0.303c0.943-0.794%2C1.525-2.047%2C1.638-3.525%0D%0A%09c0.132-1.75-0.42-3.626-1.438-4.797c-2.331-2.679-7.539-2.776-10.513-0.198c-1.754%2C1.521-2.771%2C3.922-2.954%2C6.59%0D%0A%09c-0.19%2C2.761%2C0.627%2C5.479%2C2.188%2C7.269c1.904%2C2.188%2C4.958%2C3.547%2C8.377%2C3.73c3.417%2C0.181%2C6.611-0.835%2C8.766-2.791%0D%0A%09c2.769-2.511%2C4.404-6.076%2C4.608-10.038c0.202-3.896-1.083-7.735-3.521-10.538C17.787%2C1.973%2C9.948%2C0.553%2C2.476%2C3.712%0D%0A%09C1.964%2C3.928%2C1.377%2C3.68%2C1.166%2C3.159C0.953%2C2.635%2C1.196%2C2.036%2C1.708%2C1.82C9.981-1.677%2C18.711-0.05%2C23.952%2C5.969%0D%0A%09c2.786%2C3.2%2C4.254%2C7.576%2C4.024%2C12.007c-0.231%2C4.511-2.105%2C8.582-5.277%2C11.459C20.344%2C31.573%2C16.983%2C32.764%2C13.378%2C32.764z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-sun": {
        "width": 30,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M4%2C14H0v2h4V14z%20M7.928%2C6.515L5.1%2C3.686L3.686%2C5.102l2.828%2C2.827%0D%0A%20L7.928%2C6.515z%20M16%2C0h-2v4h2V0z%20M3.685%2C24.9L5.1%2C26.314l2.828-2.828l-1.414-1.414L3.685%2C24.9z%20M26%2C14v2h4v-2H26z%20M22.07%2C23.486%0D%0A%20l2.828%2C2.828l1.414-1.414l-2.828-2.828L22.07%2C23.486z%20M15%2C5.999c-4.971%2C0-9%2C4.031-9%2C9.001c0%2C4.971%2C4.029%2C9.002%2C9%2C9.002%0D%0A%20s9-4.031%2C9-9.002C24%2C10.03%2C19.971%2C5.999%2C15%2C5.999z%20M15%2C21.988c-3.859%2C0-6.988-3.129-6.988-6.988c0-3.859%2C3.129-6.988%2C6.988-6.988%0D%0A%20s6.988%2C3.129%2C6.988%2C6.988C21.988%2C18.859%2C18.859%2C21.988%2C15%2C21.988z%20M14%2C30h2v-4h-2V30z%20M26.313%2C5.102l-1.414-1.416L22.07%2C6.515%0D%0A%20l1.414%2C1.415L26.313%2C5.102z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-sunicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20d%3D%22M4%2C14H0v2h4V14z%20M7.928%2C6.515L5.1%2C3.686L3.686%2C5.102l2.828%2C2.827%0D%0A%20L7.928%2C6.515z%20M16%2C0h-2v4h2V0z%20M3.685%2C24.9L5.1%2C26.314l2.828-2.828l-1.414-1.414L3.685%2C24.9z%20M26%2C14v2h4v-2H26z%20M22.07%2C23.486%0D%0A%20l2.828%2C2.828l1.414-1.414l-2.828-2.828L22.07%2C23.486z%20M15%2C5.999c-4.971%2C0-9%2C4.031-9%2C9.001c0%2C4.971%2C4.029%2C9.002%2C9%2C9.002%0D%0A%20s9-4.031%2C9-9.002C24%2C10.03%2C19.971%2C5.999%2C15%2C5.999z%20M15%2C21.988c-3.859%2C0-6.988-3.129-6.988-6.988c0-3.859%2C3.129-6.988%2C6.988-6.988%0D%0A%20s6.988%2C3.129%2C6.988%2C6.988C21.988%2C18.859%2C18.859%2C21.988%2C15%2C21.988z%20M14%2C30h2v-4h-2V30z%20M26.313%2C5.102l-1.414-1.416L22.07%2C6.515%0D%0A%20l1.414%2C1.415L26.313%2C5.102z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-target": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M31%2C15h-3.051C27.467%2C9.171%2C22.826%2C4.531%2C17%2C4.049V1.002%0D%0A%20C17%2C0.449%2C16.552%2C0%2C16%2C0c-0.553%2C0-1%2C0.449-1%2C1.002v3.047C9.174%2C4.531%2C4.533%2C9.171%2C4.051%2C15H1c-0.553%2C0-1%2C0.448-1%2C1.002%0D%0A%20C0%2C16.552%2C0.447%2C17%2C1%2C17h3.05C4.532%2C22.828%2C9.172%2C27.47%2C15%2C27.952V31c0%2C0.553%2C0.447%2C1%2C1%2C1c0.552%2C0%2C1-0.447%2C1-1v-3.048%0D%0A%20C22.827%2C27.47%2C27.468%2C22.828%2C27.949%2C17H31c0.553%2C0%2C1-0.448%2C1-0.999C32%2C15.448%2C31.553%2C15%2C31%2C15z%20M15%2C6.05V15H6.049%0D%0A%20C6.519%2C10.274%2C10.275%2C6.52%2C15%2C6.05z%20M6.048%2C17H15v8.951C10.274%2C25.481%2C6.517%2C21.725%2C6.048%2C17z%20M17%2C25.951V17h8.951%0D%0A%20C25.482%2C21.725%2C21.726%2C25.481%2C17%2C25.951z%20M17%2C15V6.05c4.725%2C0.469%2C8.481%2C4.224%2C8.951%2C8.949H17z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-telephone": {
        "width": 26,
        "height": 36,
        "backgroundImage": "url(/img/icons/telephone.svg)"
    },
    "icon-track": {
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M1%2C12.016h30c0.018%2C0%2C0.033-0.009%2C0.051-0.01%0D%0A%20c0.24-0.003%2C0.479-0.094%2C0.662-0.277c0.187-0.186%2C0.28-0.431%2C0.279-0.676C31.993%2C11.04%2C32%2C11.029%2C32%2C11.016%0D%0A%20c0-0.359-0.2-0.659-0.484-0.835L21.607%2C0.28c-0.373-0.373-0.978-0.373-1.351%2C0c-0.373%2C0.371-0.373%2C0.976%2C0%2C1.35l8.393%2C8.388H1%0D%0A%20c-0.552%2C0-1%2C0.447-1%2C0.999C0%2C11.569%2C0.448%2C12.016%2C1%2C12.016z%20M31%2C16.014H1c-0.013%2C0-0.023%2C0.007-0.036%2C0.007%0D%0A%20c-0.245%2C0-0.49%2C0.093-0.677%2C0.278c-0.187%2C0.188-0.28%2C0.432-0.279%2C0.676C0.007%2C16.987%2C0%2C16.998%2C0%2C17.011%0D%0A%20c0%2C0.359%2C0.201%2C0.66%2C0.486%2C0.836l9.906%2C9.874c0.373%2C0.372%2C0.978%2C0.372%2C1.351%2C0c0.373-0.373%2C0.373-0.975%2C0-1.348l-8.39-8.364H31%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.998S31.552%2C16.014%2C31%2C16.014z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-trackicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ececec%22%20d%3D%22M1%2C12.016h30c0.018%2C0%2C0.033-0.009%2C0.051-0.01%0D%0A%20c0.24-0.003%2C0.479-0.094%2C0.662-0.277c0.187-0.186%2C0.28-0.431%2C0.279-0.676C31.993%2C11.04%2C32%2C11.029%2C32%2C11.016%0D%0A%20c0-0.359-0.2-0.659-0.484-0.835L21.607%2C0.28c-0.373-0.373-0.978-0.373-1.351%2C0c-0.373%2C0.371-0.373%2C0.976%2C0%2C1.35l8.393%2C8.388H1%0D%0A%20c-0.552%2C0-1%2C0.447-1%2C0.999C0%2C11.569%2C0.448%2C12.016%2C1%2C12.016z%20M31%2C16.014H1c-0.013%2C0-0.023%2C0.007-0.036%2C0.007%0D%0A%20c-0.245%2C0-0.49%2C0.093-0.677%2C0.278c-0.187%2C0.188-0.28%2C0.432-0.279%2C0.676C0.007%2C16.987%2C0%2C16.998%2C0%2C17.011%0D%0A%20c0%2C0.359%2C0.201%2C0.66%2C0.486%2C0.836l9.906%2C9.874c0.373%2C0.372%2C0.978%2C0.372%2C1.351%2C0c0.373-0.373%2C0.373-0.975%2C0-1.348l-8.39-8.364H31%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.998S31.552%2C16.014%2C31%2C16.014z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-train": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M12%2C6h8v-2h-8V6z%20M8%2C24h16c2.209%2C0%2C4-1.791%2C4-4v-2v-2v-6V8V2%0D%0A%20c0-1.105-0.896-2-2-2H6C4.896%2C0%2C4%2C0.895%2C4%2C2v6v2v6v2v2C4%2C22.209%2C5.791%2C24%2C8%2C24z%20M20.555%2C22h-9.109C11.789%2C21.409%2C12%2C20.732%2C12%2C20%0D%0A%20s-0.211-1.409-0.555-2h9.109C20.211%2C18.591%2C20%2C19.268%2C20%2C20S20.211%2C21.409%2C20.555%2C22z%20M24%2C22c-1.104%2C0-2-0.896-2-2%0D%0A%20c0-1.105%2C0.896-2%2C2-2s2%2C0.895%2C2%2C2C26%2C21.104%2C25.104%2C22%2C24%2C22z%20M6%2C3c0-0.552%2C0.448-1%2C1-1h18c0.553%2C0%2C1%2C0.448%2C1%2C1v5H6V3z%20M6%2C14.999%0D%0A%20v-5h20v5v1h-1H7H6V14.999z%20M8%2C18c1.104%2C0%2C2%2C0.895%2C2%2C2c0%2C1.104-0.896%2C2-2%2C2s-2-0.896-2-2C6%2C18.895%2C6.896%2C18%2C8%2C18z%20M30%2C26H2v2h28V26%0D%0A%20z%20M0%2C30v2h32v-2H0z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-twitter": {
        "width": 18,
        "height": 15,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2215%22%20viewBox%3D%220%200%2018%2015%22%3E%0D%0A%3Cpath%20fill%3D%22%238c8c8c%22%20d%3D%22M18%2C1.775c-0.662%2C0.301-1.374%2C0.505-2.121%2C0.597c0.763-0.469%2C1.348-1.211%2C1.624-2.095%0D%0A%20c-0.714%2C0.434-1.504%2C0.749-2.345%2C0.919C14.484%2C0.46%2C13.524%2C0%2C12.462%2C0c-2.039%2C0-3.693%2C1.695-3.693%2C3.787%0D%0A%20c0%2C0.297%2C0.033%2C0.586%2C0.096%2C0.863c-3.069-0.158-5.79-1.665-7.612-3.957c-0.318%2C0.56-0.5%2C1.21-0.5%2C1.904%0D%0A%20c0%2C1.314%2C0.652%2C2.473%2C1.643%2C3.152c-0.605-0.02-1.175-0.19-1.673-0.474c0%2C0.016%2C0%2C0.032%2C0%2C0.048c0%2C1.834%2C1.273%2C3.366%2C2.962%2C3.713%0D%0A%20c-0.31%2C0.086-0.636%2C0.133-0.973%2C0.133c-0.238%2C0-0.469-0.023-0.695-0.068c0.47%2C1.504%2C1.834%2C2.6%2C3.45%2C2.63%0D%0A%20c-1.264%2C1.016-2.856%2C1.621-4.586%2C1.621c-0.298%2C0-0.592-0.019-0.881-0.054C1.634%2C14.373%2C3.575%2C15%2C5.661%2C15%0D%0A%20c6.792%2C0%2C10.507-5.771%2C10.507-10.774c0-0.164-0.004-0.327-0.011-0.49C16.879%2C3.202%2C17.505%2C2.535%2C18%2C1.775z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-twittericon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2215%22%20viewBox%3D%220%200%2018%2015%22%3E%0D%0A%3Cpath%20fill%3D%22%23d0d0d0%22%20d%3D%22M18%2C1.775c-0.662%2C0.301-1.374%2C0.505-2.121%2C0.597c0.763-0.469%2C1.348-1.211%2C1.624-2.095%20c-0.714%2C0.434-1.504%2C0.749-2.345%2C0.919C14.484%2C0.46%2C13.524%2C0%2C12.462%2C0c-2.039%2C0-3.693%2C1.695-3.693%2C3.787%0D%0A%20c0%2C0.297%2C0.033%2C0.586%2C0.096%2C0.863c-3.069-0.158-5.79-1.665-7.612-3.957c-0.318%2C0.56-0.5%2C1.21-0.5%2C1.904%0D%0A%20c0%2C1.314%2C0.652%2C2.473%2C1.643%2C3.152c-0.605-0.02-1.175-0.19-1.673-0.474c0%2C0.016%2C0%2C0.032%2C0%2C0.048c0%2C1.834%2C1.273%2C3.366%2C2.962%2C3.713%0D%0A%20c-0.31%2C0.086-0.636%2C0.133-0.973%2C0.133c-0.238%2C0-0.469-0.023-0.695-0.068c0.47%2C1.504%2C1.834%2C2.6%2C3.45%2C2.63%0D%0A%20c-1.264%2C1.016-2.856%2C1.621-4.586%2C1.621c-0.298%2C0-0.592-0.019-0.881-0.054C1.634%2C14.373%2C3.575%2C15%2C5.661%2C15%0D%0A%20c6.792%2C0%2C10.507-5.771%2C10.507-10.774c0-0.164-0.004-0.327-0.011-0.49C16.879%2C3.202%2C17.505%2C2.535%2C18%2C1.775z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-user": {
        "width": 24,
        "height": 30,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2230%22%20viewBox%3D%220%200%2024%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M22%2C28.001C22%2C22.477%2C17.522%2C18%2C12%2C18C6.477%2C18%2C2%2C22.477%2C2%2C28.001%0D%0A%20V30H0v-1.999c0-5.071%2C3.15-9.398%2C7.597-11.155C4.855%2C15.302%2C3%2C12.37%2C3%2C9c0-4.97%2C4.029-9%2C9-9s9%2C4.03%2C9%2C9%0D%0A%20c0%2C3.37-1.855%2C6.302-4.597%2C7.846C20.85%2C18.603%2C24%2C22.93%2C24%2C28.001V30h-2V28.001z%20M19%2C9c0-3.866-3.134-7-7-7S5%2C5.134%2C5%2C9s3.134%2C7%2C7%2C7%0D%0A%20S19%2C12.866%2C19%2C9z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-usericon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2230%22%20viewBox%3D%220%200%2024%2030%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23ededed%22%20d%3D%22M22%2C28.001C22%2C22.477%2C17.522%2C18%2C12%2C18C6.477%2C18%2C2%2C22.477%2C2%2C28.001%0D%0A%20V30H0v-1.999c0-5.071%2C3.15-9.398%2C7.597-11.155C4.855%2C15.302%2C3%2C12.37%2C3%2C9c0-4.97%2C4.029-9%2C9-9s9%2C4.03%2C9%2C9%0D%0A%20c0%2C3.37-1.855%2C6.302-4.597%2C7.846C20.85%2C18.603%2C24%2C22.93%2C24%2C28.001V30h-2V28.001z%20M19%2C9c0-3.866-3.134-7-7-7S5%2C5.134%2C5%2C9s3.134%2C7%2C7%2C7%0D%0A%20S19%2C12.866%2C19%2C9z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-video-camera": {
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M31%2C10.001l-5%2C3.333V10C26%2C8.896%2C25.104%2C8%2C24%2C8h-2.632%0D%0A%20l-7.611-7.633c-0.038-0.045-0.078-0.085-0.124-0.124l-0.11-0.11c-0.033-0.019-0.07-0.02-0.104-0.034%0D%0A%20c-0.037-0.018-0.077-0.025-0.116-0.038c-0.081-0.024-0.159-0.045-0.242-0.049C13.041%2C0.011%2C13.022%2C0%2C13%2C0H3C2.448%2C0%2C2%2C0.448%2C2%2C1%0D%0A%20c0%2C0.553%2C0.448%2C1%2C1%2C1h9.999L20.998%2C10H23c0.552%2C0%2C1%2C0.448%2C1%2C1.001v14C24%2C25.553%2C23.552%2C26%2C23%2C26H3c-0.552%2C0-1-0.447-1-0.999V11%0D%0A%20C2%2C10.447%2C2.448%2C10%2C3%2C10h7V8H2C0.896%2C8%2C0%2C8.896%2C0%2C10v16c0%2C1.105%2C0.896%2C2%2C2%2C2h22c1.104%2C0%2C2-0.895%2C2-2v-3.33l5%2C3.332%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.999v-14C32%2C10.45%2C31.552%2C10.001%2C31%2C10.001z%20M30%2C22.932l-4-2.666V15.74l4-2.667V22.932z%20M6%2C21%0D%0A%20c0%2C0.553%2C0.448%2C1%2C1%2C1h12c0.552%2C0%2C1-0.447%2C1-1c0-0.551-0.448-0.999-1-0.999H7C6.448%2C20.001%2C6%2C20.449%2C6%2C21z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-video-cameraicon-lite": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2228%22%20viewBox%3D%220%200%2032%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%237e8aa2%22%20d%3D%22M31%2C10.001l-5%2C3.333V10C26%2C8.896%2C25.104%2C8%2C24%2C8h-2.632%0D%0A%20l-7.611-7.633c-0.038-0.045-0.078-0.085-0.124-0.124l-0.11-0.11c-0.033-0.019-0.07-0.02-0.104-0.034%0D%0A%20c-0.037-0.018-0.077-0.025-0.116-0.038c-0.081-0.024-0.159-0.045-0.242-0.049C13.041%2C0.011%2C13.022%2C0%2C13%2C0H3C2.448%2C0%2C2%2C0.448%2C2%2C1%0D%0A%20c0%2C0.553%2C0.448%2C1%2C1%2C1h9.999L20.998%2C10H23c0.552%2C0%2C1%2C0.448%2C1%2C1.001v14C24%2C25.553%2C23.552%2C26%2C23%2C26H3c-0.552%2C0-1-0.447-1-0.999V11%0D%0A%20C2%2C10.447%2C2.448%2C10%2C3%2C10h7V8H2C0.896%2C8%2C0%2C8.896%2C0%2C10v16c0%2C1.105%2C0.896%2C2%2C2%2C2h22c1.104%2C0%2C2-0.895%2C2-2v-3.33l5%2C3.332%0D%0A%20c0.552%2C0%2C1-0.447%2C1-0.999v-14C32%2C10.45%2C31.552%2C10.001%2C31%2C10.001z%20M30%2C22.932l-4-2.666V15.74l4-2.667V22.932z%20M6%2C21%0D%0A%20c0%2C0.553%2C0.448%2C1%2C1%2C1h12c0.552%2C0%2C1-0.447%2C1-1c0-0.551-0.448-0.999-1-0.999H7C6.448%2C20.001%2C6%2C20.449%2C6%2C21z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-wifi": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M23.924%2C24h-1.975C21.965%2C23.666%2C22%2C23.337%2C22%2C23%0D%0A%20C22%2C11.403%2C12.598%2C2.001%2C1%2C2.001c-0.338%2C0-0.666%2C0.034-1%2C0.05V0.077C0.498%2C0.044%2C0.993%2C0%2C1.5%2C0C13.926%2C0%2C24%2C10.074%2C24%2C22.5%0D%0A%20C24%2C23.007%2C23.957%2C23.501%2C23.924%2C24z%20M16%2C23c0%2C0.337-0.028%2C0.667-0.051%2C1h-1.975C13.98%2C23.832%2C14%2C23.668%2C14%2C23.499%0D%0A%20C14%2C16.044%2C7.956%2C10%2C0.5%2C10c-0.169%2C0-0.333%2C0.02-0.5%2C0.026V8.051C0.332%2C8.029%2C0.662%2C8%2C1%2C8C9.284%2C8%2C16%2C14.716%2C16%2C23z%20M0%2C16%0D%0A%20c4.418%2C0%2C8%2C3.581%2C8%2C8H6c0-3.314-2.687-6-6-6V16z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-discicon-wifi": {
        "backgroundPosition": "54% 46%"
    },
    "icon-wrench": {
        "width": 28,
        "height": 28,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%233c4042%22%20d%3D%22M25.35%2C2.644c-0.002-0.001-0.004-0.003-0.005-0.004l0.01%2C0.009%0D%0A%20C25.353%2C2.647%2C25.352%2C2.645%2C25.35%2C2.644z%20M27.11%2C5.147l-3.894%2C3.895l-3.555-0.711l-0.711-3.554l3.894-3.894%0D%0A%20c-3.362-1.604-7.507-1.024-10.292%2C1.761c-2.511%2C2.511-3.228%2C6.127-2.171%2C9.28l-9.204%2C9.204c-1.571%2C1.57-1.571%2C4.118%2C0%2C5.688%0D%0A%20c1.57%2C1.57%2C4.117%2C1.57%2C5.687%2C0l9.204-9.204c3.153%2C1.057%2C6.77%2C0.34%2C9.28-2.171C28.135%2C12.656%2C28.715%2C8.51%2C27.11%2C5.147z%0D%0A%20%20M23.928%2C14.018c-2.254%2C2.255-5.656%2C2.656-8.323%2C1.213L5.443%2C25.394c-0.785%2C0.785-2.058%2C0.785-2.844%2C0%0D%0A%20c-0.785-0.786-0.785-2.059%2C0-2.844l10.162-10.163c-1.443-2.667-1.041-6.068%2C1.213-8.322c1.354-1.355%2C3.125-2.039%2C4.901-2.058%0D%0A%20l-1.348%2C1.347v5.687l1.423%2C1.421h5.688l1.347-1.347C25.967%2C10.893%2C25.283%2C12.663%2C23.928%2C14.018z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "icon-social": {
        "backgroundPosition": "50% 100%",
        "width": 18,
        "height": 18
    },
    "link-social icon-social": {
        "marginLeft": 10,
        "marginRight": 10
    },
    "icon-disc": {
        "width": "100%",
        "paddingBottom": "100%",
        "border": "1px solid rgba(154, 192, 215, 0.29)",
        "backgroundPosition": "50% 50%",
        "borderRadius": 80,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "textAlign": "center",
        "lineHeight": 76,
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": 1.125,
        "color": "#3c4042",
        "textIndent": 0
    },
    "icon-discicon-lite": {
        "color": "#fff"
    },
    "icon-disc img": {
        "maxWidth": "70%"
    },
    "icon-discicon-static": {
        "width": 80,
        "height": 80,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "icon-fixed-sizeicon-disc": {
        "width": 80,
        "height": 80,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundSize": "auto"
    },
    "video-pane": {
        "top": 0,
        "left": 0,
        "right": 0,
        "height": "100%",
        "width": "100%",
        "background": "#000",
        "zIndex": 4,
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransition": "visibility .5s, opacity .5s",
        "transition": "visibility .5s, opacity .5s"
    },
    "video-paneactive": {
        "opacity": 1,
        "visibility": "visible"
    },
    "video-pane video": {
        "display": "none"
    },
    "video-paneactive video": {
        "display": "block"
    },
    "video-pane icon-modal-close": {
        "position": "absolute",
        "top": 20,
        "right": 20,
        "zIndex": 100
    },
    "ueno-androidlte42 video-pane": {
        "WebkitTransition": "opacity .5s",
        "transition": "opacity .5s"
    },
    "modal": {
        "visibility": "hidden",
        "overflow": "hidden",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "WebkitOverflowScrolling": "touch",
        "outline": 0,
        "opacity": 0,
        "WebkitTransition": "visibility .4s, opacity .4s",
        "transition": "visibility .4s, opacity .4s"
    },
    "modalin": {
        "visibility": "visible",
        "opacity": 1
    },
    "modalfade modal-dialog": {
        "WebkitTransform": "translate(0, -50%)",
        "transform": "translate(0, -50%)",
        "transition": "transform 0.3s ease-out, opacity .3s, -webkit-transform 0.3s ease-out",
        "WebkitTransition": "opacity .3s, -webkit-transform 0.3s ease-out",
        "opacity": 0
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0, 0)",
        "transform": "translate(0, 0)",
        "opacity": 1
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto"
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#fff",
        "boxShadow": "0 0 40px rgba(0, 0, 0, 0.26)",
        "backgroundClip": "padding-box",
        "outline": 0,
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40
    },
    "modal-backdrop": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "left": 0,
        "backgroundColor": "#fff"
    },
    "modal-backdropfade": {
        "opacity": 0
    },
    "modal-backdropin": {
        "opacity": 0.9
    },
    "modal-close": {
        "position": "absolute",
        "top": 20,
        "right": 20,
        "zIndex": 2,
        "background": "transparent",
        "border": 0,
        "cursor": "pointer"
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "modal-dialogwide": {
        "width": 1320,
        "maxWidth": "100%"
    },
    "form-success-message": {
        "visibility": "hidden",
        "opacity": 0
    },
    "form-parentsuccess form-intro": {
        "visibility": "hidden"
    },
    "modal form-success-message": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "height": 300,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "maxWidth": "80%",
        "background": "#fff"
    },
    "form-parentsuccess form-success-message": {
        "visibility": "visible",
        "opacity": 1,
        "WebkitTransition": "opacity .5s"
    },
    "modal-form": {
        "width": 400,
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "modal-form [type=\"text\"]": {
        "display": "block",
        "width": "100%",
        "WebkitAppearance": "none"
    },
    "modal-form [type=\"email\"]": {
        "display": "block",
        "width": "100%",
        "WebkitAppearance": "none"
    },
    "modal-form [type=\"tel\"]": {
        "display": "block",
        "width": "100%",
        "WebkitAppearance": "none"
    },
    "modal-form label": {
        "display": "none"
    },
    "modal-form textarea": {
        "width": "110%",
        "marginLeft": "-5%",
        "paddingTop": 10,
        "paddingRight": "5%",
        "paddingBottom": 10,
        "paddingLeft": "5%"
    },
    "overlay": {
        "position": "fixed",
        "width": "100%",
        "height": "100%",
        "visibility": "hidden",
        "top": 0,
        "left": 0,
        "zIndex": 999,
        "opacity": 0,
        "background": "#fff",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "ueno-androidlte42 modal": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "ueno-androidlte42 loading-screen": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "ueno-androidlte42 modal-carouselopen": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "ueno-androidlte42 nav-extended": {
        "transition": "transform .5s, -webkit-transform .5s",
        "WebkitTransition": "-webkit-transform .5s"
    },
    "ueno-androidlte42 modal-dialog": {
        "transition": "transform .3s, -webkit-transform .3s",
        "WebkitTransition": "-webkit-transform .3s"
    },
    "ueno-androidlte42 modal-form": {
        "width": "auto"
    },
    "no-js loading-screen": {
        "display": "none"
    },
    "no-js wrap": {
        "opacity": 1
    },
    "no-js wrap-inner": {
        "opacity": 1
    },
    "no-js hero": {
        "opacity": 1
    },
    "loading-sprite": {
        "boxSizing": "content-box",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "marginTop": -22,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -22,
        "width": 44,
        "height": 44,
        "listStyle": "none",
        "overflow": "hidden",
        "background": "#fff",
        "zIndex": 1,
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "loading-screen": {
        "background": "#222",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1001,
        "opacity": 1,
        "visibility": "visible",
        "WebkitTransition": "all .3s",
        "transition": "all .3s",
        "overflow": "hidden"
    },
    "circle-loading": {
        "position": "relative",
        "top": 2,
        "left": 2,
        "width": 40,
        "height": 40,
        "zIndex": 2,
        "opacity": 1,
        "borderRadius": "100%",
        "background": "#0088cb",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "pulseb": {
        "content": "''",
        "position": "absolute",
        "top": 6,
        "left": 6,
        "right": 6,
        "bottom": 6,
        "borderRadius": "100%",
        "background": "#fff",
        "zIndex": 4
    },
    "pulseb:before": {
        "content": "''",
        "position": "absolute",
        "top": -2,
        "left": -2,
        "right": -2,
        "bottom": -2,
        "borderRadius": "100%",
        "background": "transparent",
        "zIndex": 5,
        "boxShadow": "0 0 0 20px #fff"
    },
    "pulsec": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "zIndex": 2,
        "WebkitAnimation": "loadcircle 0.75s infinite linear",
        "animation": "loadcircle 0.75s infinite linear"
    },
    "pulsec:after": {
        "content": "''",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "width": 60,
        "height": 60,
        "marginTop": -43.79562044,
        "marginLeft": -43.79562044,
        "borderRadius": "100%",
        "background": "#f1f5f7",
        "zIndex": 3,
        "WebkitAnimation": "loadpulse 2s infinite linear alternate",
        "animation": "loadpulse 2s infinite linear alternate"
    },
    "bodyueno-no-cssremunit": {
        "font": "14px / 1.625 \"Raleway\", \"Helvetica Neue\", sans-serif"
    },
    "modal-open": {
        "overflow": "hidden",
        "background": "#fff"
    },
    "h2": {
        "fontSize": 1.313,
        "lineHeight": 1.52,
        "fontWeight": "500",
        "color": "#505050",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h3": {
        "fontSize": 1.125,
        "lineHeight": 1.2,
        "fontWeight": "500"
    },
    "trademarked": {
        "whiteSpace": "nowrap",
        "position": "relative",
        "paddingRight": 0.75
    },
    "trademarked:after": {
        "position": "absolute",
        "top": 0.15,
        "content": "TM",
        "fontSize": 0.44,
        "right": "auto"
    },
    "p": {
        "marginTop": 0.875,
        "marginBottom": 1.625
    },
    "div[class*=\"col-\"] p:first-child": {
        "marginTop": 0
    },
    "cite": {
        "fontStyle": "normal",
        "display": "block",
        "color": "#828b90",
        "fontWeight": "500"
    },
    "blockquote p:before": {
        "fontSize": 1.5,
        "lineHeight": 0,
        "display": "inline-block"
    },
    "blockquote p:after": {
        "fontSize": 1.5,
        "lineHeight": 0,
        "display": "inline-block"
    },
    "blockquote p:first-of-type:before": {
        "position": "absolute",
        "left": -0.5,
        "top": 0.65,
        "content": "open-quote"
    },
    "blockquote p:last-of-type:after": {
        "position": "absolute",
        "content": "close-quote",
        "marginTop": 0.65,
        "paddingLeft": 0.1
    },
    "cite+ more": {
        "marginTop": 10
    },
    "ul": {
        "marginTop": 0.875,
        "marginBottom": 1.625,
        "paddingLeft": 20
    },
    "ul> li> ul": {
        "marginTop": 0,
        "marginBottom": 0
    },
    "default-list": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "default-list li": {
        "position": "relative"
    },
    "default-list li:before": {
        "content": "",
        "position": "absolute",
        "top": 0.65,
        "left": -10,
        "width": 3,
        "height": 3,
        "background": "#505050"
    },
    "link-list": {
        "color": "#ebebeb",
        "listStyleType": "square"
    },
    "link-listno-bullet": {
        "listStyleType": "none",
        "paddingLeft": 10
    },
    "hrnarrow": {
        "height": 2,
        "width": 77
    },
    "input[type=\"text\"]": {
        "border": 0,
        "borderBottom": "1px solid #cfcfcf",
        "color": "#1e1e1e",
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": "100%"
    },
    "input[type=\"email\"]": {
        "border": 0,
        "borderBottom": "1px solid #cfcfcf",
        "color": "#1e1e1e",
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": "100%"
    },
    "input[type=\"tel\"]": {
        "border": 0,
        "borderBottom": "1px solid #cfcfcf",
        "color": "#1e1e1e",
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": "100%"
    },
    "inputinput-bordered": {
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "border": "1px solid #cfcfcf"
    },
    "input[type=\"text\"]:focus": {
        "borderBottom": "1px solid #0088cb"
    },
    "input[type=\"email\"]:focus": {
        "borderBottom": "1px solid #0088cb"
    },
    "input[type=\"tel\"]:focus": {
        "borderBottom": "1px solid #0088cb"
    },
    "inputinput-bordered:focus": {
        "borderColor": "transparent transparent #0088cb transparent"
    },
    "::-webkit-input-placeholder": {
        "color": "#959fa5"
    },
    "::-moz-placeholder": {
        "opacity": 1,
        "color": "#959fa5"
    },
    "input:-ms-input-placeholder": {
        "color": "#959fa5"
    },
    ":-ms-input-placeholder": {
        "color": "#959fa5"
    },
    "::placeholder": {
        "color": "#959fa5"
    },
    "btn": {
        "display": "inline-block",
        "fontWeight": "700",
        "fontSize": 11,
        "lineHeight": 12,
        "letterSpacing": 0.09,
        "textTransform": "uppercase",
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "textAlign": "center",
        "minWidth": 158,
        "maxWidth": "100%",
        "border": 0,
        "WebkitAppearance": "none",
        "WebkitTransition": "border-color 0.25s",
        "transition": "border-color 0.25s"
    },
    "hero btn": {
        "minWidth": 200
    },
    "btn-wide": {
        "minWidth": 200
    },
    "btn-primary": {
        "color": "#fff",
        "background": "#0088cb"
    },
    "btn-default": {
        "paddingTop": 13,
        "paddingRight": 20,
        "paddingBottom": 13,
        "paddingLeft": 20,
        "color": "#262626",
        "border": "2px solid #bcbcbb",
        "borderColor": "rgba(30, 30, 30, 0.21)"
    },
    "btn-contrast": {
        "paddingTop": 13,
        "paddingRight": 20,
        "paddingBottom": 13,
        "paddingLeft": 20,
        "border": "2px solid #fff",
        "borderColor": "rgba(255, 255, 255, 0.8)",
        "color": "#fff"
    },
    "btn-wider": {
        "paddingTop": 13,
        "paddingRight": 28,
        "paddingBottom": 13,
        "paddingLeft": 28
    },
    "btn-default:hover": {
        "borderColor": "rgba(30, 30, 30, 0.35)"
    },
    "btn-contrast:hover": {
        "borderColor": "#fff"
    },
    "btn-menu": {
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "minWidth": 0,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2215px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2015%2010%22%3E%0D%0A%3Cpath%20fill%3D%22%23626262%22%20d%3D%22M0%2C0v2h15V0H0z%20M0%2C6.001h15V4H0V6.001z%20M0%2C10h15V8.001H0V10z%22/%3E%0D%0A%3C/svg%3E%0D%0A')",
        "backgroundPosition": "100% 49%",
        "backgroundRepeat": "no-repeat",
        "WebkitTransition": "border-color 0.3s",
        "transition": "border-color 0.3s"
    },
    "navbar-lite is-scrolling btn-menu": {
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "minWidth": 0,
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2215px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2015%2010%22%3E%0D%0A%3Cpath%20fill%3D%22%23626262%22%20d%3D%22M0%2C0v2h15V0H0z%20M0%2C6.001h15V4H0V6.001z%20M0%2C10h15V8.001H0V10z%22/%3E%0D%0A%3C/svg%3E%0D%0A')",
        "backgroundPosition": "100% 49%",
        "backgroundRepeat": "no-repeat",
        "WebkitTransition": "border-color 0.3s",
        "transition": "border-color 0.3s"
    },
    "nav-extended toggle-menu": {
        "position": "absolute",
        "top": 0,
        "right": 0
    },
    "the-white-out": {
        "color": "#fff"
    },
    "the-black-out": {
        "color": "#585858"
    },
    "navbar-lite btn-menu": {
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2215px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2015%2010%22%3E%0D%0A%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%2C0v2h15V0H0z%20M0%2C6.001h15V4H0V6.001z%20M0%2C10h15V8.001H0V10z%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "navbar-lite btn-menu:before": {
        "background": "#fff",
        "opacity": 0.31
    },
    "navbar-lite is-scrolling btn-menu:before": {
        "background": "#626262"
    },
    "ueno-no-svg btn-menu": {},
    "ueno-no-svg navbar-lite btn-menu": {},
    "nav-extended btn": {
        "width": "100%",
        "minWidth": 0,
        "maxWidth": 160,
        "color": "#fff",
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "nav-extended btn-default": {
        "borderColor": "#4a4a4a"
    },
    "btn-group": {
        "display": "inline-block"
    },
    "btn-group btn": {
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 5,
        "marginLeft": 3
    },
    "btn-group btn:last-child": {
        "marginRight": 0
    },
    "btn-square": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 42,
        "height": 42,
        "minWidth": 0,
        "lineHeight": 38,
        "border": "2px solid #ddd",
        "borderColor": "rgba(0, 0, 0, 0.05)",
        "WebkitTransition": "color 0.3s, border-color 0.3s",
        "transition": "color 0.3s, border-color 0.3s"
    },
    "btn-square:hover": {
        "borderColor": "rgba(30, 30, 30, 0.21)"
    },
    "btn-square font-icon": {
        "verticalAlign": "middle",
        "fontSize": 18,
        "fontWeight": "normal",
        "color": "#8c8c8c"
    },
    "video-container": {
        "position": "relative",
        "paddingBottom": "45.11%",
        "height": 0
    },
    "video-time-machine": {
        "background": "url(/img/time-machine-poster.jpg) 0 0 no-repeat",
        "backgroundSize": "cover"
    },
    "tooltip": {
        "display": "inline-block",
        "border": "1px solid #ced1d3",
        "background": "#fff",
        "paddingTop": 10,
        "paddingRight": 22,
        "paddingBottom": 10,
        "paddingLeft": 22,
        "borderRadius": 3,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative"
    },
    "tooltip:before": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "borderStyle": "solid",
        "marginTop": -11,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -11,
        "width": 0,
        "height": 0,
        "borderTop": 0,
        "borderLeft": "11px solid transparent",
        "borderRight": "11px solid transparent",
        "zIndex": 2,
        "borderBottom": "11px solid #fff"
    },
    "tooltip:after": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "borderStyle": "solid",
        "marginTop": -12,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -11,
        "width": 0,
        "height": 0,
        "borderTop": 0,
        "borderLeft": "11px solid transparent",
        "borderRight": "11px solid transparent",
        "borderBottom": "11px solid #ced1d3"
    },
    "side-icon": {
        "position": "relative",
        "paddingLeft": 110,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "side-icon image": {
        "position": "absolute",
        "top": -20,
        "left": 0,
        "width": 80
    },
    "nav ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "nav li": {
        "listStyle": "none"
    },
    "*:focus": {
        "outline": "none"
    },
    "navbar": {
        "top": 0,
        "zIndex": 3,
        "position": "absolute",
        "left": 0,
        "width": "100%",
        "paddingTop": 10,
        "height": 90,
        "transition": "transform .3s, color .3s, -webkit-transform .3s",
        "WebkitTransition": "color .3s, -webkit-transform .3s",
        "fontSize": 0.875,
        "lineHeight": 2.643,
        "color": "white",
        "fontWeight": "700",
        "background": "#fff",
        "textTransform": "uppercase"
    },
    "nav-extended": {
        "top": 0,
        "zIndex": 0,
        "position": "fixed",
        "WebkitBackfaceVisibility": "hidden",
        "right": 0,
        "width": "75%",
        "height": "100%",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "overflowY": "auto",
        "fontWeight": "700",
        "background": "#000",
        "WebkitTransition": "visibility .5s",
        "transition": "visibility .5s",
        "visibility": "hidden"
    },
    "navbar> container": {
        "position": "relative"
    },
    "navbar ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 14,
        "marginBottom": 0,
        "marginLeft": 14
    },
    "navbar li:last-child": {
        "display": "none"
    },
    "navbar a": {
        "color": "inherit",
        "fontWeight": "700"
    },
    "navbar-lite navbar": {
        "color": "#fff",
        "background": "transparent"
    },
    "navbar-lite navbar brand svg": {
        "fill": "#fff",
        "verticalAlign": "middle"
    },
    "brand": {
        "display": "inline-block",
        "width": 140,
        "height": 24,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "WebkitTransform": "translateX(0)",
        "transform": "translateX(0)",
        "transition": "transform .3s, -webkit-transform .3s",
        "WebkitTransition": "-webkit-transform .3s"
    },
    "brand svg": {
        "width": "100%",
        "height": "auto",
        "fill": "#404041"
    },
    "nav-inner": {
        "position": "absolute",
        "top": 0,
        "right": 15,
        "textAlign": "right"
    },
    "nav-inner ul": {
        "display": "none"
    },
    "btn-mobile-menu": {
        "position": "absolute",
        "top": 0,
        "right": 15
    },
    "open btn-mobile-menu": {
        "display": "none"
    },
    "navbar-trans navbar": {
        "background": "transparent"
    },
    "open nav-extended": {
        "visibility": "visible",
        "WebkitOverflowScrolling": "touch"
    },
    "nav-extended icon-modal-close": {
        "position": "absolute",
        "top": 15,
        "right": 15
    },
    "nav-extended ul": {
        "marginTop": 20,
        "marginBottom": 30
    },
    "nav-extended li": {
        "marginBottom": 10
    },
    "nav-extended list-social": {
        "marginLeft": -8
    },
    "nav-extended list-social> li": {
        "paddingLeft": 8,
        "paddingRight": 8
    },
    "nav-extended a": {
        "color": "#8c8c8c",
        "WebkitTransition": "color .25s",
        "transition": "color .25s"
    },
    "nav-extended active": {
        "color": "#fff"
    },
    "nav-extended a:hover": {
        "color": "#fff"
    },
    "wrap": {
        "position": "relative",
        "background": "transparent",
        "zIndex": 4,
        "WebkitTransform": "translate3d(0, 0, 0)"
    },
    "wrap-group": {
        "transition": "transform .3s, -webkit-transform .3s",
        "WebkitTransition": "-webkit-transform .3s"
    },
    "open wrap-group": {
        "cursor": "pointer"
    },
    "wrap-inner": {
        "background": "#fff",
        "WebkitTransform": "none"
    },
    "content-position": {
        "position": "relative",
        "zIndex": 2,
        "width": "100%"
    },
    "content-positionv-helper": {
        "display": "table"
    },
    "v-center": {
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "v-center-inner": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": "88%"
    },
    "level": {
        "position": "relative",
        "overflow": "hidden",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "background": "#fff"
    },
    "standard-content wrap": {
        "marginTop": 90
    },
    "standard-content p+ h2": {
        "marginTop": 3.125
    },
    "standard-content p:last-child": {},
    "[class*=\"level\"]border-bottom": {
        "position": "relative"
    },
    "[class*=\"level\"]border-bottom-short": {
        "position": "relative"
    },
    "[class*=\"level\"]border-bottom:after": {
        "content": "''",
        "position": "absolute",
        "boxSizing": "border-box",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "maxWidth": 1690,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "paddingLeft": 60,
        "paddingRight": 60,
        "borderBottom": "1px solid #dddddd"
    },
    "[class*=\"level\"]border-bottom-short:after": {
        "content": "''",
        "position": "absolute",
        "boxSizing": "border-box",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "maxWidth": 1290,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "paddingLeft": 60,
        "paddingRight": 60,
        "borderBottom": "1px solid #dddddd"
    },
    "level-atoms": {
        "paddingBottom": 85
    },
    "footer h1": {
        "marginBottom": 30
    },
    "footer p": {
        "marginBottom": 0
    },
    "colophon": {
        "clear": "both",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "lineHeight": 1.1,
        "background": "#fff",
        "textAlign": "center",
        "fontSize": 12
    },
    "colophon container:first-child": {
        "paddingTop": 20,
        "borderTop": "1px solid #ebebeb"
    },
    "tertiary": {
        "paddingTop": 10,
        "fontSize": 12
    },
    "tertiary ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "tertiary li": {
        "listStyle": "disc",
        "display": "inline-block",
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "tertiary li:before": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -3,
        "left": 0,
        "height": 4,
        "width": 4,
        "borderRadius": 4,
        "content": "",
        "background": "#959fa5"
    },
    "tertiary li:first-child:before": {
        "display": "none"
    },
    "tertiary a": {
        "color": "inherit"
    },
    "grid-article": {
        "marginBottom": 30
    },
    "grid-article article": {
        "color": "#565656"
    },
    "grid-article entry-title": {
        "color": "#2f2f2f",
        "marginBottom": 0.5
    },
    "grid-article img-container": {
        "position": "relative",
        "height": 0,
        "paddingBottom": "56.83%",
        "overflow": "hidden"
    },
    "grid-article img-container img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "width": "100%"
    },
    "entry-meta": {
        "fontSize": 11
    },
    "grid-article entry-wrapper": {
        "position": "relative",
        "zIndex": 1,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "grid-article entry-meta": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "position": "relative",
        "zIndex": 1
    },
    "grid-article entry-footer": {
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "position": "relative",
        "zIndex": 1
    },
    "entry-meta category": {
        "fontWeight": "700"
    },
    "category-careers": {
        "color": "#2f2f2f"
    },
    "entry-meta category-blog": {
        "color": "#755ec6"
    },
    "entry-meta category-press-release": {
        "color": "#ebbb52"
    },
    "entry-meta category-news": {
        "color": "#517709"
    },
    "entry-meta category-event": {
        "color": "#16a7ac"
    },
    "entry-meta time": {
        "color": "#bebebe",
        "marginLeft": 20
    },
    "entry-footer": {
        "paddingTop": 0
    },
    "col-bg-white": {
        "zIndex": 0,
        "position": "absolute",
        "bottom": 0,
        "top": 0,
        "left": 15,
        "right": 15,
        "background": "#fff"
    },
    "col-box-shadow": {
        "zIndex": 0,
        "position": "absolute",
        "bottom": 0,
        "top": 0,
        "left": 15,
        "right": 15,
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.08)"
    },
    "ueno-no-flexbox col-bg-white": {
        "display": "none"
    },
    "ueno-no-flexbox col-box-shadow": {
        "display": "none"
    },
    "atoms-wrapper": {
        "position": "relative",
        "maxWidth": "100%",
        "width": 300,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": 400
    },
    "ueno-no-cssanimations atoms-wrapper": {
        "display": "none"
    },
    "atoms-wrapper li": {
        "listStyle": "none"
    },
    "circle": {
        "position": "absolute",
        "width": 90,
        "height": 90,
        "background": "#fff",
        "borderRadius": "100%",
        "textTransform": "uppercase",
        "color": "#0162a2",
        "textAlign": "center",
        "verticalAlign": "middle",
        "boxShadow": "0 0 0 10px #ecf0f2",
        "fontSize": 10,
        "fontWeight": "700",
        "opacity": 0,
        "WebkitTransition": "opacity .5s",
        "transition": "opacity .5s",
        "zIndex": 2
    },
    "circle-large": {
        "position": "relative",
        "marginTop": 90,
        "marginRight": "auto",
        "marginBottom": 90,
        "marginLeft": "auto",
        "width": 170,
        "height": 170,
        "background": "linear-gradient(to right, #fdfdfd 0%, #ffffff 56%)",
        "zIndex": 3,
        "textTransform": "lowercase",
        "fontSize": 24,
        "fontWeight": "400",
        "lineHeight": 170,
        "boxShadow": "0 0 133px rgba(0, 38, 32, 0.14)",
        "border": 0,
        "opacity": 1
    },
    "circle-pulse": {
        "display": "none",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "height": 900,
        "width": 900,
        "marginTop": -452,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -452,
        "zIndex": 1,
        "border": "4px solid #b6d9ec",
        "background": "transparent",
        "borderRadius": "50%",
        "opacity": 0
    },
    "circle-bordered": {
        "boxShadow": "0 0 0 10px #ecf0f2"
    },
    "circle txt": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "verticalAlign": "middle",
        "lineHeight": 1.2
    },
    "active-state circle": {
        "opacity": 1
    },
    "circlea": {
        "lineHeight": 144,
        "width": 144,
        "height": 144,
        "marginTop": -300,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -40
    },
    "circleb": {
        "lineHeight": 171,
        "width": 171,
        "height": 171,
        "marginTop": -300,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "62%"
    },
    "circlec": {
        "lineHeight": 190,
        "width": 190,
        "height": 190,
        "marginTop": -160,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "40%"
    },
    "circled": {
        "lineHeight": 90,
        "width": 90,
        "height": 90,
        "marginTop": -170,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "-5%"
    },
    "circlee": {
        "lineHeight": 105,
        "width": 105,
        "height": 105,
        "marginTop": -110,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "33%"
    },
    "circlef": {
        "width": 20,
        "height": 20
    },
    "circleg": {
        "width": 10,
        "height": 10,
        "boxShadow": "none"
    },
    "circleh": {
        "width": 27,
        "height": 27
    },
    "atoms-wrapper anim": {
        "WebkitAnimation": "none",
        "animation": "none"
    },
    "hero": {
        "top": 0,
        "left": 0,
        "width": "100%",
        "minHeight": 500,
        "backgroundColor": "#fff",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "50% 0",
        "zIndex": 2,
        "position": "relative"
    },
    "loaded hero": {
        "opacity": 1
    },
    "heroplaceholder": {
        "height": 0,
        "minHeight": 0,
        "overflow": "hidden",
        "background": "none"
    },
    "hero lead-title": {
        "color": "#fff",
        "fontSize": 3
    },
    "hero the-white-out": {
        "color": "#fff"
    },
    "hero h1": {
        "color": "inherit",
        "lineHeight": 1.2
    },
    "hero content-narrow": {
        "marginLeft": "auto",
        "marginRight": "auto",
        "maxWidth": 660
    },
    "hero h1 subheading": {
        "lineHeight": 18
    },
    "hero-home": {
        "backgroundColor": "#f3f7f8",
        "backgroundImage": "url('http://www.gdei.us/assets/img/landing-page-background.jpg')",
        "backgroundPosition": "50% 60%",
        "color": "#1e1e1e"
    },
    "hero-404": {
        "backgroundColor": "#f3f7f8",
        "backgroundImage": "url('http://www.gdei.us/assets/img/landing-page-background.jpg')",
        "backgroundPosition": "50% 60%",
        "color": "#1e1e1e"
    },
    "hero-platform": {
        "backgroundColor": "white",
        "backgroundImage": "url('https://65.media.tumblr.com/tumblr_luix0fk0Le1qdeuyro1_1280.jpg')",
        "color": "#fff"
    },
    "hero-company": {
        "backgroundColor": "#646466",
        "backgroundImage": "url(/img/hero-company.jpg)",
        "color": "#fff"
    },
    "hero-careers": {
        "backgroundColor": "#737275",
        "backgroundImage": "url(/img/hero-careers.jpg)",
        "backgroundPosition": "50% 50%",
        "color": "#fff"
    },
    "hero-company-careers": {
        "backgroundColor": "#46585d",
        "backgroundImage": "url(/img/hero-company-careers.jpg)",
        "color": "#fff"
    },
    "hero-network": {
        "background": "#3e4f62",
        "color": "#fff"
    },
    "hero-blog": {
        "color": "#fff"
    },
    "front-clouds": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": 5200,
        "height": "100%",
        "minHeight": 1140,
        "zIndex": 1,
        "backgroundSize": "2600px 1140px",
        "WebkitAnimation": "horizontalLoop 160s linear infinite",
        "animation": "horizontalLoop 160s linear infinite",
        "display": "none"
    },
    "hero-platform front-clouds": {
        "opacity": 0.2,
        "height": "70%",
        "top": "30%",
        "minHeight": 0,
        "backgroundPosition": "0 0",
        "backgroundSize": "auto"
    },
    "people-caption": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "fontSize": 1,
        "lineHeight": 1.2,
        "fontWeight": "500",
        "color": "#fff",
        "display": "none"
    },
    "people-caption li": {
        "display": "block",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "people-caption name": {
        "display": "block",
        "fontWeight": "600"
    },
    "people-caption job-title": {
        "display": "block",
        "color": "#bebebe",
        "fontSize": 0.929
    },
    "carousel-control icon": {
        "position": "absolute",
        "top": "50%",
        "left": 15,
        "marginTop": -22
    },
    "carousel-controlright icon": {
        "left": "auto",
        "right": 15
    },
    "carousel-arrow": {
        "width": 23,
        "height": 55,
        "background": "url(/img/carousel-arrows.svg)"
    },
    "ueno-no-svg carousel-arrow": {
        "background": "url(/img/carousel-arrows.png)"
    },
    "icon carousel-arrow": {
        "backgroundSize": "auto"
    },
    "carousel-arrowarrow-right": {
        "backgroundPosition": "-46px 0"
    },
    "carousel-arrowarrow-left": {
        "backgroundPosition": "-69px 0"
    },
    "carousel-arrowarrow-rightcolor-fff": {
        "backgroundPosition": "0 0"
    },
    "carousel-arrowarrow-leftcolor-fff": {
        "backgroundPosition": "-23px 0"
    },
    "network-sensor-timeline": {
        "position": "relative",
        "height": 47,
        "paddingTop": 16,
        "background": "#ebeff1",
        "overflow": "visible",
        "boxShadow": "inset 0 0 27px rgba(0, 0, 0, 0.03)",
        "marginBottom": 144
    },
    "lt-ie9 network-sensor-timeline": {
        "display": "none"
    },
    "network-sensor": {
        "position": "absolute",
        "top": -18,
        "left": "50%",
        "marginLeft": -28,
        "width": 56,
        "height": 82,
        "background": "#fff",
        "borderRadius": 8,
        "boxShadow": "2px 7px 29px rgba(0, 38, 32, 0.12), inset 0 -50px 50px -50px rgba(0, 0, 0, 0.1)"
    },
    "lt-ie9 network-sensor": {
        "border": "1px solid #eee"
    },
    "network-sensor:after": {
        "content": "''",
        "position": "absolute",
        "top": "100%",
        "left": "50%",
        "marginTop": 27,
        "fontStyle": "normal",
        "whiteSpace": "nowrap",
        "WebkitTransform": "translateX(-50%)",
        "transform": "translateX(-50%)"
    },
    "network-sensor:nth-child(1)": {
        "left": "15%"
    },
    "network-sensor:nth-child(1):after": {
        "content": "'Remote Offices'"
    },
    "network-sensor:nth-child(2)": {
        "left": "38.5%"
    },
    "network-sensor:nth-child(2):after": {
        "content": "'Enterprise DMZ'"
    },
    "network-sensor:nth-child(3)": {
        "left": "62.5%"
    },
    "network-sensor:nth-child(3):after": {
        "content": "'Enterprise Core'"
    },
    "network-sensor:nth-child(4)": {
        "left": "85%"
    },
    "network-sensor:nth-child(4):after": {
        "content": "'Corporate Cloud'"
    },
    "network-sensor-timeline icon": {
        "position": "absolute",
        "left": "50%",
        "marginLeft": 12,
        "top": -52,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "dotted-line": {
        "display": "block",
        "width": 5200,
        "height": 3,
        "background": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210%22%20height%3D%223%22%20viewBox%3D%220%200%2010%203%22%3E%0D%0A%3Ccircle%20fill%3D%22%2380d1ce%22%20cx%3D%221.5%22%20cy%3D%221.5%22%20r%3D%221.5%22/%3E%0D%0A%3C/svg%3E%0D%0A')",
        "WebkitAnimation": "horizontalLoop 80s linear infinite",
        "animation": "horizontalLoop 80s linear infinite"
    },
    "dotted-line+ dotted-line": {
        "marginTop": 7,
        "WebkitAnimationDirection": "reverse",
        "animationDirection": "reverse",
        "backgroundImage": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2210%22%20height%3D%223%22%20viewBox%3D%220%200%2010%203%22%3E%0D%0A%3Ccircle%20fill%3D%22%23daacd3%22%20cx%3D%221.5%22%20cy%3D%221.5%22%20r%3D%221.5%22/%3E%0D%0A%3C/svg%3E%0D%0A')"
    },
    "circle-wifi": {
        "position": "absolute",
        "left": "50%",
        "marginLeft": 0,
        "bottom": 27,
        "height": 92,
        "WebkitTransformOrigin": "50% 50%",
        "transformOrigin": "50% 50%",
        "WebkitTransition": "margin 300ms",
        "transition": "margin 300ms"
    },
    "circle-wifi:nth-child(1)": {
        "WebkitTransform": "rotate(32deg)",
        "transform": "rotate(32deg)",
        "left": "15%"
    },
    "circle-wifi:nth-child(2)": {
        "left": "38.5%"
    },
    "circle-wifi:nth-child(3)": {
        "left": "62.5%"
    },
    "circle-wifi:nth-child(4)": {
        "WebkitTransform": "rotate(-32deg)",
        "transform": "rotate(-32deg)",
        "left": "85%"
    },
    "circle-wifi span": {
        "position": "absolute",
        "top": 0,
        "left": -45,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "width": 92,
        "height": 92,
        "border": "5px solid transparent",
        "borderTopColor": "#0162a2",
        "borderRadius": 400,
        "opacity": 0,
        "WebkitAnimation": "wifi 1.8s linear infinite",
        "animation": "wifi 1.8s linear infinite",
        "WebkitAnimationDelay": "0.6s",
        "animationDelay": "0.6s"
    },
    "lt-ie10 circle-wifi span": {
        "opacity": 1
    },
    "circle-wifi two": {
        "WebkitAnimationDelay": "1.2s",
        "animationDelay": "1.2s"
    },
    "lt-ie10 circle-wifi two": {
        "opacity": 0.9,
        "WebkitTransform": "scale(0.7)",
        "transform": "scale(0.7)"
    },
    "circle-wifi three": {
        "WebkitAnimationDelay": "1.8s",
        "animationDelay": "1.8s"
    },
    "lt-ie10 circle-wifi three": {
        "opacity": 0.8,
        "WebkitTransform": "scale(0.4)",
        "transform": "scale(0.4)"
    },
    "wisdom-engine": {
        "position": "relative",
        "marginTop": 60,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": 630
    },
    "wisdom-engine loopback": {
        "position": "absolute",
        "marginTop": 55,
        "top": 0,
        "height": 500,
        "width": 3,
        "background": "url('/img/platform/loop3.png')",
        "backgroundSize": "3px 40px",
        "WebkitAnimation": "dotloop 2s infinite linear reverse",
        "animation": "dotloop 2s infinite linear reverse"
    },
    "wisdom-engine loopback:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "width": 3,
        "height": 45,
        "background": "url('/img/platform/loop3.png')",
        "backgroundSize": "3px 40px",
        "WebkitAnimation": "dotloop 2s infinite linear reverse",
        "animation": "dotloop 2s infinite linear reverse",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "top": 0
    },
    "wisdom-engine loopback:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "width": 3,
        "height": 45,
        "background": "url('/img/platform/loop3.png')",
        "backgroundSize": "3px 40px",
        "WebkitAnimation": "dotloop 2s infinite linear reverse",
        "animation": "dotloop 2s infinite linear reverse",
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "bottom": 0
    },
    "wisdom-engine loopback:first-child": {
        "left": -45
    },
    "wisdom-engine loopback:first-child:before": {
        "WebkitTransform": "rotate(90deg) translate(-21px, -21px)",
        "transform": "rotate(90deg) translate(-21px, -21px)",
        "WebkitAnimationDelay": "50ms",
        "animationDelay": "50ms"
    },
    "wisdom-engine loopback:first-child:after": {
        "WebkitTransform": "rotate(-90deg) translate(-21px, 21px)",
        "transform": "rotate(-90deg) translate(-21px, 21px)",
        "WebkitAnimationDelay": "100ms",
        "animationDelay": "100ms"
    },
    "wisdom-engine loopback:last-child": {
        "right": -45
    },
    "wisdom-engine loopback:last-child:before": {
        "WebkitAnimationDelay": "50ms",
        "animationDelay": "50ms",
        "WebkitTransform": "rotate(-90deg) translate(21px, -21px)",
        "transform": "rotate(-90deg) translate(21px, -21px)"
    },
    "wisdom-engine loopback:last-child:after": {
        "WebkitTransform": "rotate(90deg) translate(21px, 21px)",
        "transform": "rotate(90deg) translate(21px, 21px)",
        "WebkitAnimationDelay": "100ms",
        "animationDelay": "100ms"
    },
    "wisdom-engine item": {
        "position": "relative",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 4,
        "paddingLeft": 135,
        "marginBottom": 60,
        "minHeight": 100,
        "boxShadow": "2px 7px 29px 0 rgba(38, 38, 38, 0.1)",
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 65%, rgba(0, 0, 0, 0.03) 100%)"
    },
    "lt-ie9 wisdom-engine item": {
        "border": "1px solid #eee"
    },
    "wisdom-engine item image": {
        "position": "absolute",
        "width": 80,
        "top": 30,
        "left": 30
    },
    "wisdom-engine item:after": {
        "content": "''",
        "position": "absolute",
        "top": "100%",
        "left": 10,
        "right": 10,
        "height": 60,
        "backgroundImage": "url('/img/platform/flow1-2.png')",
        "backgroundSize": "630px 92px",
        "WebkitAnimation": "dotloop 2s infinite linear",
        "animation": "dotloop 2s infinite linear"
    },
    "wisdom-engine item:nth-child(2):after": {
        "backgroundImage": "url('/img/platform/flow2-2.png')",
        "WebkitAnimationDuration": "1.9s",
        "animationDuration": "1.9s"
    },
    "wisdom-engine item:nth-child(3):after": {
        "backgroundImage": "url('/img/platform/flow3-2.png')",
        "WebkitAnimationDuration": "1.8s",
        "animationDuration": "1.8s"
    },
    "wisdom-engine item:nth-child(4):after": {
        "backgroundImage": "url('/img/platform/flow4-2.png')",
        "WebkitAnimationDuration": "1.7s",
        "animationDuration": "1.7s",
        "backgroundSize": "630px 184px"
    },
    "wisdom-engine item:nth-child(5)": {
        "paddingLeft": 30
    },
    "wisdom-engine item:nth-child(5) h2": {
        "paddingLeft": 105
    },
    "wisdom-engine item:nth-child(5):after": {
        "backgroundImage": "none"
    },
    "wisdom-engine result": {
        "textTransform": "uppercase",
        "marginTop": 18,
        "marginRight": 0,
        "marginBottom": 45,
        "marginLeft": 0,
        "paddingTop": 11,
        "lineHeight": 1.2,
        "fontSize": 11,
        "fontWeight": "500"
    },
    "wisdom-engine result span": {
        "display": "block",
        "float": "left",
        "marginTop": -11,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 93,
        "height": 49,
        "maxWidth": "100%",
        "lineHeight": 45,
        "textAlign": "center",
        "fontSize": 32,
        "fontWeight": "200",
        "color": "#fff",
        "borderRadius": 3
    },
    "wisdom-engine resulttheft": {
        "color": "#db4647"
    },
    "wisdom-engine resulttheft span": {
        "backgroundColor": "#db4647"
    },
    "wisdom-engine resultcommand": {
        "color": "#ffa13d"
    },
    "wisdom-engine resultcommand span": {
        "backgroundColor": "#ffa13d"
    },
    "wheel": {
        "overflow": "hidden",
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "width": 220,
        "height": 220,
        "background": "#cee2ec",
        "borderRadius": "100%",
        "border": "2px solid #fff"
    },
    "wheel v-center": {
        "display": "block",
        "position": "absolute",
        "width": "100%",
        "height": 50,
        "top": 0,
        "bottom": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "zIndex": 3
    },
    "wheel:after": {
        "content": "''",
        "position": "absolute",
        "top": 15,
        "left": 15,
        "right": 15,
        "bottom": 15,
        "background": "#fff",
        "zIndex": 2,
        "borderRadius": "100%"
    },
    "wheel spoke": {
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "width": "50%",
        "height": "100%",
        "background": "#ebeff1",
        "borderRadius": "0 360px 360px 0"
    },
    "wheel spoke:first-child": {
        "left": 0,
        "borderRadius": "360px 0 0 360px",
        "WebkitTransform": "rotate(0deg)",
        "transform": "rotate(0deg)",
        "zIndex": 2,
        "WebkitTransformOrigin": "100% 50%",
        "transformOrigin": "100% 50%"
    },
    "active-state wheel spoke:first-child": {
        "WebkitAnimation": "rotate 3s 3s ease-out forwards",
        "animation": "rotate 3s 3s ease-out forwards"
    },
    "wheel spoke:last-child": {
        "WebkitTransformOrigin": "0 50%",
        "transformOrigin": "0 50%",
        "zIndex": 1
    },
    "active-state wheel spoke:last-child": {
        "WebkitAnimation": "rotate 3s ease-in",
        "animation": "rotate 3s ease-in",
        "backgroundColor": "#cee2ec"
    },
    "wheel mask": {
        "content": "''",
        "position": "absolute",
        "left": "50%",
        "width": "50%",
        "height": "100%",
        "borderRadius": "0 360px 360px 0",
        "background": "#cee2ec",
        "opacity": 0,
        "zIndex": 2
    },
    "active-state wheel mask": {
        "WebkitAnimation": "tardfix 3s steps(1) forwards",
        "animation": "tardfix 3s steps(1) forwards"
    },
    "video-frame": {
        "position": "relative",
        "paddingTop": "4.6%",
        "paddingRight": "4.6%",
        "paddingBottom": "53.28125%",
        "paddingLeft": "4.6%",
        "width": "100%",
        "height": 0,
        "backgroundImage": "url(/img/video/videoframe.png)",
        "backgroundSize": "100% 100%",
        "backgroundRepeat": "no-repeat"
    },
    "ueno-iphone video-frame": {
        "background": "url(/img/visualizer-fallback.png) 50% 50% no-repeat",
        "backgroundSize": "contain"
    },
    "ueno-iphone video-frame:before": {
        "display": "none"
    },
    "video-frame video": {
        "position": "relative",
        "width": "100%",
        "zIndex": 1
    },
    "ueno-iphone video-frame video": {
        "display": "none"
    },
    "hero-home p": {
        "maxWidth": 680,
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto",
        "color": "#505050",
        "fontSize": 13
    },
    "hero-home p+ p": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto"
    },
    "hexagon-sprite": {
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": 280,
        "height": 323,
        "opacity": 0.07
    },
    "hexagon-content": {
        "border": "1px solid rgba(255, 255, 255, 0.35)",
        "borderWidth": "1px 0 0 0",
        "fontSize": 0.875,
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "color": "#c4d1d9"
    },
    "hexagon-content h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.2,
        "color": "#fff",
        "fontWeight": "600"
    },
    "hexagon-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.2,
        "fontWeight": "400",
        "fontSize": 1.313,
        "color": "#a7b8c7"
    },
    "hexagon-content ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "square inside"
    },
    "level-company-carousel": {
        "backgroundColor": "#0b0c0c",
        "backgroundImage": "url(/img/carousel-bg-flare.png), url(/img/carousel-bg-lines.png)",
        "backgroundPosition": "50% 100%, 50% -40px",
        "backgroundRepeat": "no-repeat, repeat"
    },
    "ueno-no-multiplebgs level-company-carousel": {
        "background": "#0b0c0c url(/img/carousel-bg-lines.png) 50% 0"
    },
    "level-company-carousel h1": {
        "color": "#fff"
    },
    "wwb carousel-indicators": {
        "bottom": 0
    },
    "wwb item": {
        "lineHeight": 1.2,
        "fontSize": 1.25,
        "fontWeight": "200",
        "height": 320
    },
    "wwb item p:last-child": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "levelgrid-gallery-parent": {
        "zIndex": 100
    },
    "levelgrid-gallery-parent> container": {
        "WebkitTransition": "opacity .3s",
        "transition": "opacity .3s",
        "opacity": 1
    },
    "levelgrid-gallery-parent grid-gallery": {
        "WebkitTransition": "opacity .3s",
        "transition": "opacity .3s",
        "opacity": 1
    },
    "grid-gallery container-fluid": {
        "backgroundImage": "linear-gradient(to top, #ffffff 0, #ffffff 150px, #f6f6f6 151px, #ffffff 70%)"
    },
    "grid-gallery row": {
        "position": "relative",
        "WebkitTransition": "opacity .3s",
        "transition": "opacity .3s"
    },
    "grid-gallery img": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "bottom": 0
    },
    "grid-gallery vcard": {
        "height": 150,
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30
    },
    "grid-gallery h2": {
        "marginBottom": 5
    },
    "grid-gallery slide": {
        "boxShadow": "none",
        "WebkitTransition": "box-shadow 0.3s",
        "transition": "box-shadow 0.3s",
        "paddingTop": 30,
        "color": "#565656",
        "lineHeight": 1.3
    },
    "modal-carousel": {
        "display": "none"
    },
    "modal-carousel carousel-control": {
        "height": 200,
        "width": 60,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "modal-carousel carousel-inner": {
        "overflow": "visible",
        "width": "inherit"
    },
    "grid-gallery> container-fluid": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "grid-gallery> container-fluid row": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "level-careers-carousel": {
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "level-careers-carousel item": {
        "height": 0,
        "paddingBottom": "43.6%"
    },
    "level-careers-carousel item img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0
    },
    "job-listings h2": {
        "lineHeight": 1.3
    },
    "level-dvr": {
        "paddingBottom": 50
    },
    "chart-dvr-wrapper": {
        "position": "relative",
        "width": 1400,
        "marginLeft": -880,
        "borderRadius": "40px 40px 0 0",
        "background": "#071b27",
        "height": 800,
        "zIndex": 2
    },
    "chart-dvr-wrapper:before": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "borderRadius": "40px 40px 0 0",
        "background": "linear-gradient(to bottom, #071b27 0%, #0088cb 87%)",
        "zIndex": 2
    },
    "chart-dvr-wrapper:after": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "right": 50,
        "height": 300,
        "width": 700,
        "borderRadius": "50%",
        "background": "transparent",
        "boxShadow": "0 -50px 100px 0 rgba(0, 137, 205, 0.2)",
        "zIndex": 1
    },
    "chart-dvr-inner": {
        "position": "relative",
        "background": "url(/img/chart-bg.png) 100% 100% no-repeat",
        "backgroundPosition": "100% 100%",
        "paddingTop": 0,
        "paddingRight": "8.424336973478939%",
        "paddingBottom": 0,
        "paddingLeft": "8.424336973478939%",
        "height": "100%",
        "WebkitTransform": "translate(0, -37px)",
        "transform": "translate(0, -37px)",
        "zIndex": 3
    },
    "chart-container": {
        "position": "absolute",
        "bottom": 140,
        "right": 73,
        "width": 660,
        "height": 230,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "chart-container bar-outer": {
        "display": "block",
        "verticalAlign": "baseline",
        "position": "relative",
        "float": "left",
        "width": 7,
        "height": "100%",
        "marginRight": 4,
        "overflow": "hidden"
    },
    "chart-container bar": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": 0,
        "background": "rgba(0, 145, 219, 0.47)"
    },
    "dvr-controls": {
        "position": "absolute",
        "top": 87,
        "right": 86,
        "width": 176,
        "height": 54,
        "borderRadius": 54,
        "background": "#05354e",
        "zIndex": 3
    },
    "dvr-controls svg": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -7
    },
    "dvr-controls play": {
        "marginTop": -12,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -12,
        "left": "50%"
    },
    "dvr-controls rewind": {
        "left": 28
    },
    "dvr-controls fwd": {
        "right": 28
    },
    "circle-labels": {
        "position": "relative",
        "lineHeight": 26,
        "fontSize": 16,
        "fontWeight": "200"
    },
    "circle-labels circle-label": {
        "position": "absolute",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "top": 155,
        "width": 300,
        "border": "0px solid #cee2ec"
    },
    "circle-labels circle-label:first-child": {
        "right": "73%",
        "textAlign": "right",
        "borderRightWidth": 2
    },
    "circle-labels circle-label:last-child": {
        "textAlign": "left",
        "left": "73%",
        "borderLeftWidth": 2
    },
    "level-visualizer": {
        "backgroundColor": "#0b0b0b",
        "color": "#fff",
        "backgroundImage": "radial-gradient(600px 15% ellipse at 50% 80%, rgba(0, 136, 203, 0.6) 10%, rgba(0, 0, 0, 0)), radial-gradient(1000px 100% ellipse at center, rgba(0, 136, 203, 0.6) 10%, #0b0b0b 60%)",
        "paddingBottom": 120
    },
    "level-visualizer subheading": {
        "color": "#4c6b79"
    },
    "level-visualizer btn": {
        "width": 230,
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20
    },
    "level-visualizer btn-primary": {
        "border": "2px solid #0088cb"
    },
    "level-visualizer btn-default": {
        "borderColor": "#3b6980"
    },
    "logos": {
        "textAlign": "center"
    },
    "logos item": {
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15,
        "display": "inline-block"
    },
    "logos item:first-child": {
        "marginLeft": 0
    },
    "logos item:last-child": {
        "marginRight": 0
    },
    "contact-map": {
        "position": "relative",
        "height": 80 * vh,
        "minHeight": 500,
        "maxHeight": 800,
        "background": "#343434 url(/img/map.min.png) 50% 50% no-repeat",
        "backgroundSize": "cover"
    },
    "info-window": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginTop": -150,
        "marginLeft": -140,
        "width": 280,
        "height": 300,
        "background": "#fff",
        "boxShadow": "0 0 70px rgba(0, 0, 0, 0.65)",
        "fontSize": 14
    },
    "map-pointer-wrap": {
        "position": "absolute",
        "bottom": -30,
        "width": "100%",
        "height": 30,
        "overflow": "hidden",
        "textAlign": "center"
    },
    "map-pointer": {
        "display": "inline-block",
        "position": "relative",
        "top": -30,
        "width": 40,
        "height": 40,
        "background": "#fff",
        "WebkitTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "zIndex": 0,
        "boxShadow": "0 0 10px rgba(0, 0, 0, 0.65)"
    },
    "ueno-no-csstransforms map-pointer": {
        "position": "absolute",
        "bottom": 10,
        "left": "50%",
        "marginLeft": -20,
        "width": 0,
        "height": 0,
        "borderStyle": "solid",
        "borderWidth": "20px 20px 0 20px",
        "borderColor": "#fff transparent transparent transparent",
        "display": "none"
    },
    "info-window address": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "info-window more": {
        "position": "absolute",
        "bottom": 10,
        "background": "#fff",
        "zIndex": 1
    },
    "level-gradient": {
        "overflow": "visible",
        "background": "linear-gradient(to bottom, #071c27 0%, #071c27 29%, #0088cb 77%)",
        "color": "#fff"
    },
    "level-gradient:before": {
        "content": "''",
        "position": "absolute",
        "top": -400,
        "left": 0,
        "right": 0,
        "height": 400,
        "boxShadow": "inset 0 -300px 200px -100px #071c27",
        "zIndex": 10,
        "pointerEvents": "none"
    },
    "level-gradientgradient-opaque": {
        "background": "linear-gradient(to bottom, #041b4a 0, #0088cb 100%)",
        "boxShadow": "none"
    },
    "level-gradientgradient-opaque:before": {
        "display": "none"
    },
    "level-gradient muted": {
        "color": "#c4d1d9"
    },
    "level-gradient more": {
        "color": "#79a9c9"
    },
    "level-gradient hr": {
        "background": "#fff",
        "marginBottom": 15
    },
    "level-white": {
        "background": "#fff"
    },
    "level-grey": {
        "background": "#f6f6f6"
    },
    "level-news": {
        "paddingBottom": 40
    },
    "level-pastel-blue": {
        "background": "#f1f5f7"
    },
    "level-pastel-grid": {
        "backgroundImage": "url(/img/pastel-grid.png)",
        "backgroundPosition": "49.9% 20px"
    },
    "ueno-no-history loading-screen": {
        "display": "none"
    },
    "loaded loading-screen": {
        "opacity": 0,
        "visibility": "hidden"
    },
    "loading-icon": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "width": 60,
        "height": 60,
        "marginTop": -30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -30,
        "background": "url(/img/loading.svg) 50% 50% no-repeat",
        "WebkitAnimation": "spin 2s ease-in infinite",
        "animation": "spin 2s ease-in infinite"
    },
    "ueno-no-cssanimations loading-icon": {
        "background": "transparent",
        "width": 200,
        "height": 30,
        "left": 0,
        "right": 0,
        "marginTop": -30,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "fontStyle": "normal",
        "textAlign": "center",
        "overflow": "visible",
        "textIndent": 0
    },
    "ueno-no-cssanimations loading-icon:before": {
        "display": "block",
        "width": "100%",
        "marginTop": 40,
        "content": "Loading, please wait...",
        "whiteSpace": "nowrap",
        "fontSize": 14
    },
    "job-listings hr": {
        "marginTop": 60,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "post-content": {
        "color": "#333"
    },
    "post-subheading": {
        "fontWeight": "500",
        "fontSize": 18,
        "marginBottom": 3.125
    },
    "post-content h2": {
        "fontSize": 1.5,
        "color": "inherit"
    },
    "show-more-content": {
        "visibility": "hidden",
        "height": 0,
        "opacity": 0,
        "overflow": "hidden",
        "WebkitTransition": "visibility .3s, opacity .3s",
        "transition": "visibility .3s, opacity .3s"
    },
    "show-more-contentactive": {
        "height": "auto",
        "opacity": 1,
        "visibility": "visible",
        "overflow": "visible"
    },
    "has-overlay": {
        "position": "relative"
    },
    "has-overlay inner-overlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "rgba(255, 255, 255, 0.9)",
        "content": "",
        "opacity": 0,
        "zIndex": 999,
        "visibility": "hidden",
        "WebkitTransition": "all .3s",
        "transition": "all .3s"
    },
    "has-overlayfade inner-overlay": {
        "opacity": 1,
        "visibility": "visible"
    },
    "brand-text": {
        "fontSize": 1.875,
        "fontWeight": "400",
        "color": "#0162a2",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mt-0": {
        "marginTop": 0
    },
    "mb-0": {
        "marginBottom": 0
    },
    "mb-5": {
        "marginBottom": 5
    },
    "mb-10": {
        "marginBottom": 0.313
    },
    "mb-15": {
        "marginBottom": 0.938
    },
    "mb-20": {
        "marginBottom": 1.25
    },
    "mb-25": {
        "marginBottom": 1.5
    },
    "mb-30": {
        "marginBottom": 1.875
    },
    "mb-40": {
        "marginBottom": 2.5
    },
    "mb-50": {
        "marginBottom": 3.125
    },
    "mb-60": {
        "marginBottom": 3.75
    },
    "mb-70": {
        "marginBottom": 4.375
    },
    "mb-80": {
        "marginBottom": 5
    },
    "mb-90": {
        "marginBottom": 5.625
    },
    "mb-100": {
        "marginBottom": 6.25
    },
    "mb-110": {
        "marginBottom": 6.875
    },
    "mb-120": {
        "marginBottom": 7.5
    },
    "mt-10": {
        "marginTop": 0.625
    },
    "mt-20": {
        "marginTop": 1.25
    },
    "mt-25": {
        "marginTop": 1.563
    },
    "mt-30": {
        "marginTop": 1.875
    },
    "mt-40": {
        "marginTop": 2.5
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-upper": {
        "textTransform": "uppercase"
    },
    "block": {
        "display": "block"
    },
    "full-height": {
        "height": "100%"
    },
    "color-inherit": {
        "color": "inherit"
    },
    "color-dark": {
        "color": "#505050"
    },
    "color-blue": {
        "color": "#0088cb"
    },
    "text-reset": {
        "fontSize": 1,
        "color": "inherit"
    },
    "[class*=\"br-\"]": {
        "display": "none"
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 0,
        "listStyle": "none",
        "marginLeft": -5
    },
    "list-inline> li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "more": {
        "display": "block",
        "fontSize": 11,
        "lineHeight": 13,
        "textTransform": "uppercase",
        "letterSpacing": 0.09,
        "fontWeight": "700",
        "color": "#79a9c9"
    },
    "subheading": {
        "display": "block",
        "fontSize": 11,
        "lineHeight": 13,
        "textTransform": "uppercase",
        "letterSpacing": 0.38,
        "fontWeight": "800"
    },
    "alt-subheading": {
        "fontSize": 22,
        "fontWeight": "500"
    },
    "icon+ subheading": {
        "textIndent": 2
    },
    "subheading-before subheading": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "h1 icon": {
        "verticalAlign": "text-top"
    },
    "muted": {
        "color": "#828b90"
    },
    "amuted": {
        "color": "#79a9c9"
    },
    "opacity-4": {
        "opacity": 0.4
    },
    "font-size-inherit": {
        "fontSize": "inherit"
    },
    "font-size-xl": {
        "fontSize": 2,
        "lineHeight": 1
    },
    "font-size-lg": {
        "fontSize": 1.5
    },
    "font-size-md": {
        "fontSize": 1.125,
        "lineHeight": 1.556
    },
    "font-size-smaller": {
        "fontSize": 0.813
    },
    "font-size-xs": {
        "fontSize": 11
    },
    "leading-1": {
        "lineHeight": 1
    },
    "leading-std": {
        "lineHeight": 1.625
    },
    "weight-400": {
        "fontWeight": "400"
    },
    "weight-500": {
        "fontWeight": "500"
    },
    "weight-600": {
        "fontWeight": "600"
    },
    "weight-700": {
        "fontWeight": "700"
    },
    "weight-800": {
        "fontWeight": "800"
    },
    "color-fff": {
        "color": "#fff"
    },
    "color-dark-grey": {
        "color": "#2f2f2f"
    },
    "color-mid-grey": {
        "color": "#565656",
        "WebkitTransition": "color .25s",
        "transition": "color .25s"
    },
    "color-alt-grey": {
        "color": "#333",
        "WebkitTransition": "color .25s",
        "transition": "color .25s"
    },
    "color-lite-grey": {
        "color": "#d0d0d0",
        "WebkitTransition": "color .25s",
        "transition": "color .25s"
    },
    "acolor-lite-grey:hover": {
        "color": "#565656"
    },
    "[class*=\"mw-\"]": {
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "mw-80": {
        "maxWidth": "80%"
    },
    "no-leading": {
        "letterSpacing": 0
    },
    "no-shadow": {
        "textShadow": "none",
        "boxShadow": "none"
    },
    "no-margin": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "no-mw": {
        "maxWidth": "none"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "v-middle": {
        "verticalAlign": "middle"
    },
    "dotted-border": {
        "paddingBottom": 24,
        "background": "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20%0D%0A%09%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2224%22%20height%3D%224%22%20viewBox%3D%220%200%2024%204%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%230088CB%22%20d%3D%22M2%2C0C0.896%2C0%2C0%2C0.896%2C0%2C2c0%2C1.104%2C0.896%2C2%2C2%2C2s2-0.896%2C2-2%0D%0A%09%09%09C4%2C0.896%2C3.104%2C0%2C2%2C0z%20M12%2C0c-1.104%2C0-2%2C0.896-2%2C2c0%2C1.104%2C0.896%2C2%2C2%2C2s2-0.896%2C2-2C14%2C0.896%2C13.104%2C0%2C12%2C0z%20M22%2C0%0D%0A%09%09%09c-1.104%2C0-2%2C0.896-2%2C2c0%2C1.104%2C0.896%2C2%2C2%2C2s2-0.896%2C2-2C24%2C0.896%2C23.104%2C0%2C22%2C0z%22/%3E%0D%0A%3C/g%3E%0D%0A%3C/svg%3E%0D%0A') 50% 100% no-repeat"
    },
    "floatlabel-wrapper": {
        "paddingTop": 16
    },
    "label-floatlabel": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "color": "#959fa5",
        "fontWeight": "500",
        "textTransform": "uppercase",
        "fontSize": 11
    },
    "floatlabel-wrapper labelerror": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "color": "#ee1919",
        "fontWeight": "500",
        "textTransform": "uppercase",
        "fontSize": 11,
        "background": "#fff"
    },
    "floatlabel-bordered-label": {
        "left": 15
    },
    "floatlabel-parentinput-bordered": {
        "marginTop": 3
    },
    "trigger-submit+ btn": {
        "WebkitTransition": "opacity .25s",
        "transition": "opacity .25s"
    },
    "trigger-submit:invalid+ btn": {
        "opacity": 0,
        "background": "#ededed",
        "color": "#fff",
        "cursor": "default"
    },
    "trigger-submit:valid+ btn": {
        "opacity": 1
    },
    "trigger-submit:invalid:focus+ btn": {
        "background": "#ededed",
        "color": "#fff",
        "cursor": "default",
        "opacity": 1
    },
    "anim-parent auto-anim": {
        "WebkitAnimationPlayState": "paused",
        "animationPlayState": "paused"
    },
    "anim-paused anim-parentactive-state auto-anim": {
        "WebkitAnimationPlayState": "paused",
        "animationPlayState": "paused"
    },
    "anim-parentactive-state auto-anim": {
        "WebkitAnimationPlayState": "running",
        "animationPlayState": "running"
    }
});