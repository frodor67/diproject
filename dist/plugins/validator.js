class validator {
    constructor({ selector, pattern, method }) {
        this.selector,
        this.pattern,
        this.method;
    }

    showError(elem) {

    }

    showSuccess(elem) {

    }

    applyStyle() {
        const style = document.createElement('style');

        document.head.appendChild(style);
    }
}
