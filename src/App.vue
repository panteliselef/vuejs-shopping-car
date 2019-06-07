<template>
  <div>
    <Header v-bind:cartList="cartList" v-bind:title="title"></Header>
    <router-view
      v-bind:cartList="cartList"
      v-bind:products="productsList"
      v-on:addToCartEvent="addToCart($event)"
      v-on:updateQuantity="updateProductQuantity($event)"
      v-on:removeProduct="removeFromCart($event)">
    </router-view>
  </div>


</template>

<script>
  import Header from './Components/Header'
  import productsList from './assets/products'

  export default {
    components: {
      Header,
    },
    name: 'app',
    data(){
      return {
        cartList:[],
        productsList: productsList,
        title: 'Shopping Cart Web App'
      }
    },
    methods: {
      addToCart(p) {
        console.log(p);
        let items = this.cartList.filter(cartProduct => {
          return cartProduct.name === p.name;
        });
        if (items.length === 0) {
          p.selectedAmmount += 1;
          this.cartList = [...this.cartList, p];
        } else {
          items[0].selectedAmmount += 1;
        }
      },
      removeFromCart(p){
        console.log(this.title);
        this.cartList = this.cartList.filter(cartProduct => {
          return cartProduct.name !== p.name;
        });
      },
      updateProductQuantity(p){
        this.cartList.filter(cartProduct => {
          return cartProduct.name === p.product.name;
        })[0].selectedAmmount += p.by;
      }


    }

  }
</script>
