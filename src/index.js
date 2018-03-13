import React from 'react';
import domElements from './utils/domElements';
import stylesManager from './utils/stylesManager';

export default (() => {
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            const { classNames } = stylesManager.setStylesToKeys(styles);
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNames }, children);
        };
    });
    return components;
})();