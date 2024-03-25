document.addEventListener('DOMContentLoaded', function () {
  const role = document.querySelector('.role').dataset.roleUser
  const deleteProductButtons = document.querySelectorAll('.deleteProductBtn')
  if (role === 'USER') {
    deleteProductButtons.forEach(function (button) {
      button.style.display = 'none'
    })
  }
  deleteProductButtons.forEach(function (button) {
    button.addEventListener('click', async function () {
      try {
        const productId = button.getAttribute('data-product-id')
        const productTitle = this.closest('div').querySelector('.product-title').getAttribute('data-product-title')

        await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        Toastify({
          text: `The product ${productTitle} was deleted`,
          duration: 3000,
          close: true,
          gravity: 'top',
          position: 'right',
          stopOnFocus: true,
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          onClick: function () {}
        }).showToast()
      } catch (error) {
        console.error(error)
      }
    })
  })
})

const addToCartButtons = document.querySelectorAll('.addToCartBtn')
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', async function () {
    try {
      const productId = button.getAttribute('data-product-id')
      const cartId = document.querySelector('.idCart').dataset.cartId
      const productTitle = this.closest('div').querySelector('.product-title').getAttribute('data-product-title')

      await fetch(`/api/carts/${cartId}/products/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      Toastify({
        text: `The product ${productTitle} was added to your cart `,
        duration: 3000,
        destination: `/api/carts/${cartId}`,
        newWindow: false,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)'
        },
        onClick: function () {}
      }).showToast()
    } catch (err) {
      console.log(err)
    }
  })
})
