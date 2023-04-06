<template>
    <HeaderView />
    <h1>Home Page</h1>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
export default {
    name: 'HomeView',
    components: {
        HeaderView
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style></style>