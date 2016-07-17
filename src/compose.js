export default (...funcs) => {
    if (!funcs.length) {
        return (arg) => arg;
    }

    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);

    return (...args) => rest.reduceRight((composed, func) => func(composed), last(...args));
};
