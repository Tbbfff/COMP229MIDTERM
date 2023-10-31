import React, { useState } from 'react';

const ShopForm = () => {
  const [shopData, setShopData] = useState({
    shopName: '',
    shopDescription: ''
  });

  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productCategory: '',
    productPrice: '',
    productQuantity: ''
  });

  const [showProductForm, setShowProductForm] = useState(false);

  const handleShopInputChange = (e) => {
    const { name, value } = e.target;
    setShopData({ ...shopData, [name]: value });
  };

  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...shopData, [name]: value });
  };

  const handleProductNumInputChange = (e) => {
    const { name, value } = e.target;
    //Numbers only
    const numericValue = value.replace(/[^0-9]/g, '');
    //Positive only
    const newValue = Math.max(parseInt(numericValue, 10), 0);
  
    setProductData({ ...productData, [name]: newValue });
  };

  const handleShopSubmit = (e) => {
    e.preventDefault();
    console.log('Shop submitted:', shopData);
    //Show product form
    setShowProductForm(true);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', productData);
    setProductData({
      productName: '',
      productDescription: '',
      productCategory: '',
      productPrice: '',
      productQuantity: ''
    });
    //Hide product form
    setShowProductForm(false);
  };

  const handleCancelShopForm = () => {
    setShopData({ shopName: '', shopDescription: '' });
    setProductData({
      productName: '',
      productDescription: '',
      productCategory: '',
      productPrice: '',
      productQuantity: ''
    });
    setShowProductForm(false);
  };

  const handleCancelProductForm = () => {
    setProductData({
      productName: '',
      productDescription: '',
      productCategory: '',
      productPrice: '',
      productQuantity: ''
    });
    setShowProductForm(false);
  };

  return (
    <div>
      <h2>New Shop</h2>
      <form onSubmit={handleShopSubmit}>
        <div>
          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={shopData.shopName}
            onChange={handleShopInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="shopDescription">Shop Description:</label>
          <input
            type="text"
            id="shopDescription"
            name="shopDescription"
            value={shopData.shopDescription}
            onChange={handleShopInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancelShopForm}>
            Cancel
          </button>
        </div>
      </form>

      {showProductForm && (
        <div>
          <h2>New Product</h2>
          <form onSubmit={handleProductSubmit}>
            <div>
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={productData.productName}
                onChange={handleProductInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="productDescription">Product Description:</label>
              <input
                type="text"
                id="productDescription"
                name="productDescription"
                value={productData.productDescription}
                onChange={handleProductInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="productCategory">Product Category:</label>
              <input
                type="text"
                id="productCategory"
                name="productCategory"
                value={productData.productCategory}
                onChange={handleProductInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="text"
                id="productPrice"
                name="productPrice"
                value={productData.productPrice}
                onChange={handleProductNumInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="productQuantity">Product Quantity:</label>
              <input
                type="text"
                id="productQuantity"
                name="productQuantity"
                value={productData.productQuantity}
                onChange={handleProductNumInputChange}
                required
              />
            </div>
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCancelProductForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShopForm;
