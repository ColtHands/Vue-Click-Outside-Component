# `vue-click-outside-component`
This is a simple very small directive to detect clicks ouside **component** _not element_ on which this directive applied.

For clickin outside **element** inside the _component_ check [Vue-Click-Outside-Element](https://github.com/ColdHandz/Vue-Click-Outside-Element)

or search npm for `vue-click-outside-element`

## Install

`npm i vue-click-outside-component`

or

`yarn add vue-click-outside-component`

## Usage

Apply like basic directive.

It accepts only functions that are present inside `methods` object.

`<div v-click-outside-component="someRandomFunction">Hello World</div>`

## Examples

### This will work since its attached to root element
```
<template>
    <div v-click-outside-component="close">
        <p v-if="show">if you click button this text will dissappear</p>
        <p>but the button does not have any events on it</p>
    </div>
</template>

<script>
import Vue from 'vue'
import VueClickOutsideComponent from 'VueClickOutsideComponent'

Vue.use(VueClickOutsideComponent)

export default {
    data() { return { showButton: true } },
    methods: {
        close(el){
            this.showButton = false
        }
    }
}
</script>
```

### This will not work since its not attached to existing dom node.
```
<template v-click-outside-component="close">
    <div>
        <p v-if="show">if you click button this text will dissappear</p>
        <p>but the button does not have any events on it</p>
    </div>
</template>
```

### This will work but will trigger 'close' fn in the same scope and will not get passed inside the component. For that, use `vue-click-outside-element`.
```
<template>
    <div>
        <myComponent v-click-outside-component="close" />
        <p v-if="show">if you click button this text will dissappear</p>
        <p>but the button does not have any events on it</p>
    </div>
</template>

<script>
import Vue from 'vue'
import VueClickOutsideComponent from 'VueClickOutsideComponent'
import myComponent from './myComponent.vue'

Vue.use(VueClickOutsideComponent)

export default {
    components: { myComponent }
    data() { return { showButton: true } },
    methods: {
        close(el){
            this.showButton = false
        }
    }
}
</script>
```


## Contrib

* Submit issue, any bugs, issues features are accepted.
* Clone, pull, play with example, test, submit merge request
* Any feedback would be greatly appreciated.

## Roadmap

* More tests with usability and browser compatibility
* Strong typing with typescript
* Supporting and tesing with `Vue 3`
* Add CodeSandbox playground
