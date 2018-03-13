import React from 'react';
import domElements from './utils/domElements';
import randomString from './utils/generateRandomString';
import css from './utils/css';
import { createBrowserTag, createTagStyle, stylesKeyManager } from './utils/styleTags';


function domElemntsGenerator() {
    // createBrowserTag({ el: createTagStyle() });

    const components = {};
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
                css();
                classNames = `${classNames} ${stylesKeyManager[styleKey][styles[styleKey]]}`;
            });
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNames }, children);
        };
    });    
    return components;
}

export default domElemntsGenerator();