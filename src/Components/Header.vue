<template>
  <header>
    <div class="header-container">

      <div>
        <div class="title"> {{title}}</div>
        <span id="sub">with View.js</span>

      </div>
      <ul>
        <li v-bind:class="[cartList.length > 0 ? 'cart-filled': '']" class="cart"><router-link to="/cart"><img width="30px" src="../assets/cart-outline.svg"/></router-link></li>
      </ul>
    </div>
  </header>
</template>
<script>
  export default {
    props:{
      title:{
        type:String
      },
      cartList: {
        type: Array
      }
    }
  }
</script>
<style>
  header {
    position: fixed;
    width: 100%;
    background-color: #ff6753;
    top: 0;
    left: 0;
    font-size: 1rem;
  }
  .header-container{
    margin: auto;
    max-width: 1200px;
    padding: .5em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .title{
    font-size: 2em;
    color: #fff;
  }
  #sub::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    margin-top: .6em;
    z-index: -1;
    background-color: #3eaf7c;
  }
  #sub{
    z-index: 1;
    position: relative;
    color: #333;

  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 1em;
    list-style: none;
    position: relative;
  }
  li {
    color: #fff;
    position: relative;
  }
  .cart-filled::before {
    content: '';
    width: 10px;
    top: 1px;
    right: 0;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
    z-index: 1;
  }

  .cart-filled {
    transition: all .3s ease;
  }
  .cart {
    /*background-image: url("../assets/cart-outline.svg");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
</style>
