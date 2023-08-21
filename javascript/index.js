// define all global variable
const totalPrice = document.getElementById("total-price")
const cupponInput = document.getElementById("cuppon-input")
const applyBtn = document.getElementById("apply")
const total = document.getElementById("total")
const discountElement = document.getElementById("discount")
const cartItems = document.getElementById("cart-items")
const makePurchasebtn = document.getElementById("make-purchase")

// copy promocode to click promocode button
document.getElementById("promocode-btn").addEventListener("click", function() {
    // Get the text inside the button
    var buttonText = this.innerText;
    
    // Create a temporary textarea element to copy the text
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = buttonText;
    document.body.appendChild(tempTextarea);
    
    // Select the text in the textarea and copy it
    tempTextarea.select();
    document.execCommand("copy");
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  });

// add to cart to onclick card
function addToCart(element){
  const cartItemName = element.querySelector(".font-semibold").innerText
  const cartItem = document.createElement('h6')
  const cartItemPrice = element.querySelector("p.text-gray span").innerText
  cartItem.innerText = `${cartItems.childElementCount+1} . ${cartItemName}`
  cartItem.classList.add("font-medium")
  cartItems.appendChild(cartItem)
  totalPrice.innerText = (parseFloat(totalPrice.innerText) + parseFloat(cartItemPrice)).toFixed(2)
  total.innerText = totalPrice.innerText
  if(parseFloat(totalPrice.innerText) > 0){
    makePurchasebtn.disabled = false
  }
  if(parseFloat(totalPrice.innerText) >= 200 && cupponInput.value === "SELL200"){
    applyBtn.disabled = false
  }
}

// calculate discount and total
applyBtn.addEventListener("click", function(){
  const discountPrice = (parseFloat(totalPrice.innerText) * 20) / 100
  discountElement.innerText = discountPrice.toFixed(2)
  total.innerText = (parseFloat(totalPrice.innerText) - parseFloat(discountPrice)).toFixed(2)
})

// clear all price and cart item
document.getElementById("go-home").addEventListener("click", function(){
  totalPrice.innerText = 0.00
  discountElement.innerText = 0.00
  total.innerText = 0.00
  applyBtn.disabled = true
  makePurchasebtn.disabled = true
  cartItems.innerHTML = ''
})

