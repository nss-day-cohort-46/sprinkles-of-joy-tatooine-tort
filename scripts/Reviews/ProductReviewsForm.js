
import { getProducts, useProducts } from '../products/ProductProvider.js'
import { savedReview } from './ProductReviewProvider.js'

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("showNewReviewForm", customEvent => {
    // debugger
    productReviewForm()
})

const renderForm = (productsArray) => {
    const stringOfProductOptions = productsArray.map(product => `<option value="${product.id}">${product.name}</option>`)
    contentTarget.innerHTML = `
                <label for="review-dropdown">Leave a Review for: </label>
                <select id="review--product" class="reviewProduct">
                    <option value="0">Please select a product to review</option>
                    ${stringOfProductOptions.join("")}
                </select>

                <label for="review-product">Review Product</label>
                <input type="text" id="review--product">
            
                <label for="review-body">Review: </label>
                <input type="text" id="review--body">
            
                <label for="review-rating">Rating: </label>
                <input type="review" id="review--rating">


            <button id="save--review">Leave a Review</button>
    `
}


export const productReviewForm = () => {
    getProducts()
        .then(() => {
            const productsArray = useProducts()
            renderForm(productsArray)
        })
}

