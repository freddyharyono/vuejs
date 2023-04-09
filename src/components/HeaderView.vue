<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add</router-link>
        <a v-on:click="logout">LogOut</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderView',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: "LoginView"})
        },
    },
}
</script>

<style>
.nav {
    background-color: crimson;
    overflow: hidden;
}

.nav a {
    float: left;
    color: rgb(236, 210, 215);
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #c9e8c5;
    color: #9c7e7e;
}
</style>