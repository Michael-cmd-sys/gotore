import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data - replace with actual API calls later
const mockProducts = [
  {
    id: '1',
    name: 'React Logo Sticker',
    price: 4.99,
    image: 'https://via.placeholder.com/200',
    category: 'stickers',
  },
  // Add more mock products here
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex gap-4">
          {/* Add filters/sort options here */}
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="hidden md:block">
          <h2 className="font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-2 py-1 rounded ${
                  selectedCategory === 'all' ? 'bg-blue-100 text-blue-700' : ''
                }`}
              >
                All Products
              </button>
            </li>
            {['stickers', 'labels', 'toys', 'gadgets'].map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-2 py-1 rounded capitalize ${
                    selectedCategory === category ? 'bg-blue-100 text-blue-700' : ''
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
