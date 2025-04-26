
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineShoppingCart, HiOutlineTrash, HiOutlineHeart } from "react-icons/hi";

const FavoritesPage = () => {
  const { favorites, toggleFavorite, addToCart } = useCart();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Favorites</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="text-gray-400 mb-4">
            <HiOutlineHeart className="inline-block w-16 h-16" />
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Your favorites list is empty</h2>
          <p className="text-gray-600 mb-8">
            You haven't added any products to your favorites yet. Browse our products and click the heart icon to add items to this list.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <img 
                    src={product.image || "/lovable-uploads/0aff481a-0d47-4e15-901d-e23ea4224306.png"} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                  />
                </Link>
                <button
                  onClick={() => toggleFavorite(product)}
                  className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-90 rounded-full text-red-500 hover:bg-red-50 transition"
                  aria-label="Remove from favorites"
                >
                  <HiOutlineTrash size={20} />
                </button>
              </div>
              
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h2 className="text-lg font-medium text-gray-900 mb-1 hover:text-purple-600">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description || "Cutting-edge hardware component optimized for high-performance computing tasks."}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md transition"
                  >
                    <HiOutlineShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
