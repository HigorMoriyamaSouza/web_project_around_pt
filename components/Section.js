/*
 * HANDLES ELEMENTS RENDERING ON PAGE
 */
export default class Section {
    constructor({ items, renderer }, displayContainerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._displayContainerSelector = document.querySelector(displayContainerSelector);
    }

    addItem(element, prependItem) {
        (prependItem) 
            ? this._displayContainerSelector.prepend(element)
            : this._displayContainerSelector.append(element);
    }

    renderer() {
        this._items.forEach(item  => this._renderer(item));
    }
}