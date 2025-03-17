import { createContext, useContext, useState } from "react";
import laptop from "../Assets/Products/Asus ROG Strix G16 (2023) Gaming laptop  just in love🙂.jpg"
import Shoes from "../Assets/Products/NEW BALANCE 480 Shoes - WHT_GREEN _ Tillys.jpg"
import Applephone from "../Assets/Products/Iphone 16.jpg"
import AdidasHoodie from "../Assets/Products/Sudadera Adidas Original color blanco franjas negras en el torso Talla M.jpg"
import Earphone from "../Assets/Products/True Wireless in Ear Earbuds.jpg"
const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "New Balance Shoes", category: "Shoes", price: 120, stock: 20, image: Shoes },
        { id: 2, name: "Adidas Hoodie", category: "Clothing", price: 60, stock: 5, image: AdidasHoodie },
        { id: 3, name: "Apple Phone", category: "Electronics", price: 250, stock: 12, image: Applephone },
        { id: 4, name: "Gaming Laptop", category: "Electronics", price: 1200, stock: 3, image: laptop },
        { id: 5, name: "Wireless Earbuds", category: "Accessories", price: 90, stock: 15, image: Earphone },
    ]);

    // إضافة عنصر جديد
    const addItem = (item) => {
        setProducts((prevProducts) => [...prevProducts, item]);
    };

    // تعديل عنصر موجود
    const modifyItem = (updatedItem) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === updatedItem.id ? { ...product, ...updatedItem } : product
            )
        );
    };

    // حذف عنصر من القائمة
    const deleteItem = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addItem, modifyItem, deleteItem }}>
            {children}
        </ProductContext.Provider>
    );
};

// هوك لاستخدام البيانات في المكونات الأخرى
export const useProd = () => useContext(ProductContext);
