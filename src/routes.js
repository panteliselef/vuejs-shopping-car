import Products from './Components/Products'
import Cart from './Components/Cart'


export default [
  {path:'/', component:Products},
  {path:'/cart' ,name:'cart', component:Cart},
];
