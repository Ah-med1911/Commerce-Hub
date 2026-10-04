import { useContext, useState } from "react";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import api from "../../lib/api";

export default function FeaturedWorks({ products, wishlist, onToggleWishlist }) {
  const { addToCart } = useContext(CartContext);
  const [loadingIds, setLoadingIds] = useState({});

  const handleWishlistClick = async (productId) => {
    const isInWishlist = wishlist[productId];

    if (loadingIds[productId]) return;
    setLoadingIds((prev) => ({ ...prev, [productId]: true }));

    try {
      if (isInWishlist) {
        await api.delete(`/wishlists/remove/${productId}`);
        window.dispatchEvent(new Event("wishlistItemDeleted"));
        window.dispatchEvent(new Event("wishlistUpdated"));
      } else {
        
        await api.post(`/wishlists/add/${productId}`);
        window.dispatchEvent(new Event("wishlistUpdated"));
      }

     
      if (onToggleWishlist) {
        onToggleWishlist(productId);
      }
    } catch (error) {
      console.error("Failed to update wishlist", error.response?.data || error.message);
    } finally {
      setLoadingIds((prev) => ({ ...prev, [productId]: false }));
    }
  };

  return (


    
<div className="w-full flex flex-col items-center gap-8 py-8 px-4">
  <div className="w-full max-w-7xl mx-auto flex items-end justify-between px-2">
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Featured Products
      </h2>
      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
        Handpicked just for you
      </p>
    </div>

    <a
      href="/products"
      className="
        group
        flex
        items-center
        gap-1.5
        rounded-full
        px-4
        py-2
        text-sm
        font-semibold
        text-indigo-500
        transition-all
        duration-300
        hover:bg-indigo-50
        hover:text-indigo-600
        dark:hover:bg-indigo-500/10
        dark:hover:text-indigo-400
      "
    >
      View All
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  </div>

  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map(function (product) {
      const isOutOfStock = product.stock === 0;
      const hasDiscount = product.discountPrice > 0;

      let priceToShow = product.price;
      let discountPercent = 0;

      if (hasDiscount) {
        priceToShow = product.discountPrice;

        const savedMoney = product.price - product.discountPrice;

        discountPercent = Math.round(
          (savedMoney / product.price) * 100
        );
      }

      const ratingStars =
        "★".repeat(Math.round(product.averageRating || 0)) +
        "☆".repeat(5 - Math.round(product.averageRating || 0));

      const isWishlisted = wishlist[product._id];

      return (
        <div
          key={product._id}
          className="
            group
            relative
            flex
            h-[560px]
            w-full
            flex-col
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-white
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-indigo-200
            hover:shadow-[0_20px_50px_rgba(79,70,229,0.14)]
            dark:border-slate-800
            dark:bg-[#111827]
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
            dark:hover:border-indigo-500/40
            dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-10
              h-1
              bg-linear-to-r
              from-indigo-500
              via-violet-500
              to-cyan-500
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute
              left-4
              top-4
              z-20
              rounded-full
              border
              border-white/60
              bg-white/90
              px-3
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-wide
              text-slate-700
              shadow-sm
              backdrop-blur-md
              dark:border-slate-700
              dark:bg-slate-900/90
              dark:text-slate-200
            "
          >
            {product.category}
          </div>

          {hasDiscount && (
            <div
              className="
                absolute
                right-16
                top-4
                z-20
                rounded-full
                bg-red-500
                px-3
                py-1.5
                text-[11px]
                font-bold
                text-white
                shadow-sm
              "
            >
              -{discountPercent}%
            </div>
          )}

          <button
            onClick={() => handleWishlistClick(product._id)}
            disabled={
              isOutOfStock || loadingIds[product._id]
            }
            className={`
              absolute
              right-4
              top-4
              z-20
              flex
              size-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white/90
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              dark:border-slate-700
              dark:bg-slate-900/90
              ${
                isOutOfStock
                  ? "cursor-not-allowed opacity-50"
                  : "hover:scale-110 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-500/10"
              }
            `}
          >
            <Heart
              size={17}
              fill={
                isWishlisted
                  ? "currentColor"
                  : "none"
              }
              className={
                isOutOfStock
                  ? "text-slate-400"
                  : isWishlisted
                  ? "text-red-500"
                  : "text-slate-400 group-hover:text-red-500"
              }
            />
          </button>

          <div
            className="
              relative
              flex
              h-[330px]
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-slate-50
              p-8
              dark:bg-[#151e31]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-indigo-500/10
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-150
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-16
                h-40
                w-40
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <img
              src={product.images?.[0]?.url}
              alt={product.name}
              className="
                relative
                z-10
                max-h-full
                max-w-full
                object-contain
                drop-shadow-[0_15px_20px_rgba(15,23,42,0.12)]
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {isOutOfStock && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-950/55 backdrop-blur-[2px]">
                <span
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-slate-950/80
                    px-5
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-xl
                    backdrop-blur-md
                  "
                >
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          <div
            className="
              flex
              flex-1
              flex-col
              justify-between
              p-5
            "
          >
            <div>
              <h3
                className="
                  line-clamp-2
                  text-[17px]
                  font-bold
                  leading-6
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-indigo-600
                  dark:text-white
                  dark:group-hover:text-indigo-400
                "
              >
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[13px] text-amber-400">
                  {ratingStars}
                </div>

                <span className="text-xs font-medium text-slate-400">
                  ({product.numReviews || 0})
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.brand && (
                  <span
                    className="
                      rounded-md
                      bg-slate-100
                      px-2
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                      dark:bg-slate-800
                      dark:text-slate-400
                    "
                  >
                    {product.brand}
                  </span>
                )}

                {product.subcategory && (
                  <span
                    className="
                      rounded-md
                      bg-slate-100
                      px-2
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                      dark:bg-slate-800
                      dark:text-slate-400
                    "
                  >
                    {product.subcategory}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-end justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span
                    className="
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-slate-900
                      dark:text-white
                    "
                  >
                    EGP {priceToShow}
                  </span>

                  {hasDiscount && (
                    <span
                      className="
                        text-xs
                        font-medium
                        text-slate-400
                        line-through
                        dark:text-slate-500
                      "
                    >
                      EGP {product.price}
                    </span>
                  )}
                </div>

                <span
                  className={`
                    rounded-full
                    px-2.5
                    py-1
                    text-[10px]
                    font-bold
                    ${
                      isOutOfStock
                        ? "bg-red-50 text-red-500 dark:bg-red-500/10"
                        : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                    }
                  `}
                >
                  {isOutOfStock
                    ? "Unavailable"
                    : "In Stock"}
                </span>
              </div>

              {isOutOfStock ? (
                <button
                  disabled
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-200
                    py-3
                    text-sm
                    font-bold
                    text-slate-500
                    cursor-not-allowed
                    dark:bg-slate-800
                    dark:text-slate-500
                  "
                >
                  <ShoppingCart size={17} />
                  Out of Stock
                </button>
              ) : (
                <button
                  onClick={() =>
                    addToCart(product._id)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-indigo-600
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-indigo-500/20
                    transition-all
                    duration-300
                    hover:bg-indigo-500
                    hover:shadow-xl
                    hover:shadow-indigo-500/30
                    active:scale-[0.98]
                  "
                >
                  <ShoppingCart size={17} />
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

  );
}