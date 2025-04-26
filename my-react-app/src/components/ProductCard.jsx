
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiHeart, HiOutlineShoppingCart } from "react-icons/hi";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  
  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Here you would also update the favorites in your backend/context
  };
  
  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart functionality would be implemented here
    console.log("Adding to cart:", product);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative pb-[56.25%] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <button 
            onClick={toggleFavorite}
            className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full"
          >
            {isFavorite ? (
              <HiHeart className="text-red-500" size={20} />
            ) : (
              <HiOutlineHeart className="text-gray-700" size={20} />
            )}
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            
            <button
              onClick={addToCart}
              className="flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              <HiOutlineShoppingCart size={18} />
              <span className="text-sm">Add</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
