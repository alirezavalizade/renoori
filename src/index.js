import React from 'react';
import domElements from './utils/domElements';
import randomString from './utils/generateRandomString';

const stylesKeyManager = {};

function domElemntsGenerator(){
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            Object.keys(styles).forEach((styleKey) => {
                if (!stylesKeyManager[styleKey]) {
                    stylesKeyManager[styleKey] = {};
                    stylesKeyManager[styleKey][styles[styleKey]] = randomString();
                } else {
                    if (!stylesKeyManager[styleKey][styles[styleKey]]) {
                        stylesKeyManager[styleKey][styles[styleKey]] = randomString();
                    }
                }
            });
            console.log(stylesKeyManager);
            return ({ ...props, children }) => React.createElement(el, props, children);
        };
    });
    return components;
}

export default domElemntsGenerator;