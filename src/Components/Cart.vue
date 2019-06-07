<template>
  <div>
    <div v-for="product in cartList">
      <h2>{{product.name}}</h2>
      <h4>{{product.price}}</h4>
      <div>
        <button v-on:click="updateQuantity(product,-1)">-</button>
        <span>{{product.selectedAmmount}}</span>
        <button v-on:click="updateQuantity(product,1)">+</button>
      </div>
      <button v-on:click="removeProduct(product)">Remove from cart</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      cartList: {
        type:Array,
      },
    },
    methods: {
      updateQuantity(product,num){
        if(product.selectedAmmount > 0 || num > 0) this.$emit('updateQuantity',{
          product:product,
          by:num
        });
      },
      removeProduct(p){
        this.$emit('removeProduct',p);
      }
    }
  }
</script>
<style>

</style>
