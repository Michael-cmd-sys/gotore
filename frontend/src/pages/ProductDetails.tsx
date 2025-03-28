import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';

// Mock data - replace with actual API call later
const mockProduct = {
  id: '1',
  name: 'React Logo Sticker',
  price: 4.99,
  description: 'High-quality vinyl sticker featuring the React logo.',
  image: 'https://via.placeholder.com/400',
  category: 'stickers',
  features: [
    'Durable vinyl material',
    'Waterproof',
    'UV resistant',
    'Perfect for laptops, water bottles, and more',
  ],
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);

  // In real app, fetch product data based on id
  const product = mockProduct;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 mt-4">
            ${product.price.toFixed(2)}
          </p>
          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900">Features</h2>
            <ul className="mt-2 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-2 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button
              onClick={handleAddToCart}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
