import React from "react";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "سماعه بليتوز pro",
    price: 120,
    category: "الكترونيات",
    image: "https://unsplash.com"
  },
  {
    id: 2,
    name: "ساعه apple watch",
    price: 300,
    category: "ساعات",
    image: "https://unsplash.com"
  },
  {
    id: 3,
    name: "موبايل سامسونج s24ultra",
    price: 1000,
    category: "موبايل",
    image: "https://unsplash.com"
  }
];

export default function Products({ addToCart }) {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center lg:text-right mb-12">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          أحدث <span className="text-emerald-400">المنتجات المتاحة</span> 
        </h2> 
        <p className="mt-3 text-slate-400 max-w-xl mx-auto lg:mx-0">
          تصفح مجموعتنا المميزة واختر ما يناسب احتياجاتك مع شحن سريع وضمان شامل.
        </p> 
      </div> 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => (
          <div 
            key={product.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="relative aspect-video w-full bg-slate-800 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-800">
                {product.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-black text-white">${product.price}</span>
                  <span className="text-xs text-slate-500">شامل الضريبة</span>
                </div>
              </div>

              <button 
                onClick={() => addToCart(product)}
                className="mt-6 w-full py-3 px-4 bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-slate-950 border border-slate-700 hover:border-emerald-500 rounded-xl font-bold text-sm transition-all duration-200"
              >
                إضافة إلى السلة 🛒
              </button>
            </div>
          </div>
        ))}
      </div> 
    </section>
  );
}
