
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineHeart, HiHeart, HiOutlineShoppingCart, HiOutlineStar, HiStar } from "react-icons/hi";

// Sample product data (in a real app, you would fetch this from an API)
const productData = {
  id: 1,
  name: "Majorana 1",
  description: "MZMs are the building blocks of our qubits, storing quantum information through parity—whether the wire contains an even or odd number of electrons. In conventional superconductors, electrons form into Cooper pairs and move without resistance. Our topoconductors are different here, an unpaired electron is shared between a pair of MZMs.",
  price: 240,
  weight: "20gm",
  category: "Quantum Computing",
  specs: {
    material: "Indium arsenide and aluminum",
    dimensions: "5mm x 5mm x 2mm",
    powerConsumption: "0.5W",
    operatingTemp: "-272°C to -269°C"
  },
  features: [
    "Designed and fabricated with atomic precision",
    "Minimizes defects and ensures stability",
    "Compatible with existing quantum computing infrastructure",
    "Low power consumption",
    "High coherence time"
  ],
  stock: 5,
  rating: 4.7,
  reviewCount: 23,
  images: [
    "/lovable-uploads/0aff481a-0d47-4e15-901d-e23ea4224306.png",
    "/lovable-uploads/ce8073b5-dc34-430e-a096-b960e5123c95.png",
    "/lovable-uploads/4946cd2d-f299-49f7-8b8f-867643a45d91.png"
  ],
  relatedProducts: [
    {
      id: 2,
      name: "Quantum GPU 4090X",
      price: 1299,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 3,
      name: "NeuralCore i9",
      price: 599,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 4,
      name: "Quantum Memory 32GB",
      price: 359,
      image: "https://images.unsplash.com/photo-1592664858773-d4bdc3c20f6d?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ],
  reviews: [
    {
      id: 1,
      user: "Dr. Quantum",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "2023-10-15",
      comment: "Incredible quantum component. The Majorana 1 has significantly improved our research capabilities in topological quantum computing."
    },
    {
      id: 2,
      user: "TechExplorer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      date: "2023-09-28",
      comment: "Great performance for quantum experiments. Minor issues with integration into our existing setup, but overall very satisfied."
    },
    {
      id: 3,
      user: "QuantumResearcher",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      date: "2023-08-19",
      comment: "The stability and coherence time of the Majorana 1 is impressive. Definitely worth the investment for serious quantum computing applications."
    }
  ]
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, isFavorite, toggleFavorite } = useCart();
  const [product] = useState(productData); // In a real app, you would fetch based on id
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const productIsFavorite = isFavorite(product.id);
  
  const handleQuantityChange = (val) => {
    const newQty = quantity + val;
    if (newQty > 0 && newQty <= product.stock) {
      setQuantity(newQty);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to={`/products?category=${product.category}`} className="text-gray-600 hover:text-gray-900">
                  {product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Product Images */}
        <div className="mb-8 lg:mb-0">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-md overflow-hidden ${selectedImage === index ? 'border-purple-600' : 'border-gray-200'}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating) ? (
                    <HiStar className="text-yellow-400" />
                  ) : i < product.rating ? (
                    <HiOutlineStar className="text-yellow-400" />
                  ) : (
                    <HiOutlineStar className="text-gray-300" />
                  )}
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          
          <div className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Weight</h2>
            <p className="text-gray-600">{product.weight}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Quantity</h2>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b border-gray-300 text-center min-w-[40px]">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
              
              <span className="ml-4 text-sm text-gray-600">
                {product.stock} available
              </span>
            </div>
          </div>
          
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              <HiOutlineShoppingCart size={20} />
              Add to Cart
            </button>
            
            <button
              onClick={() => toggleFavorite(product)}
              className={`p-3 rounded-md border ${productIsFavorite ? 'text-red-500 border-red-200 bg-red-50' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              aria-label={productIsFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {productIsFavorite ? <HiHeart size={24} /> : <HiOutlineHeart size={24} />}
            </button>
            
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center"
            >
              Buy Now
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Product Features</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-sm font-medium capitalize border-b-2 ${
                  activeTab === tab
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-gray-700">
                Roadmap to fault-tolerant quantum computation with tetrons. The first panel shows a single-qubit device. The tetron is formed through two parallel topological wires (blue) with an MZM at each end (orange dot) connected by a perpendicular trivial superconducting wire (dark blue). The next panel shows a two-qubit device that supports measurement-based braiding transformations. The third panel shows a 4×2 array of tetrons supporting a quantum error detection demonstration on two logical qubits. These demonstrations build toward quantum error correction, such as on the device shown in the right panel (a 27×13 tetron array).
              </p>
            </div>
          )}
          
          {activeTab === "specifications" && (
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 bg-gray-50 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-medium text-gray-900">Customer Reviews</h3>
                  <div className="ml-4 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-600">Based on {product.reviewCount} reviews</p>
                  </div>
                </div>
                
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                  Write a Review
                </button>
              </div>
              
              <div className="space-y-8">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-8">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.user} 
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{review.user}</h4>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>
                                {i < review.rating ? <HiStar /> : <HiOutlineStar />}
                              </span>
                            ))}
                          </div>
                          <p className="ml-2 text-sm text-gray-600">{review.date}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <Link to={`/products/${relatedProduct.id}`}>
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:opacity-75 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{relatedProduct.name}</h3>
                  <p className="text-lg font-bold text-gray-900">${relatedProduct.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
