import React from 'react';
import { ShoppingBag, CreditCard, Truck } from 'lucide-react';

export default function HowItWorks() {
  return (
    // <div className="dark:bg-[#131b2e] border-slate-200 dark:border-[#23304a] bg-white/80 flex flex-col items-center justify-center min-h-[60vh] py-16 px-6 ">
      
     
    //   <div className="text-center mb-16">
    //     <h2 className="text-2xl md:text-3xl font-bold">
    //       How It Works
    //     </h2>
    //   </div>

      
    //   <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl gap-8">

    //     <div className="flex flex-col items-center text-center gap-3">
    //       <div className="p-4 rounded-2xl dark:bg-[#1E244A] bg-slate-300 mb-2 flex items-center justify-center">
    //         <ShoppingBag className="w-8 h-8 text-indigo-400" />
    //       </div>
    //       <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold capitalize">Browse Products</p>
    //       <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
    //         Explore our wide range of premium products
    //       </p>
    //     </div>

   
    //     <div className="flex flex-col items-center text-center gap-3">
    //       <div className="p-4 rounded-2xl dark:bg-[#1E244A] bg-slate-300 mb-2 flex items-center justify-center">
    //         <CreditCard className="w-8 h-8 text-indigo-400" />
    //       </div>
    //       <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold capitalize">Add to Cart</p>
    //       <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
    //         Select your favorites and add them to your cart
    //       </p>
    //     </div>

      
    //     <div className="flex flex-col items-center text-center gap-3">
    //       <div className="p-4 rounded-2xl dark:bg-[#1E244A] bg-slate-300 mb-2 flex items-center justify-center">
    //         <Truck className="w-8 h-8 text-indigo-400" />
    //       </div>
    //       <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold capitalize">Order & Receive</p>
    //       <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
    //         Place your order and get it delivered to your doorstep
    //       </p>
    //     </div>

    //   </div>
    // </div>

    <div
  className="
    relative
    flex
    min-h-[60vh]
    w-full
    flex-col
    items-center
    justify-center
    overflow-hidden
    bg-slate-50
    px-6
    py-20
    dark:bg-[#0f172a]
  "
>
  <div
    className="
      pointer-events-none
      absolute
      -top-32
      left-1/2
      h-72
      w-72
      -translate-x-1/2
      rounded-full
      bg-indigo-500/10
      blur-3xl
    "
  />

  <div className="relative z-10 mb-14 text-center">
    <span
      className="
        mb-3
        inline-flex
        rounded-full
        border
        border-indigo-100
        bg-indigo-50
        px-3
        py-1
        text-[11px]
        font-bold
        uppercase
        tracking-widest
        text-indigo-600
        dark:border-indigo-500/20
        dark:bg-indigo-500/10
        dark:text-indigo-400
      "
    >
      Simple & Easy
    </span>

    <h2
      className="
        text-3xl
        font-extrabold
        tracking-tight
        text-slate-900
        md:text-4xl
        dark:text-white
      "
    >
      How It Works
    </h2>

    <p
      className="
        mx-auto
        mt-3
        max-w-lg
        text-sm
        leading-6
        text-slate-500
        dark:text-slate-400
      "
    >
      Shop your favorite products in just a few simple steps.
    </p>
  </div>

  <div
    className="
      relative
      z-10
      grid
      w-full
      max-w-6xl
      grid-cols-1
      gap-6
      md:grid-cols-3
    "
  >
    <div
      className="
        group
        relative
        flex
        flex-col
        items-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-200
        hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]
        dark:border-slate-800
        dark:bg-[#131b2e]
        dark:hover:border-indigo-500/30
      "
    >
      <div
        className="
          mb-6
          flex
          size-16
          items-center
          justify-center
          rounded-2xl
          bg-indigo-50
          text-indigo-600
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
          dark:bg-indigo-500/10
          dark:text-indigo-400
        "
      >
        <ShoppingBag className="h-7 w-7" />
      </div>

      <span
        className="
          mb-2
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          text-indigo-500
        "
      >
        Step 01
      </span>

      <h3
        className="
          text-lg
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Browse Products
      </h3>

      <p
        className="
          mt-2
          max-w-xs
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        Explore our wide range of premium products and find exactly what you need.
      </p>
    </div>

    <div
      className="
        group
        relative
        flex
        flex-col
        items-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-200
        hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)]
        dark:border-slate-800
        dark:bg-[#131b2e]
        dark:hover:border-violet-500/30
      "
    >
      <div
        className="
          mb-6
          flex
          size-16
          items-center
          justify-center
          rounded-2xl
          bg-violet-50
          text-violet-600
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
          dark:bg-violet-500/10
          dark:text-violet-400
        "
      >
        <CreditCard className="h-7 w-7" />
      </div>

      <span
        className="
          mb-2
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          text-violet-500
        "
      >
        Step 02
      </span>

      <h3
        className="
          text-lg
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Add to Cart
      </h3>

      <p
        className="
          mt-2
          max-w-xs
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        Select your favorite items, add them to your cart, and get ready to checkout.
      </p>
    </div>

    <div
      className="
        group
        relative
        flex
        flex-col
        items-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-200
        hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)]
        dark:border-slate-800
        dark:bg-[#131b2e]
        dark:hover:border-cyan-500/30
      "
    >
      <div
        className="
          mb-6
          flex
          size-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-50
          text-cyan-600
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
          dark:bg-cyan-500/10
          dark:text-cyan-400
        "
      >
        <Truck className="h-7 w-7" />
      </div>

      <span
        className="
          mb-2
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          text-cyan-500
        "
      >
        Step 03
      </span>

      <h3
        className="
          text-lg
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Order & Receive
      </h3>

      <p
        className="
          mt-2
          max-w-xs
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        Place your order and enjoy fast delivery directly to your doorstep.
      </p>
    </div>
  </div>
</div>
  );
}