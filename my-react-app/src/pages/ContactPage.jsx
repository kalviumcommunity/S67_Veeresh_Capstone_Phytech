
import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // For now, just show the success message
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">CONTACT</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions, feedback, or partnership opportunities.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-purple-600 mx-auto mb-4">
                <HiOutlineMail size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@phytech.com</p>
              <p className="text-gray-600">support@phytech.com</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-purple-600 mx-auto mb-4">
                <HiOutlinePhone size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-purple-600 mx-auto mb-4">
                <HiOutlineLocationMarker size={36} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Tech Plaza, Suite 400</p>
              <p className="text-gray-600">San Francisco, CA 94103</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
            
            {submitted && (
              <div className="mb-8 bg-green-50 text-green-700 p-4 rounded-md">
                Thank you for your message! We'll get back to you as soon as possible.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I track my order?",
                answer: "Once your order is shipped, you'll receive a tracking number via email. You can also view the status of your order in your account dashboard."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for most products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary depending on your location."
              },
              {
                question: "How do you ensure the quality of refurbished products?",
                answer: "Every refurbished product undergoes a rigorous testing process. We check all components, replace any worn parts, and ensure everything works like new before it's listed on our platform."
              },
              {
                question: "Can I sell my used hardware on PhyTech?",
                answer: "Yes! We're always looking for quality used hardware. Visit our 'Sell With Us' page to learn more about the process and get started."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="w-full h-96 bg-gray-300">
          {/* In a real implementation, you would integrate Google Maps or another map provider here */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-600 text-lg">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
