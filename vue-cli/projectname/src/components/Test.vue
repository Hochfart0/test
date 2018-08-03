<template>
    <div>
        <span>这是一个尝试</span>
        <router-link to="/test/subTest1">subTest1</router-link>
        <router-link to="/test/subTest2">subTest2</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1000
            }
        },
    }
</script>

<style scoped>

</style>