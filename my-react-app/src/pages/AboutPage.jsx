
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                ABOUT US
              </h1>
              <p className="mt-6 text-xl">
                At PhyTech, we connect businesses, startups, and individuals with affordable,
                reliable second-hand and refurbished hardware. Our AI-powered platform offers 
                tailored recommendations to meet your specific needs.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/94d0abae-c717-4353-8d14-d4e5c93a141a.png" 
                  alt="About PhyTech" 
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  By promoting the reuse of technology, we contribute to a greener future while providing budget-friendly solutions. Every product undergoes rigorous testing to ensure top performance.
                </p>
                <p className="mt-4">
                  Whether you're buying, selling, or seeking advice, PhyTech is your trusted partner in sustainable technology. Choose PhyTech — Powering Progress, Sustainably.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-7 pl-0 lg:pl-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg mb-2 text-gray-900">Sustainability</h4>
                    <p className="text-gray-600">Reducing e-waste through refurbishment and reuse of quality hardware components.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2 text-gray-900">Affordability</h4>
                    <p className="text-gray-600">Making advanced technology accessible to more businesses and individuals.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2 text-gray-900">Quality</h4>
                    <p className="text-gray-600">Thorough testing and verification of every product we offer.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2 text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Using AI to match customers with the perfect hardware for their needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind PhyTech's mission to revolutionize hardware access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "Former hardware engineer with 15+ years of experience in the industry."
              },
              {
                name: "Samantha Chen",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "AI specialist with a focus on creating intelligent recommendation systems."
              },
              {
                name: "David Rodriguez",
                role: "Head of Operations",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                bio: "Supply chain expert ensuring quality in every refurbished component."
              }
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8 text-center">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-purple-600 mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
            
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "PhyTech was founded with a vision to reduce e-waste and make quality hardware accessible."
              },
              {
                year: "2021",
                title: "AI Integration",
                description: "Launched our AI-powered recommendation engine to help customers find the perfect hardware."
              },
              {
                year: "2022",
                title: "Expansion",
                description: "Grew our team and expanded operations to serve customers nationwide."
              },
              {
                year: "2023",
                title: "Quantum Focus",
                description: "Added quantum computing components to our product range."
              },
              {
                year: "Present",
                title: "Global Reach",
                description: "Now serving customers around the world with sustainable hardware solutions."
              }
            ].map((item, index) => (
              <div key={item.year} className={`relative mb-12 md:mb-20 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="hidden md:block absolute top-0 rounded-full w-6 h-6 bg-purple-600 left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="text-purple-600 font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-gray-900 font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the PhyTech Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to purchase quality hardware or contribute to a more sustainable future, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="px-8 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-gray-100 transition"
            >
              Shop Products
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
