import randomString from './generateRandomString';
import { createTagStyle } from './styleTags';
import addCSSRule from './addCSSRule';

class stylesKeyManagerClass {
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
        addCSSRule(this.el, `.${value}`, `${key}: ${subKey}`);
    }

    manageStyles(styles = {}) {
        let classNames = '';
        Object.keys(styles).forEach((styleKey) => {
            if (!this.getKeys[styleKey]) {
                this.setKeys(styleKey, styles[styleKey], randomString());
            } else if (!this.getKeys[styleKey][styles[styleKey]]) {
                this.setKeys(styleKey, styles[styleKey], randomString());
            }
            // TODO: will change this line to get valid CSS
            if (classNames === '') {
                classNames = `${stylesKeyManager.getKeys[styleKey][styles[styleKey]]}`;
            } else {
                classNames = `${classNames} ${stylesKeyManager.getKeys[styleKey][styles[styleKey]]}`;
            }
        });
        return {
            classNames
        };
    }
}

const stylesKeyManager = new stylesKeyManagerClass();

export default stylesKeyManager;
