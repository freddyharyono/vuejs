<template>
    <HeaderView />
    <h1>Add</h1>
    <form class="add">
        <label for="nama" class="label-nama">Tambahkan Nama : </label><br><br>
        <input type="text" name="name" placeholder="nama" v-model="test.name">
        <label for="alamat" class="label-alamat">Tambahkan Alamat : </label><br><br>
        <input type="text" name="contact" placeholder="alamat" v-model="test.contact">
        <label for="limitkredit" class="label-limitkredit">Tambahkan Limit Kredit : </label><br><br>
        <input type="text" name="address" placeholder="limit kredit" v-model="test.address">
        <button type="button" v-on:click="addTest">Add new test</button>
    </form>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import axios from 'axios'
export default {
    name: 'AddView',
    components: {
        HeaderView
    },
    data(){
        return{
            test : {
                name: '',
                contact:'',
                address:''
            }
            
        }
    },
    methods:{
        async addTest(){
            console.warn(this.test)
            const result = await axios.post('http://localhost:3000/test',{
                name:this.test.name,
                contact:this.test.contact,
                address:this.test.address,
            })
            if(result.status==201){
                this.$router.push({name:'HomeView'})
            }
            console.warn("result", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style>
.label-nama{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 70px;
}

.label-alamat{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 65px;
}

.label-limitkredit{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 25px;
}

</style>