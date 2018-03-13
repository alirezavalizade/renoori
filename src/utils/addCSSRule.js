export default function addCSSRule(el, selector, rules) {
	const sheet = el.sheet;
	let index = sheet.cssRules.length;
	if (index < 0) {
		index = 0;
	}
	if('insertRule' in sheet) {
		sheet.insertRule(selector + " { " + rules + " } ", index);
	} else if('addRule' in sheet) {
		sheet.addRule(selector, rules, index);
	}
}