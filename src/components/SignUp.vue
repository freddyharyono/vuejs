<template>
    <img class="logo" src="@/assets/logo.png" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="username" />
        <input type="password" v-model="password" placeholder="password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>



<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                username: this.username,
                password: this.password
            });

            console.warn(result);
            if (result.status == 201) {
                alert("data created");
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'HomeView' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomeView' })
        }
    }
}
</script>

<style></style>