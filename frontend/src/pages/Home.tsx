import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tech Enthusiast&apos;s Paradise
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our unique collection of tech stickers, gadgets, and toys
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product cards will go here */}
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: 'Stickers',
    description: 'Express yourself with tech stickers',
    href: '/stickers',
  },
  {
    name: 'Labels',
    description: 'Organize with style',
    href: '/labels',
  },
  {
    name: 'Toys',
    description: 'Tech-inspired toys',
    href: '/toys',
  },
  {
    name: 'Gadgets',
    description: 'Cool tech accessories',
    href: '/gadgets',
  },
];
