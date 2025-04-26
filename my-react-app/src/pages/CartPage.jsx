
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiOutlineTrash, HiOutlinePlus, HiOutlineMinus, HiOutlineX } from "react-icons/hi";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === "welcome10") {
      setCouponApplied(true);
      setDiscount(getCartTotal() * 0.1); // 10% discount
    } else {
      alert("Invalid coupon code");
    }
  };
  
  // Calculate totals
  const subtotal = getCartTotal();
  const deliveryCharge = subtotal > 0 ? 20 : 0;
  const handlingCharge = subtotal > 0 ? 10 : 0;
  const total = subtotal + deliveryCharge + handlingCharge - discount;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <HiOutlineX className="inline-block w-16 h-16" />
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Delivery in 2 days
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Shipment of {cartItems.reduce((total, item) => total + item.quantity, 0)} items
                </p>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-24 md:h-24 w-full h-auto bg-gray-200 rounded-md overflow-hidden mb-4 md:mb-0">
                        <img
                          src={item.image || "/lovable-uploads/0aff481a-0d47-4e15-901d-e23ea4224306.png"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:ml-6 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.weight || "20gm"}
                            </p>
                            <p className="mt-1 text-lg font-bold text-gray-900">
                              ${item.price}
                            </p>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                            aria-label="Remove item"
                          >
                            <HiOutlineTrash size={20} />
                          </button>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <div className="flex border border-gray-300 rounded-full overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <HiOutlineMinus size={16} />
                            </button>
                            <span className="px-3 py-1 flex items-center justify-center text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <HiOutlinePlus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Coupon Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Apply Coupon</h2>
                <form onSubmit={handleCouponSubmit} className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Apply
                  </button>
                </form>
                {couponApplied && (
                  <div className="mt-2 text-sm text-green-600">
                    Coupon applied successfully! You saved ${discount.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-20">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Bill Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>1. Items Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>2. Delivery Charge</span>
                    <span>${deliveryCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>3. Handling Charge</span>
                    <span>${handlingCharge.toFixed(2)}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>4. Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between font-bold text-gray-900">
                    <span>Grand Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Address</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id="address1"
                      name="address"
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500"
                      defaultChecked
                    />
                    <label htmlFor="address1" className="ml-3 text-gray-700">
                      <div className="font-medium">Address 1</div>
                      <div className="text-sm text-gray-500">
                        123 Main St, Apt 4B, New York, NY 10001
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id="address2"
                      name="address"
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="address2" className="ml-3 text-gray-700">
                      <div className="font-medium">Address 2</div>
                      <div className="text-sm text-gray-500">
                        456 Park Ave, Suite 10, San Francisco, CA 94107
                      </div>
                    </label>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      to="/add-address"
                      className="text-sm text-purple-600 hover:text-purple-500"
                    >
                      + Add a new address
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <Link 
                  to="/checkout"
                  className="block w-full py-3 px-4 rounded-md shadow bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
