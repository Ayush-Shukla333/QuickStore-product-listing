import { useNavigate, useSearchParams } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = () => {
    navigate(`/product/${product.id}?${searchParams.toString()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer group h-full"
    >
      {/* Image */}
      <div className="h-48 sm:h-52 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs uppercase tracking-wide text-indigo-500 font-medium">
          {product.category}
        </span>
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 flex-1">
          {product.title}
        </h2>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <span className="text-xs text-gray-500">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;