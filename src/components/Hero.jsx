import React from "react";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl">
        
        {/* تأثير الإضاءة الخلفية */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* النصوص والعروض */}
          <div className="space-y-6 text-center lg:text-right">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              🏷️ خصومات تصل إلى 50% لفترة محدودة
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              شوف أحدث <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                المنتجات الموجوده
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
              تسوق الآن واحصل على جودة عالمية، شحن سريع، وضمان استرجاع مجاني لجميع الطلبات.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#products" className="px-6 py-3.5 text-sm font-medium text-center text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20">
                تسوق المنتجات الآن
              </a>
              <button className="px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition duration-200">
                عرض الفئات (Categories)
              </button>
            </div>
          </div>

          {/* عرض منتج رئيسي مميز أو صورة دعائية */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none aspect-square bg-slate-800/50 border border-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="text-center p-6">
              <div className="text-6xl mb-4 animate-bounce">🛍️</div>
              <p className="text-sm font-medium text-slate-300">مكان صورة العرض الرئيسية أو البانر</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
