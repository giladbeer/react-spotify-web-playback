var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* tslint:disable:object-literal-sort-keys */
import * as React from 'react';
import { create } from 'nano-css';
// @ts-ignore
import { addon as addonJSX } from 'nano-css/addon/jsx';
import { addon as addonKeyframes } from 'nano-css/addon/keyframes';
// @ts-ignore
import { addon as addonNesting } from 'nano-css/addon/nesting';
import { addon as addonRule } from 'nano-css/addon/rule';
// @ts-ignore
import { addon as addonStyle } from 'nano-css/addon/style';
// @ts-ignore
import { addon as addonStyled } from 'nano-css/addon/styled';
var nano = create({ h: React.createElement });
addonRule(nano);
addonKeyframes(nano);
addonJSX(nano);
addonStyle(nano);
addonStyled(nano);
addonNesting(nano);
var _a = nano, keyframes = _a.keyframes, put = _a.put, styled = _a.styled;
export var px = function (value) {
    return typeof value === 'number' ? value + "px" : value;
};
export function getMergedStyles(styles) {
    return __assign({ activeColor: '#1cb954', altColor: '#ccc', bgColor: '#fff', color: '#333', errorColor: '#a60000', height: 48, loaderColor: '#ccc', loaderSize: 32, sliderColor: '#666', sliderHandleBorderRadius: '50%', sliderHandleColor: '#000', sliderHeight: 4, sliderTrackBorderRadius: 0, sliderTrackColor: '#ccc', trackArtistColor: '#999', trackNameColor: '#333' }, styles);
}
export { keyframes, put, styled };
//# sourceMappingURL=styles.js.map