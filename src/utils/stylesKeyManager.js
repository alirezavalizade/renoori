import randomString from './generateRandomString';
import css from './css';

class stylesKeyManagerClass {
    keys = {};

    get getKeys() {
        return this.keys;
    }
    
    setKeys(key, subKey, value) {
        if (!this.keys[key]) {
            this.keys[key] = {};
        }
        this.keys[key][subKey] = value;
        css();
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
