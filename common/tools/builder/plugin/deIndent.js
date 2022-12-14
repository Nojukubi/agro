"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const de_indent_1 = __importDefault(require("de-indent"));
// RegExp to replace SFC template content.
const tplRegExp = /(?<=<template[^>]*>)(.|\n)*?(?=<\/template>)/gm;
// Helper to remove the lead spaces from code.
function deIndentLead(code) {
    return code?.replace(/^\s+/, '');
}
// Helper to remove the lead indents from code.
function deIndentCode(code) {
    return deIndentLead((0, de_indent_1.default)(code));
}
// Helper to remove the lead indent from vue template.
function deIndentTpl(code) {
    // Determine whether code is exist in template.
    const tplCode = code.match(tplRegExp)?.[0];
    return tplCode ? code.replace(tplRegExp, deIndentCode(tplCode)) : code;
}
// Create the plugin output with transformed result.
function createPluginOutput(code) {
    return { code, map: null };
}
// Transform the SCF code to fix the pug templates.
function transform(code, path) {
    return path.endsWith('.vue')
        ? createPluginOutput(deIndentTpl(code))
        : path.endsWith('type=template&lang.js')
            ? createPluginOutput(deIndentCode(code))
            : createPluginOutput(code);
}
exports.transform = transform;
// Plugin to remove the lead indent in SFC templates.
function plugin() {
    return { name: 'de-indent', enforce: 'pre', transform };
}
exports.default = plugin;
