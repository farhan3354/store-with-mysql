import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';

const INITIAL_CART = [
  { ...allProducts.find(p => p.id === 1), qty: 1 },
  { ...allProducts.find(p => p.id === 8), qty: 2 },
  { ...allProducts.find(p => p.id === 19), qty: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState(INITIAL_CART);

  const updateQty = (id, delta) =>
    setCart(prev => prev
      .map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );

  const remove = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping  = subtotal > 500 ? 0 : 25;
  const total     = subtotal + shipping;

  return (
    <div className="min-h-screen bg-noble-bg">
      {/* Banner */}
      <div className="relative bg-noble-primary text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#c6a769_0%,transparent_60%)]"></div>
        <p className="text-noble-accent text-xs uppercase tracking-[0.35em] mb-3">My Account</p>
        <h1 className="text-5xl md:text-7xl font-serif">Shopping Cart</h1>
        <div className="flex justify-center gap-2 mt-6 text-xs uppercase tracking-widest text-noble-bg/50">
          <Link to="/" className="hover:text-noble-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-noble-accent">Cart</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {cart.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-7xl mb-6">🛒</p>
            <h2 className="font-serif text-3xl text-noble-primary mb-3">Your cart is empty</h2>
            <p className="text-noble-secondary text-sm mb-10">Add some beautiful pieces to get started.</p>
            <Link to="/products" className="bg-noble-primary text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-noble-accent transition-all duration-300 rounded-sm inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-serif text-2xl text-noble-primary">{cart.length} {cart.length === 1 ? 'Item' : 'Items'}</h2>
                <Link to="/products" className="text-xs uppercase tracking-widest text-noble-secondary hover:text-noble-accent transition-colors">
                  ← Continue Shopping
                </Link>
              </div>

              {cart.map(item => (
                <div key={item.id} className="flex gap-6 bg-white p-5 rounded-sm shadow-sm items-start">
                  <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-noble-bg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=200&q=80'; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-medium text-noble-primary text-sm leading-snug">{item.name}</h3>
                        <p className="text-noble-secondary text-xs mt-1">{item.category}</p>
                      </div>
                      <button onClick={() => remove(item.id)} className="text-noble-secondary hover:text-noble-sale transition-colors text-lg leading-none shrink-0">×</button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-noble-secondary/20 rounded-sm overflow-hidden">
                        <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-noble-primary hover:bg-noble-bg transition-colors text-sm">−</button>
                        <span className="w-10 h-8 flex items-center justify-center text-noble-primary text-sm font-medium border-x border-noble-secondary/20">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, +1)} className="w-8 h-8 flex items-center justify-center text-noble-primary hover:bg-noble-bg transition-colors text-sm">+</button>
                      </div>
                      <span className="font-semibold text-noble-primary text-sm">${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-sm shadow-sm p-8 sticky top-24">
                <h2 className="font-serif text-2xl text-noble-primary mb-8">Order Summary</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-noble-secondary">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-noble-secondary">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shipping}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-noble-accent">Add ${(500 - subtotal).toLocaleString()} more for free shipping</p>
                  )}
                  <div className="border-t border-noble-secondary/15 pt-4 flex justify-between font-semibold text-noble-primary text-base">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-noble-primary text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-noble-accent transition-all duration-500 rounded-sm shadow-lg hover:-translate-y-0.5">
                  Proceed to Checkout
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-noble-secondary/50 text-xs">
                  <span>🔒</span>
                  <span>Secure 256-bit SSL checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
