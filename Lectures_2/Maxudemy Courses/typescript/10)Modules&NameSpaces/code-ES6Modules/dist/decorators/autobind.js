/**
* @Used _ to avoid error for unused parameters. another way is to set noUnusedParameters to false
*/
export function AutoBind(_target, _methodName, descriptor) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            return descriptor.value.bind(this);
        }
    };
}
//# sourceMappingURL=autobind.js.map