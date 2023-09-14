// components/ProductComponent.js
import React from 'react';

const ProductComponent = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-opacity-0">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={imageSrc}
            style={{ cursor: 'auto' }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ cursor: 'auto' }}>
           
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{ cursor: 'auto' }}>
              {title}
            </h1>
            <p className="text-gray-700 leading-relaxed">
  {description}
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;