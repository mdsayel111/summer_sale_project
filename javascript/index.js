// define all global variable
const totalPrice = document.getElementById("total-price")
const cupponInput = document.getElementById("cuppon-input")
const applyBtn = document.getElementById("apply")
const total = document.getElementById("total")
const discountElement = document.getElementById("discount")
const cartItems = document.getElementById("cart-items")

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
    const makePurchasebtn = document.getElementById("make-purchase")
    makePurchasebtn.disabled = false
  }
}

// enable apply button
cupponInput.addEventListener("input", function(){
  if(parseFloat(totalPrice.innerText) >= 200 && cupponInput.value === "SELL200"){
    applyBtn.disabled = false
  }
})

// calculate discount and total
applyBtn.addEventListener("click", function(){
  const discountPrice = (parseFloat(totalPrice.innerText) * 20) / 100
  discountElement.innerText = discountPrice.toFixed(2)
  total.innerText = (parseFloat(totalPrice.innerText) - parseFloat(discountPrice)).toFixed(2)
})

// clear all price and cart item
document.getElementById("go-home").addEventListener("click", function(){
  document.getElementById("cart-section").innerHTML = `                <div class="cuppon mb-6">
  <h3 class="font-semibold mb-4">Have coupon?</h3>
  <div class="cuppon-apply-feild flex ">
      <input id="cuppon-input" type="text" class="border-[1px] border-[#11111126] h-[49px] w-[70%] text-[1rem]" placeholder="Coupon code">
      <button id="apply" class="btn btn-primary py-4 px-6 hover:bg-primary rounded-e-2xl rounded-s-none" disabled>Apply</button>
  </div>
</div>
<div class="cart">
  <div id="cart-items" class="cart-item">
  </div>
  <div class="cart-calculation my-6 space-y-4">
      <h3>Total price : <p class="inline text-gray"><span id="total-price">0.00</span>tk</p></h3>
      <h3>discount : <p class="inline text-gray"><span id="discount">0.00</span>tk</p></h3>
      <h3>Total : <p class="inline text-gray"><span id="total">0.00</span>tk</p></h3>
  </div>
  <div class="purches-btn">
      <button id="make-purchase" onclick="my_modal_1.showModal()" class="btn btn-primary w-[100%] py-3 hover:bg-primary" disabled>Make Purchase</button>
      <dialog id="my_modal_1" class="modal">
          <form method="dialog" class="modal-box">
            <div class="modal-item text-center">
              <img src="./images/congo.png" alt="" class="mx-auto">
              <h3 class="font-bold text-lg">Congratulations</h3>
            <p class="py-4 text-gray">Your Purchase the product</p>
            <div class="modal-action justify-center">
              <!-- if there is a button in form, it will close the modal -->
              <button id="go-home" class="btn bg-primary hover:bg-primary py-2 ">Go Home</button>
            </div>
            </div>
          </form>
        </dialog>
  </div>
</div>`
})

