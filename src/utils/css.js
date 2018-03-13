
import { createTagStyle } from './styleTags';
import stylesKeyManager from './stylesKeyManager';
import addCSSRule from './addCSSRule';

export default function css() {
    const el = createTagStyle();
    const cssTexts = Object.keys(el.sheet.cssRules).map(sheetKey => el.sheet.cssRules[sheetKey].cssText);
    Object.keys(stylesKeyManager.getKeys)
        .forEach((key) => {
            Object.keys(stylesKeyManager.getKeys[key])
                .forEach((subKey) => {
                    if (cssTexts.indexOf(`.${stylesKeyManager.getKeys[key][subKey]}`) === -1) {
                        addCSSRule(el, `.${stylesKeyManager.getKeys[key][subKey]}`, `${key}: ${subKey}`);
                    }
            });
        });
}