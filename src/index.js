import React from 'react';
import domElements from './utils/domElements';
import css from './utils/css';
import stylesKeyManager from './utils/stylesKeyManager';

function domElemntsGenerator() {
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            const { classNames } = stylesKeyManager.manageStyles(styles);
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNames }, children);
        };
    });
    return components;
}

export default domElemntsGenerator();