<template>
    <HeaderView />
    <h1>Hello {{ username }}, Home Page</h1>
    <label for="search">Search : </label>
    <input type="text" v-model="search" placeholder="name, address">
    <table border="1"  align="center" style="margin-top: 25px" >
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Limit Kredit</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in filteredTest" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</td>
            <td><button class="update-btn" >
                <router-link :to="'/update/'+item.id">Update</router-link>
            </button>
                <button v-on:click="deleteTest(item.id)" class="delete-button">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import axios from 'axios'
export default {
    name: 'HomeView',
    data(){
        return {
            username:'',
            test:[],
            search: ''
        }
    },
    components: {
        HeaderView
    },
    methods:{
        async deleteTest(id){
            let result = await axios.delete('http://localhost:3000/test/'+id)
            console.warn(result)
            if(result.status==200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
        this.username = JSON.parse(user).username;
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        let result = await axios.get('http://localhost:3000/test')
        console.warn(result)
        this.test=result.data.map(item => ({...item, address: parseFloat(item.address)})); 
        }
    },
    computed: {
    filteredTest() {
        if (this.search) {
            return this.test.filter((item) => {
                return item.name.toLowerCase().includes(this.search.toLowerCase()) || item.contact.toLowerCase().includes(this.search.toLowerCase());
            });
        } else {
            return this.test;
        }
        }
    },
    async mounted() {
        this.loadData()
    },
}
</script>

<style>
    td{
        width: 150px;
        height: auto;
    }
    td#id {
    background-color: rgb(221, 235, 196); /* menambahkan warna background kolom id */
    }
  
  td#name {
    background-color: yellow; /* menambahkan warna background kolom nama */
    }
    .update-btn {
        width: 60px;
        height: 25px;
        padding: 5px;
        margin-right: 10px;
        background: yellow;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .delete-button{
    width: 60px;
    height: 25px;
    border: 1px solid lightblue;
    border-radius: 25px;
    background: crimson;
    color: white;
    }
</style>
