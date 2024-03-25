document.addEventListener('DOMContentLoaded', function () {
  const role = document.querySelector('.role').dataset.roleUser
  const addProductBtn = document.querySelectorAll('.nav-btn-create-product')
  if (role === 'USER') {
    addProductBtn.forEach(function (button) {
      button.style.display = 'none'
    })
  }
})
