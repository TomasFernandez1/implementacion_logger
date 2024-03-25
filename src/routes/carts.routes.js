import RouterClass from './router.js'
import CartsController from '../controllers/carts.controller.js'

const {
  addProductToCart,
  deleteAllProductsCart,
  deleteProductCart,
  getCart,
  getCarts,
  updateCart,
  updateQuantityProductCart,
  purchase
} = new CartsController()

export default class cartRouter extends RouterClass {
  init() {
    // Init service
    // Cart view
    this.get('/:cid', ['USER', 'ADMIN'], getCart)

    // Carts view
    this.get('/', ['ADMIN'], getCarts)

    // Add a product to a cart
    this.post('/:cid/products/:pid', ['USER'], addProductToCart)

    // Update cart
    this.put('/:cid', ['USER', 'ADMIN'], updateCart)

    // Update quantity of a product in the cart
    this.put('/:cid/products/:pid', ['USER', 'ADMIN'], updateQuantityProductCart)

    // Delete a product from the cart
    this.delete('/:cid/products/:pid', ['USER', 'ADMIN'], deleteProductCart)

    // Delete all the products from the carts
    this.delete('/:cid', ['USER', 'ADMIN'], deleteAllProductsCart)

    this.post('/:cid/purchase', ['USER'], purchase)
  }
}
