import React, { useState, useEffect } from "react";
import "./Styles/producttable.css"
import { useProd } from "../../Contexts/ProductsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
/********************************************************************************** */
const ProductsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [stockFilter, setStockFilter] = useState("All");
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    const { products , deleteItem , modifyItem} = useProd();
    const [modifcontainer,setModifContainer] = useState(false);
    const [modifProduct, setModifProduct] = useState();
    console.log(products,modifProduct)
      const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
        const matchesStock = stockFilter === "All" || (stockFilter === "In Stock" ? product.stock > 0 : product.stock === 0);
        return matchesSearch && matchesCategory && matchesStock;
      });
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 800);
          setProductsPerPage(window.innerWidth < 800 ? 4 : 8);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <div className='Products-Table'>
        <div className="filters">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
        <select value={stockFilter} onChange={(e) => setStockFilter(e.target.value)}>
          <option value="All">All Stock</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
      {!isMobile ? (
        <table className="table-products">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th  className="stock-width">Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map(product => (
              <tr key={product.id}>
                <td className="imgage-cell"><img src={product.image} alt={product.name} loading="lazy"/></td>
                <td className="cat-td">{product.name}</td>
                <td className="cat-td">{product.category}</td>
                <td className="price-td">${product.price}</td>
                <td className="stock-width">{product.stock}</td>
                <td className="btn-act">
                  <button className="edit-btn" onClick={()=> {setModifContainer(!modifcontainer)
                    setModifProduct(product)
                  }
                  }>Edit</button>
                  <button onClick={() => deleteItem(product.id)} className="delete-btn">Delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="product-cards">
          {currentProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <div className="actions-btn">
                <button className="edit-btn"  onClick={()=> {setModifContainer(!modifcontainer)
                    setModifProduct(product)
                  }
                  }>Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => setCurrentPage(currentPage + 1)}   disabled={currentPage === totalPages || filteredProducts.length === 0}
>Next</button>
      </div>


      <div className={`edit-container-main ${modifcontainer ? "show" : "hidden"}`}> 
  <div className="edit-modal-content">
    <FontAwesomeIcon className="close-icon" icon={faClose} onClick={() => setModifContainer(false)} />
    <div className="edit-container">
      <h2>Edit Product</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        // Handle form submission here (e.g., API call)
        console.log("Form submitted with:", modifProduct);
        modifyItem(modifProduct)
        setModifContainer(false)
      }}>
        <div className="form-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            id="product-name"
            type="text"
            value={modifProduct?.name || ""}
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
            value={modifProduct?.price || ""}
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
            value={modifProduct?.stock || ""}
            onChange={(e) => setModifProduct({ ...modifProduct, stock: e.target.value })}
            required
            placeholder="Enter stock quantity"
          />
        </div>

        <div className="form-group">
          <label htmlFor="product-category">Product Category:</label>
          <select
            id="product-category"
            value={modifProduct?.category || ""}
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
            value={modifProduct?.description || ""}
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

export default ProductsTable