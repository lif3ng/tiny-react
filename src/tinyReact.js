class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(k, v) {
        this.root[k] = v
    }
    appendChild(child) {
        this.root.appendChild(child)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor(text) {
        this.root = document.createTextNode(text)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export const tinyReact = {
    createElement(type, attrs = {}, ...children) {
        let element
        if (typeof type === 'string') {
            element = new ElementWrapper(type)
        } else {
            element = new type
        }
        for (let key in attrs) {
            debugger
            element.setAttribute(key, attrs[key])
        }
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child)
            }
            child.mountTo(element)
        }
        return element
    },
    render(element, target) {
        element.mountTo(target)

    }
}

export class Component {
    constructor() {
        this.root = this.render()
    }
    appendChild(child) {
        this.root.appendChild(child)
    }
    mountTo(parent) {
        this.root.mountTo(parent)
    }
}