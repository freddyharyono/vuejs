<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add</a>
        <a href="#">Update</a>
        <a href="#">LogOut</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderView'
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