import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              GoTore
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Your one-stop shop for tech merchandise, stickers, and gadgets.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/stickers" className="text-sm text-gray-500 hover:text-gray-900">
                  Stickers
                </Link>
              </li>
              <li>
                <Link to="/labels" className="text-sm text-gray-500 hover:text-gray-900">
                  Labels
                </Link>
              </li>
              <li>
                <Link to="/toys" className="text-sm text-gray-500 hover:text-gray-900">
                  Toys
                </Link>
              </li>
              <li>
                <Link to="/gadgets" className="text-sm text-gray-500 hover:text-gray-900">
                  Gadgets
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Account
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/account" className="text-sm text-gray-500 hover:text-gray-900">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-gray-500 hover:text-gray-900">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm text-gray-500 hover:text-gray-900">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-500 hover:text-gray-900">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-500 hover:text-gray-900">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} GoTore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
