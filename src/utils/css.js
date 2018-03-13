
import { createTagStyle, stylesKeyManager } from './styleTags';
import addCSSRule from './addCSSRule';

export default function css() {
    const el = createTagStyle();
    const selectorTexts = Object.keys(el.sheet.cssRules).map(sheetKey => el.sheet.cssRules[sheetKey].selectorText);
    Object.keys(stylesKeyManager)
        .forEach((key) => {
            Object.keys(stylesKeyManager[key])
                .forEach((subKey) => {
                    if (selectorTexts.indexOf(`.${stylesKeyManager[key][subKey]}`) === -1) {
                        addCSSRule(el, `.${stylesKeyManager[key][subKey]}`, `${key}: ${subKey}`);
                    }
            });
        });
}