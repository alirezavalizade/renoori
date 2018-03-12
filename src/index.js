import React from 'react';
import domElements from './utils/domElements';
import randomString from './utils/generateRandomString';

const stylesKeyManager = {};

const headsStylesManager = (function() {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
});

function addCSSRule(sheet, selector, rules, index) {
    console.log(sheet, index);
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}

function objectToCss() {
    Object.keys(stylesKeyManager)
        .forEach((key) => {
            Object.keys(stylesKeyManager[key])
                .forEach((subKey, index) => {
                    addCSSRule(document.styleSheets[0], `.${stylesKeyManager[key][subKey]}`, `${key}: ${subKey}`, index);
                });
        });         
}


function domElemntsGenerator() {
    const components = {};
    headsStylesManager();
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            let classNames = '';
            Object.keys(styles).forEach((styleKey) => {
                if (!stylesKeyManager[styleKey]) {
                    stylesKeyManager[styleKey] = {};
                    stylesKeyManager[styleKey][styles[styleKey]] = randomString();
                } else {
                    if (!stylesKeyManager[styleKey][styles[styleKey]]) {
                        stylesKeyManager[styleKey][styles[styleKey]] = randomString();
                    }
                }
                classNames = `${classNames} ${stylesKeyManager[styleKey][styles[styleKey]]}`; 
            });
            objectToCss();
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNames }, children);
        };
    });    
    return components;
}

export default domElemntsGenerator;