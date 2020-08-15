<template>
    <div v-click-outside-component="close">
        <p v-if="show">if you click button this text will dissappear</p>
        <p>but the button does not have any events on it</p>
    </div>
</template>

<script>
export default {
    data() {
        return { show: true }
    },
    methods: {
        close(e){
            this.show = !this.show
        }
    }
}
</script>