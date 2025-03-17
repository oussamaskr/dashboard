import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faExclamationTriangle, faShoppingCart, faTags ,faClose} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Styles/productstyle.css"
import { useProd } from '../Contexts/ProductsProvider';
import ProductsTable from '../Conponents/Tables/ProductsTable';
function Product() {
    const [modifcontainer,setModifContainer] = useState(false);
    const [modifProduct, setModifProduct] = useState({});
    const {addItem} = useProd();
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } }
      };
  return (
    <div className='product-container-page'>
   
 <div className="product-overview">
      {/* Total Products */}
      <motion.div className="overview-card-prod total" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
        <FontAwesomeIcon icon={faBox} className="card-icon" />
        <div>
          <h3>500</h3>
          <p>Total Products</p>
        </div>
      </motion.div>

      {/* Out of Stock */}
      <motion.div className="overview-card-prod out-of-stock" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
        <FontAwesomeIcon icon={faExclamationTriangle} className="card-icon" />
        <div>
          <h3>25</h3>
          <p>Out of Stock</p>
        </div>
      </motion.div>

      {/* Top Selling Product */}
      <motion.div className="overview-card-prod top-selling" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
        <FontAwesomeIcon icon={faShoppingCart} className="card-icon" />
        <div>
          <h3>Nike Air Max</h3>
          <p>300 Sales</p>
        </div>
      </motion.div>

      {/* Categories Breakdown */}
      <motion.div className="overview-card-prod categories" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
        <FontAwesomeIcon icon={faTags} className="card-icon" />
        <div>
          <h3>Men: 200 | Women: 150 | Kids: 150</h3>
          <p>Category Breakdown</p>
        </div>
      </motion.div>
    </div>
    <div className='btn-add-product' >
            <button type="button" className="button" onClick={() => setModifContainer(true)}>
          <span className="button__text">Add Item</span>
          <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </button>

            </div>

    <ProductsTable  />






    <div className={`add-container-main ${modifcontainer ? "show" : "hidden"}`}> 
      <div className="add-modal-content">
        <FontAwesomeIcon className="close-icon" icon={faClose} onClick={() => setModifContainer(false)} />
        <div className="add-container">
          <h2>Add Product</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission here (e.g., API call)
            console.log("Form submitted with:", modifProduct);
            setModifContainer(false)
            addItem(modifProduct)
          }}>
            <div className="form-group">
              <label htmlFor="product-name">Product Name:</label>
              <input
                id="product-name"
                type="text"
                onChange={(e) => setModifProduct({ ...modifProduct, name: e.target.value })}
                required
                placeholder="Enter product name"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="product-price">Product Price:</label>
              <input
                id="product-price"
                type="number"
                onChange={(e) => setModifProduct({ ...modifProduct, price: e.target.value })}
                required
                placeholder="Enter product price"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="product-stock">Product In Stock:</label>
              <input
                id="product-stock"
                type="number"
                onChange={(e) => setModifProduct({ ...modifProduct, stock: e.target.value })}
                required
                placeholder="Enter stock quantity"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="product-category">Product Category:</label>
              <select
                id="product-category"
                onChange={(e) => setModifProduct({ ...modifProduct, category: e.target.value })}
                required
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories	</option>
                {/* Add more categories as needed */}
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="product-description">Product Description:</label>
              <textarea
                id="product-description"
                onChange={(e) => setModifProduct({ ...modifProduct, description: e.target.value })}
                placeholder="Enter product description"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="product-image">Product Image:</label>
              <input
                id="product-image"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => setModifProduct({ ...modifProduct, image: e.target.files[0] })}
              />
            </div>
    
            <button type="submit" className="submit-button">
              Modify
            </button>
          </form>
        </div>
      </div>
    </div>















    </div>
  )
}

export default Product