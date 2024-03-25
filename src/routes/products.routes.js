import RouterClass from './router.js'
import ProductsController from '../controllers/products.controller.js'

const { getProduct, getProducts, deleteProduct, newProduct, updateProduct, createProduct } = new ProductsController()

export default class productsRouter extends RouterClass {
  init() {
    // Create product view
    this.get('/create-product', ['ADMIN'], createProduct)

    // Products view
    this.get('/', ['USER', 'USER_PREMIUM', 'ADMIN'], getProducts)

    // Product view
    this.get('/:pid', ['USER', 'USER_PREMIUM', 'ADMIN'], getProduct)

    // New product endpoint
    this.post('/', ['PUBLIC'], newProduct)

    // Update product endpoint
    this.put('/:pid', ['ADMIN'], updateProduct)

    // Delete product endpoint
    this.delete('/:pid', ['ADMIN'], deleteProduct)
  }
}
