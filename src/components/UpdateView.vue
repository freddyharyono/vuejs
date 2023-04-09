<template>
    <HeaderView />
    <h1>Update</h1>
    <form class="update">
        <label for="nama" class="update-nama">Update Nama : </label><br><br>
        <input type="text" name="name" placeholder="nama" v-model="test.name">
        <label for="alamat" class="update-alamat">Update Alamat : </label><br><br>
        <input type="text" name="contact" placeholder="alamat" v-model="test.contact">
        <label for="limitkredit" class="update-limitkredit">Update Limit Kredit : </label><br><br>
        <input type="text" name="address" placeholder="limit kredit" v-model="test.address">
        <button type="button" v-on:click="editTest">Update Test</button>
    </form>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import axios from 'axios'
export default {
    name: 'UpdateView',
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
        async editTest(){
            console.warn(this.test)
            const result = await axios.put('http://localhost:3000/test/'+this.$route.params.id,{
                name:this.test.name,
                contact:this.test.contact,
                address:this.test.address,
            })
            if(result.status==200){
                this.$router.push({name:'HomeView'})
            }
            console.warn("result", result)
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:3000/test/'+this.$route.params.id) 
        console.warn(result.data)
        this.test=result.data
    }
}
</script>

<style>
.update-nama{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 110px;
}

.update-alamat{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 105px;
}

.update-limitkredit{
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    border-radius: 5px;
    padding: 5px; 
    margin-right: 65px;
}
</style>