import { useEffect, useState } from "react";

function ProductDescription() {
  const [product, setProducts] = useState({"id":0, "title":"", "price":0, "description":"", "category":"", "image":"", "rating":{"rate":0, "count":0}});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then(response => response.json())
      .then(data => setProducts(data)).catch(()=>console.error("Error al consumir la API"))
  });

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2 shadow-md text-gray-900 dark:text-white border border-black">
        <img src={product.image} className="w-40 h-auto mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">${product.price}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-right">Categoría: {product.category}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-right">Valoración: {product.rating.rate} ({product.rating.count} Opiniones)</p>
      </div>
    </div>
  );
}

export default ProductDescription;
