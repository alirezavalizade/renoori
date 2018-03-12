import React from 'react';
import domElements from './utils/domElements';

const stylesKeyManager = {};

function domElemntsGenerator(){
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles) => {

            console.log(styles);

            return ({ ...props, children }) => React.createElement(el, props, children);
        };
    });
    return components;
}

export default domElemntsGenerator;