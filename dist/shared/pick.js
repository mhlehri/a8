"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const pick = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (obj[key] !== undefined) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};
exports.pick = pick;
