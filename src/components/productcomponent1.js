// components/ProductComponent.js
import React from 'react';

const ProductComponent1 = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-opacity-0">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0" style={{ cursor: 'auto' }}>
            
            {/* Use the title prop for the <h1> element */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
            {/* Use the description prop for the <p> element */}
            <p className=" text-gray-700 leading-relaxed">{description}</p>
            {/* ... (the rest of your JSX structure) ... */}
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={imageSrc}
            style={{ cursor: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent1;

