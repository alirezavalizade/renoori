import React from 'react';
import domElements from './utils/domElements';
import randomString from './utils/generateRandomString';

const stylesKeyManager = {};

function domElemntsGenerator(){
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            Object.keys(styles).forEach((style) => {
                if (!stylesKeyManager[style]) {
                    
                }
            });
            
            return ({ ...props, children }) => React.createElement(el, props, children);
        };
    });
    return components;
}

export default domElemntsGenerator;