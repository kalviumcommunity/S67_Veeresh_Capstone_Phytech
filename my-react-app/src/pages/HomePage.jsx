
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const productCategories = [
  { id: 1, name: "CPU", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 2, name: "GPU", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 3, name: "Memory", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 4, name: "Storage", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 5, name: "Motherboard", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 6, name: "AI Accelerator", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 7, name: "Cooling System", image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=300&h=200" },
  { id: 8, name: "PSU", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=300&h=200" }
];

const featuredProducts = [
  {
    id: 1,
    name: "Majorana 1",
    description: "Quantum computing component with indium arsenide and aluminum materials for stable quantum operations.",
    price: 240,
    image: "/lovable-uploads/0aff481a-0d47-4e15-901d-e23ea4224306.png"
  },
  {
    id: 2,
    name: "Quantum GPU 4090X",
    description: "Next-generation graphics processing unit with quantum acceleration features",
    price: 1299,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=350"
  },
  {
    id: 3,
    name: "NeuralCore i9",
    description: "AI-optimized processor with neural network acceleration",
    price: 599,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=500&h=350"
  },
  {
    id: 4,
    name: "Quantum Memory 32GB",
    description: "Ultra-fast DDR5 memory optimized for AI workloads",
    price: 359,
    image: "https://images.unsplash.com/photo-1592664858773-d4bdc3c20f6d?auto=format&fit=crop&q=80&w=500&h=350"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, AI Startups Inc",
    content: "PhyTech has revolutionized how we source hardware for our research lab. Their AI recommendations have saved us thousands of dollars.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hardware Engineer",
    content: "As someone who works with quantum computing hardware, I've found PhyTech's selection and quality to be unmatched in the industry.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Research Scientist",
    content: "The refurbished components I purchased from PhyTech performed just like new, but at half the cost. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1517036He027404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1500')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Phytech
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            AI Powered marketplace for hardware
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg"
          >
            Let's shop
          </Link>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {productCategories.map(category => (
              <Link 
                key={category.id}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover group-hover:opacity-75 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-medium text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  At PhyTech, we connect businesses, startups, and individuals with affordable, reliable second-hand and refurbished hardware. Our AI-powered platform offers tailored recommendations to meet your specific needs.
                </p>
                <p className="mt-4">
                  By promoting the reuse of technology, we contribute to a greener future while providing budget-friendly solutions. Every product undergoes rigorous testing to ensure top performance.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/about" 
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Learn more about us →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <img 
                src="/lovable-uploads/94d0abae-c717-4353-8d14-d4e5c93a141a.png" 
                alt="About PhyTech" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full mx-1 ${
                    index === activeTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest hardware deals, tech news, and exclusive offers.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-purple-900 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
