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
var styled_components_1 = __importDefault(require("styled-components"));
var Message_1 = __importDefault(require("@mui/icons-material/Message"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: -", "px;\n  right: -", "px;\n  width: ", "px;\n  height: ", "px;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: -", "px;\n  right: -", "px;\n  width: ", "px;\n  height: ", "px;\n  color: ", ";\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.color; });
function Icon(props) {
    var _a, _b;
    var size = (_a = props.size) !== null && _a !== void 0 ? _a : 10;
    var color = (_b = props.color) !== null && _b !== void 0 ? _b : "orange";
    return (react_1.default.createElement(Container, { size: size, color: color },
        react_1.default.createElement(Message_1.default, { style: { fontSize: size, position: "absolute", top: 0 } })));
}
exports.default = Icon;
var templateObject_1;
