export const stylesKeyManager = {};

export const createTagStyle = () => {
    let el = document.querySelectorAll('[data-renoori]')[0];
    if (!el) {
        el = document.createElement('style');
        el.type = 'text/css';
        el.appendChild(document.createTextNode(""));
        el.setAttribute('data-renoori', '');
        document.head.appendChild(el);
    }
    return el;
};

export const createBrowserTag = ({ el }) => {
    const sheet = el.sheet;
    console.log('sheet' , sheet);

};