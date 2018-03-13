import React from 'react';
import domElements from './utils/domElements';
import stylesManager from './utils/stylesManager';
import classNamesGen from './utils/classNames';

export default (() => {
    const components = {};
    domElements.forEach((el) => {
        components[el] = (styles = {}) => {
            const { classNames } = stylesManager.setStylesToKeys(styles);
            return ({ ...props, children }) => React.createElement(el,{ ...props, className: classNamesGen(props, classNames) }, children);
        };
    });
    return components;
})();