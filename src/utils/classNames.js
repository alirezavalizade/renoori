export default (props, classNames) => {
    if (!props.className) {
        return classNames;
    }
    return `${props.className} ${classNames}`;
};