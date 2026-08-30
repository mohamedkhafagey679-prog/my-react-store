import React from "react"; 

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50"> 
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-row-reverse">
        
        <div className="text-2xl font-bold text-emerald-400 cursor-pointer">
          Abdarahman Academy
        </div> 

        <div className="hidden md:flex gap-8 font-medium flex-row-reverse"> 
          <a href="#" className="hover:text-emerald-400 transition-colors">الصفحة الرئيسية</a>
          <a href="#products" className="hover:text-emerald-400 transition-colors">المنتجات</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">تواصل معنا</a>
        </div> 

        <div className="flex items-center gap-6">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2 rounded-full transition-colors text-sm"> 
            ابدأ الآن
          </button>

          <div className="relative cursor-pointer bg-slate-800 border border-slate-700 p-2 rounded-xl hover:bg-slate-700 transition-colors">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}
