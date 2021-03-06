import randomString from './generateRandomString';
import { createTagStyle } from './styleTags';
import addCSSRule from './addCSSRule';

class stylesManagerClass {
    keys = {};
    el = createTagStyle();
    
    get getKeys() {
        return this.keys;
    }
    
    setKeys(key, subKey, value) {
        if (!this.keys[key]) {
            this.keys[key] = {};
        }
        this.keys[key][subKey] = value;
        this.setStyleToRule(key, subKey, value);
        this.setStyleObjectToElement();
    }

    setStylesToKeys(styles = {}) {
        let classNames = '';
        Object.keys(styles).forEach((styleKey) => {
            if (!this.getKeys[styleKey]) {
                this.setKeys(styleKey, styles[styleKey], randomString());
            } else if (!this.getKeys[styleKey][styles[styleKey]]) {
                this.setKeys(styleKey, styles[styleKey], randomString());
            }
            classNames = `${classNames !== '' ? `${classNames} ` : ''}${this.getKeys[styleKey][styles[styleKey]]}`;
        });
        
        return { classNames };
    }

    setStyleToRule(key, subKey, value) {
        addCSSRule(this.el, `.${value}`, `${key}: ${subKey}`);
    }

    setStyleObjectToElement() {
        this.el.innerHTML = this.templateCss();
    };
    
    templateCss() {
        let rules = '';
        Object.keys(this.el.sheet.cssRules).forEach((item) => {
            rules +=
                `
                ${this.el.sheet.cssRules[item].cssText}
                `;
        });
        return rules;
    }
}

const stylesManager = new stylesManagerClass();

export default stylesManager;
