import React from 'react';
import domElements from './utils/domElements';
import randomString from './utils/generateRandomString';

const stylesKeyManager = {};

function domElemntsGenerator() {
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
                classNames = `${classNames} ${stylesKeyManager[styleKey][styles[styleKey]]}`; 
            });
            console.log(stylesKeyManager);
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNames }, children);
        };
    });
    return components;
}

export default domElemntsGenerator;