
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineSearch, HiOutlineAdjustments, HiOutlineX } from "react-icons/hi";
import ProductCard from "../components/ProductCard";

// Sample product data (in a real app, this would come from an API)
const allProducts = [
  {
    id: 1,
    name: "Majorana 1",
    description: "Quantum computing component with indium arsenide and aluminum materials for stable quantum operations.",
    price: 240,
    category: "Quantum",
    image: "/lovable-uploads/0aff481a-0d47-4e15-901d-e23ea4224306.png",
    tags: ["quantum", "computing", "research"]
  },
  {
    id: 2,
    name: "Quantum GPU 4090X",
    description: "Next-generation graphics processing unit with quantum acceleration features",
    price: 1299,
    category: "GPU",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["gpu", "gaming", "rendering"]
  },
  {
    id: 3,
    name: "NeuralCore i9",
    description: "AI-optimized processor with neural network acceleration",
    price: 599,
    category: "CPU",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["cpu", "ai", "processing"]
  },
  {
    id: 4,
    name: "Quantum Memory 32GB",
    description: "Ultra-fast DDR5 memory optimized for AI workloads",
    price: 359,
    category: "Memory",
    image: "https://images.unsplash.com/photo-1592664858773-d4bdc3c20f6d?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["memory", "ram", "high-performance"]
  },
  {
    id: 5,
    name: "AI Accelerator X1",
    description: "Specialized neural network processor for edge AI applications",
    price: 499,
    category: "AI Accelerator",
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["ai", "accelerator", "edge-computing"]
  },
  {
    id: 6,
    name: "Quantum Storage 2TB",
    description: "High-speed SSD optimized for large dataset operations",
    price: 299,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["storage", "ssd", "data"]
  },
  {
    id: 7,
    name: "Quantum Cooling System Pro",
    description: "Advanced cooling solution for high-performance quantum components",
    price: 189,
    category: "Cooling System",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["cooling", "thermal", "performance"]
  },
  {
    id: 8,
    name: "QuantumBoard Z790",
    description: "Next-gen motherboard with integrated quantum controllers",
    price: 449,
    category: "Motherboard",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["motherboard", "connectivity", "system"]
  },
  {
    id: 9,
    name: "Quantum PSU 1000W",
    description: "High-efficiency power supply for quantum computing systems",
    price: 219,
    category: "PSU",
    image: "https://images.unsplash.com/photo-1627800838172-8caac4ea162e?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["psu", "power", "supply"]
  },
  {
    id: 10,
    name: "Neural Processing Unit",
    description: "Dedicated processor for machine learning and neural network operations",
    price: 399,
    category: "CPU",
    image: "https://images.unsplash.com/photo-1555618568-bae289b2c81c?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["neural", "ai", "processing"]
  },
  {
    id: 11,
    name: "Quantum Water Cooling Kit",
    description: "Complete water cooling solution for quantum processing units",
    price: 329,
    category: "Cooling System",
    image: "https://images.unsplash.com/photo-1587138810337-49b18a707908?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["cooling", "water", "thermal"]
  },
  {
    id: 12,
    name: "AI Training GPU Cluster",
    description: "Multi-GPU solution optimized for large-scale AI training",
    price: 2499,
    category: "GPU",
    image: "https://images.unsplash.com/photo-1563126315-3f1a68140816?auto=format&fit=crop&q=80&w=500&h=350",
    tags: ["gpu", "cluster", "ai-training"]
  }
];

const categories = [
  "All",
  "CPU",
  "GPU",
  "Memory",
  "Storage",
  "Motherboard",
  "AI Accelerator",
  "Cooling System",
  "PSU",
  "Quantum"
];

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under200", label: "Under $200", min: 0, max: 200 },
  { id: "200to500", label: "$200 - $500", min: 200, max: 500 },
  { id: "500to1000", label: "$500 - $1000", min: 500, max: 1000 },
  { id: "over1000", label: "Over $1000", min: 1000, max: Infinity }
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "newest", label: "Newest" }
];

const ProductListingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || "All";
  
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter and sort products whenever filters change
  useEffect(() => {
    let result = [...allProducts];
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Apply price range filter
    const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
    if (priceRange) {
      result = result.filter(
        product => product.price >= priceRange.min && product.price <= priceRange.max
      );
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you'd sort by date added
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // "featured" - no specific sorting
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, selectedPriceRange, sortBy, searchQuery]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // The search is already applied via the useEffect
  };
  
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange("all");
    setSortBy("featured");
    setSearchQuery("");
  };
  
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-purple-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">All Products</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      name="category"
                      value={category}
                      type="radio"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <div key={range.id} className="flex items-center">
                    <input
                      id={`price-${range.id}`}
                      name="price"
                      value={range.id}
                      type="radio"
                      checked={selectedPriceRange === range.id}
                      onChange={() => setSelectedPriceRange(range.id)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <label
                      htmlFor={`price-${range.id}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Clear Filters */}
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-purple-600 hover:text-purple-800"
            >
              Clear all filters
            </button>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Search and Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <form onSubmit={handleSearch} className="flex w-full md:w-auto">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiOutlineSearch className="text-gray-400" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Search
                </button>
              </form>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-1 text-gray-700 px-3 py-2 border border-gray-300 rounded-md"
                >
                  <HiOutlineAdjustments />
                  <span>Filters</span>
                </button>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-white p-4 border rounded-md mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500"
                  >
                    <HiOutlineX size={20} />
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`mobile-category-${category}`}
                          name="mobile-category"
                          value={category}
                          type="radio"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                        />
                        <label
                          htmlFor={`mobile-category-${category}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Price</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <div key={range.id} className="flex items-center">
                        <input
                          id={`mobile-price-${range.id}`}
                          name="mobile-price"
                          value={range.id}
                          type="radio"
                          checked={selectedPriceRange === range.id}
                          onChange={() => setSelectedPriceRange(range.id)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                        />
                        <label
                          htmlFor={`mobile-price-${range.id}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Apply & Clear Buttons */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Clear all
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="text-purple-600 font-medium hover:text-purple-800"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border rounded bg-purple-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                  8
                </button>
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
