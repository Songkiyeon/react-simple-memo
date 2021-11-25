"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var gsap_1 = __importDefault(require("gsap"));
var MemoArea = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: absolute;\n  top: 20px;\n  left: ", ";\n  right: 0;\n  width: 0px;\n  height: 0px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 3px 3px 11.5px -1px #323232;\n  z-index: 1;\n\n  .memoline {\n    width: calc(100% - 20px);\n    height: 1px;\n    margin: 20px 0px;\n    background-color: #787272;\n  }\n"], ["\n  overflow: hidden;\n  position: absolute;\n  top: 20px;\n  left: ", ";\n  right: 0;\n  width: 0px;\n  height: 0px;\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: 3px 3px 11.5px -1px #323232;\n  z-index: 1;\n\n  .memoline {\n    width: calc(100% - 20px);\n    height: 1px;\n    margin: 20px 0px;\n    background-color: #787272;\n  }\n"])), function (props) { return props.left; }, function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : "#f1c13a"; });
var MemoTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n"], ["\n  font-size: 20px;\n"])));
var MemoDescription = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: calc(100% - 20px);\n  height: auto;\n  font-size: 15px;\n"], ["\n  width: calc(100% - 20px);\n  height: auto;\n  font-size: 15px;\n"])));
var MemoWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 10px;\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 10px;\n"])), function (props) { return props.width; }, function (props) { return props.height; });
function Memo(props) {
    var targetContainer = react_2.useRef(null);
    var _a = react_2.useState({ width: "0px", height: "0px" }), size = _a[0], setSize = _a[1];
    var _b = react_2.useState("0"), left = _b[0], setLeft = _b[1];
    react_2.useEffect(function () {
        gsap_1.default.to(targetContainer.current, {
            width: size.width,
            height: size.height,
            duration: 0.2,
        });
    }, [size]);
    react_2.useEffect(function () {
        if (props.open) {
            setSize({
                width: props.width,
                height: props.height,
            });
        }
        else {
            setSize({
                width: "0px",
                height: "0px",
            });
        }
    }, [props.open]);
    react_2.useEffect(function () {
        if (targetContainer.current !== null) {
            var xl = targetContainer.current.getBoundingClientRect().left;
            var maxWidth = window.innerWidth;
            var rightEnd = xl + Number.parseInt(props.width);
            var xr = targetContainer.current.getBoundingClientRect().right;
            var leftEnd = xr - Number.parseInt(props.width);
            console.log("LeftEnd", leftEnd);
            if (rightEnd < maxWidth) {
                setLeft("0");
            }
            else if (leftEnd > 0) {
                setLeft("auto");
            }
            else {
                console.log("xl", xl);
                console.log("here");
                setLeft(-xl + "px");
            }
        }
    }, []);
    return (react_1.default.createElement(MemoArea, { ref: targetContainer, left: left, color: props.color },
        react_1.default.createElement(MemoWrapper, { width: props.width, height: props.height },
            react_1.default.createElement(MemoTitle, { style: props.titleStyle }, props.title),
            react_1.default.createElement("div", { className: "memoline" }),
            react_1.default.createElement(MemoDescription, { style: props.descriptionStyle }, props.description))));
}
exports.default = Memo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
