<template>
  <div class="product-list">
    <div class="product" v-for="product in products">
      <div style="display: flex; justify-content: space-between">
        
        <div class="product-name">{{product.name}}</div>
        <div class="product-price">{{product.price}}</div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span class="category">Category: {{product.category}}</span>
        <button class="add-to-cart" v-on:click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      products: {
        type:Array,
      },
    },
    methods: {
      addToCart(product){
        this.$emit('addToCartEvent',product);
      }
    }
  }
</script>
<style>
  .product-list {
    max-width: 500px;
    margin: auto;
    margin-top: 6em;
    width: 100%;
  }
  .product-list .product {
    margin: 1em;
    padding: .7em 1em;
    padding-bottom: .5em;
    border-radius: 7px;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
  }
  .product-list .product-name {
    font-size: 2em;
    text-transform: capitalize;
  }
  .product-list .product-price::after{
    content: "€";
  }
  .product-list .product-price{
    font-size: 3em
  }
  span.category {
    font-size: .7em;
    text-transform: uppercase;
    background-color: #ff6753;
    padding: .3em .8em;
    color: #ffffff;
    border-radius: 10px;
  }

  button.add-to-cart {
    outline: none;
    cursor: pointer;
    appearance: none;
    border: none;
    font-size: 1rem;
    color: #ff6753;
    text-transform: uppercase;
    padding: .8em;
    border-radius: 5px;
    transition: .2s all ease-out;
  }
  button.add-to-cart:hover {
    background-color: #FFF1EF;
  }

</style>
