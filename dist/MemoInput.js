"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Memo_1 = __importDefault(require("./Memo"));
var Icon_1 = __importDefault(require("./Icon"));
var Container = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var TextArea = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"], ["\n  color: ",
    ";\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"])), function (props) { var _a; return props.active === true ? (_a = props.color) !== null && _a !== void 0 ? _a : "unset" : "unset"; });
var MemoInput = function (props) {
    var _a = react_1.useState(false), memoState = _a[0], setMemoState = _a[1];
    var handleTextClick = function () {
        setMemoState(function (prev) { return !prev; });
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(TextArea, { onClick: handleTextClick, active: memoState, color: props.memoColor }, props.contents),
        react_1.default.createElement(Memo_1.default, { color: props.memoColor, open: memoState, width: props.width, height: props.height, title: props.title, titleStyle: props.titleStyle, description: props.description, descriptionStyle: props.descriptionStyle }),
        react_1.default.createElement(Icon_1.default, { size: props.captionSize, color: props.captionColor })));
};
exports.MemoInput = MemoInput;
exports.default = exports.MemoInput;
var templateObject_1, templateObject_2;
