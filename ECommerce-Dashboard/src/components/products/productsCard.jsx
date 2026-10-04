
import axios from 'axios';
import { ChevronLeft, ChevronRight, Eye, Pencil, FilePenLine, Trash2, Star } from 'lucide-react';
import { Link } from "react-router-dom";
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../index.css';

function ProductsCard({ products, setProducts, setFilteredProducts, onEdit }) {
  
  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token");
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    
    if (isConfirmed) {
      try {
        await axios.delete(`https://e-commerce-api-3wara.vercel.app/products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Update state to trigger UI refresh
        const updatedProducts = products.filter(p => p._id !== productId);
        setProducts(updatedProducts);
        
        // If you are using filtering, update that too
        if (setFilteredProducts) {
          setFilteredProducts(prev => prev.filter(p => p._id !== productId));
        }

        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error.response?.data);
        toast.error(error.response?.data?.message || "Unauthorized");
      }
    }
  };

  return (

<div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  {products.map((product) => {
    const isOutOfStock = product.stock === 0;
    const hasDiscount =
      product.price !== 0 && product.discountPrice !== 0;

    const discountAmount = hasDiscount
      ? Math.ceil(product.price - product.discountPrice)
      : 0;

    return (
      <article
        key={product._id || product.id}
        className="
          group
          relative
          mx-auto
          flex
          h-[580px]
          w-full
          max-w-md
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/70
          bg-white
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-slate-300
          hover:shadow-2xl
          hover:shadow-slate-200/60
          dark:border-slate-800
          dark:bg-slate-900
          dark:hover:border-slate-700
          dark:hover:shadow-black/30
        "
      >
        {/* ================= IMAGE SECTION ================= */}
        <div className="relative h-[270px] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
          
          {/* Image Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            pagination={{
              clickable: true,
            }}
            loop={product.images?.length > 1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="h-full w-full"
          >
            {product.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={img.url}
                    alt={product.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Previous Button */}
            {product.images?.length > 1 && (
              <button
                type="button"
                className="
                  custom-prev-button
                  absolute
                  left-3
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/90
                  text-slate-700
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white
                  group-hover:flex
                  dark:bg-slate-900/90
                  dark:text-white
                  dark:hover:bg-slate-800
                "
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {/* Next Button */}
            {product.images?.length > 1 && (
              <button
                type="button"
                className="
                  custom-next-button
                  absolute
                  right-3
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/90
                  text-slate-700
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white
                  group-hover:flex
                  dark:bg-slate-900/90
                  dark:text-white
                  dark:hover:bg-slate-800
                "
              >
                <ChevronRight size={18} />
              </button>
            )}
          </Swiper>

          {/* Featured Badge */}
          {product.featured && (
            <div
              className="
                absolute
                left-4
                top-4
                z-30
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-amber-200/50
                bg-amber-400
                px-3
                py-1.5
                text-[11px]
                font-bold
                text-amber-950
                shadow-lg
                shadow-amber-900/10
                backdrop-blur-sm
              "
            >
              <Star size={12} fill="currentColor" />
              Featured
            </div>
          )}

          {/* Stock Badge */}
          <div
            className={`
              absolute
              bottom-4
              right-4
              z-30
              flex
              items-center
              gap-1.5
              rounded-full
              border
              px-3
              py-1.5
              text-[11px]
              font-bold
              text-white
              shadow-lg
              backdrop-blur-md
              ${
                isOutOfStock
                  ? "border-red-400/30 bg-red-500/90"
                  : "border-emerald-400/30 bg-emerald-500/90"
              }
            `}
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                bg-white
                ${!isOutOfStock && "animate-pulse"}
              `}
            />

            {isOutOfStock
              ? "Out of stock"
              : `${product.stock} in stock`}
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div
          className="
            flex
            flex-1
            flex-col
            p-5
          "
        >
          {/* Product Name */}
          <h3
            className="
              line-clamp-1
              text-xl
              font-bold
              tracking-tight
              text-slate-900
              transition-colors
              group-hover:text-cyan-600
              dark:text-white
              dark:group-hover:text-cyan-400
            "
          >
            {product.name}
          </h3>

          {/* Category / Brand */}
          <p
            className="
              mt-2
              line-clamp-1
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-slate-400
              dark:text-slate-500
            "
          >
            {product.category}
            {product.subcategory && ` · ${product.subcategory}`}
            {product.brand && ` · ${product.brand}`}
          </p>

          {/* Description */}
          <p
            className="
              mt-3
              line-clamp-2
              min-h-[32px]
              text-xs
              font-medium
              leading-5
              text-slate-500
              dark:text-slate-400
            "
          >
            {product.shortDescription || "No description available"}
          </p>

          {/* Price */}
          <div className="mt-4 flex items-end gap-2">
            <h2
              className="
                text-2xl
                font-extrabold
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              ${product.price}
            </h2>

            {hasDiscount && (
              <span
                className="
                  mb-0.5
                  rounded-full
                  bg-rose-50
                  px-2
                  py-1
                  text-[10px]
                  font-bold
                  text-rose-500
                  dark:bg-rose-500/10
                  dark:text-rose-400
                "
              >
                -${discountAmount} OFF
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="mt-3 flex min-h-[28px] flex-wrap gap-1.5">
            {product.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-2
                  py-1
                  text-[10px]
                  font-semibold
                  text-slate-500
                  transition-colors
                  hover:border-cyan-300
                  hover:text-cyan-500
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-400
                "
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-slate-100 dark:bg-slate-800" />

          {/* Actions */}
          <div className="mt-auto grid grid-cols-4 gap-2">
            {/* View */}
            <Link
              to={`/products/view/${product._id}`}
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-2.5
                text-[11px]
                font-semibold
                text-slate-600
                transition-all
                hover:-translate-y-0.5
                hover:border-cyan-300
                hover:bg-cyan-50
                hover:text-cyan-600
                dark:border-slate-700
                dark:bg-slate-800/60
                dark:text-slate-300
                dark:hover:border-cyan-500/40
                dark:hover:bg-cyan-500/10
                dark:hover:text-cyan-400
              "
            >
              <Eye size={15} />
              View
            </Link>

            {/* Edit */}
            <Link
              to={`/products/edit/${product._id}`}
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-2.5
                text-[11px]
                font-semibold
                text-slate-600
                transition-all
                hover:-translate-y-0.5
                hover:border-violet-300
                hover:bg-violet-50
                hover:text-violet-600
                dark:border-slate-700
                dark:bg-slate-800/60
                dark:text-slate-300
                dark:hover:border-violet-500/40
                dark:hover:bg-violet-500/10
                dark:hover:text-violet-400
              "
            >
              <Pencil size={15} />
              Edit
            </Link>

            {/* Quick Edit */}
            <button
              type="button"
              onClick={() => onEdit(product)}
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-2.5
                text-[11px]
                font-semibold
                text-slate-600
                transition-all
                hover:-translate-y-0.5
                hover:border-amber-300
                hover:bg-amber-50
                hover:text-amber-600
                dark:border-slate-700
                dark:bg-slate-800/60
                dark:text-slate-300
                dark:hover:border-amber-500/40
                dark:hover:bg-amber-500/10
                dark:hover:text-amber-400
              "
            >
              <FilePenLine size={15} />
              Quick
            </button>

            {/* Delete */}
            <button
              type="button"
              onClick={() => handleDelete(product._id)}
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-red-200
                bg-red-50
                py-2.5
                text-[11px]
                font-semibold
                text-red-500
                transition-all
                hover:-translate-y-0.5
                hover:border-red-300
                hover:bg-red-100
                hover:text-red-600
                dark:border-red-500/20
                dark:bg-red-500/10
                dark:text-red-400
                dark:hover:border-red-500/30
                dark:hover:bg-red-500/20
                dark:hover:text-red-300
              "
            >
              <Trash2 size={15} />
              Delete
            </button>
          </div>
        </div>
      </article>
    );
  })}
</div>

  );
}

export default ProductsCard;