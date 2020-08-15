module.exports = {
    install(Vue) {
        Vue.directive('click-outside-component', {
            bind(el, binding, vnode) {
                el.clickOutsideEvent = function (event) {
                    if (!(vnode.context.$el == event.target || vnode.context.$el.contains(event.target))) {
                        vnode.context[binding.expression](event)
                    }
                }
                document.body.addEventListener('click', el.clickOutsideEvent)
            },
            unbind(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent)
            }
        })
    }
}