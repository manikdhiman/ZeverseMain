"use client";

import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/utils/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Elegant Dark Overlay with Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-[#311B14]/40 backdrop-blur-sm"
          />

          {/* Premium Right Side Slide Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#EDE6D8] text-[#311B14] shadow-2xl p-8 flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#311B14]/10 pb-6 mb-6">
              <h3 className="font-brown-sugar text-2xl tracking-wide">Your Bag</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs font-semibold tracking-widest uppercase opacity-60 hover:opacity-100 cursor-pointer"
              >
                Close &rarr;
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-50">
                  <p className="text-xs uppercase tracking-widest">Your bag is completely empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 items-center border-b border-[#311B14]/5 pb-4">
                    <img src={item.img} alt={item.name} className="w-20 h-24 object-cover rounded-sm" />
                    <div className="flex-1 text-left">
                      <h4 className="text-sm font-light tracking-wide">{item.name}</h4>
                      <p className="text-xs opacity-60 mt-1">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold mt-2">${item.price * item.quantity}.00</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] uppercase tracking-tighter text-red-700 font-bold hover:opacity-70"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Checkout Pricing Matrix */}
            {cart.length > 0 && (
              <div className="border-t border-[#311B14]/10 pt-6 mt-6 space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                  <span>Subtotal</span>
                  <span>${total}.00</span>
                </div>
                <p className="text-[10px] tracking-wide uppercase opacity-60 text-left">
                  Shipping & taxes calculated at premium fulfillment.
                </p>
                <button className="w-full bg-[#311B14] text-[#EDE6D8] uppercase tracking-widest font-semibold py-4 text-xs rounded-sm hover:opacity-95 transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}