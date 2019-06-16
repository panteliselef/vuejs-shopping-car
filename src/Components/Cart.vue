<template>
  <div class="product-list">
    <div v-if="cartList.length===0">No items in cart</div>
    <div class="product" v-for="product in cartList" v-bind:key="product.name">
      <div style="display: flex; justify-content: space-between">
        <div class="product-name">{{product.name}}</div>
        <div class="product-price">{{product.price}}</div>
      </div>
      <div style="display: flex; justify-content: space-between">
        <button class="btn-remove" v-on:click="removeProduct(product)">Remove from cart</button>
        <div>
          <button class="btn-quantity" v-on:click="updateQuantity(product,-1)">-</button>
          <span>{{product.selectedAmmount}}</span>
          <button class="btn-quantity" v-on:click="updateQuantity(product,1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartList: {
      type: Array
    }
  },
  methods: {
    updateQuantity(product, num) {
      if (product.selectedAmmount === 1) this.removeProduct(product)
      else{
        if (product.selectedAmmount > 0 || num > 0)
          this.$emit("updateQuantity", {
            product: product,
            by: num
          });
      }
      
    },
    removeProduct(p) {
      this.$emit("removeProduct", p);
    }
  }
};
</script>
<style>
.btn-remove {
  outline: none;
  cursor: pointer;
  appearance: none;
  border: none;
  font-size: .9rem;
  color: #fff;
  text-transform: uppercase;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #FF3030;
  transition: 0.2s all ease-out;
}
.btn-remove:hover {
  /* background-color: #fff1ef; */
}
.btn-quantity {
    outline: none;
  cursor: pointer;
  appearance: none;
  border: none;
  font-size: .9rem;
  color: #333;
  text-transform: uppercase;
  /* padding: 0.5rem; */
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: #ffc0b6;
  transition: 0.2s all ease-out;
}
</style>
