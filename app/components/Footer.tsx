import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react"; // Importing icons for social media

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Category Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Men" className="text-gray-400 hover:text-purple-500">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/Women" className="text-gray-400 hover:text-purple-500">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/Teens" className="text-gray-400 hover:text-purple-500">
                  Teens
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-info" className="text-gray-400 hover:text-purple-500">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-purple-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-purple-500">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-purple-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-purple-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-400 hover:text-purple-500">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-purple-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-purple-500">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-purple-500">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link href="https://www.instagram.com" className="text-gray-400 hover:text-purple-500">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://www.twitter.com" className="text-gray-400 hover:text-purple-500">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.facebook.com" className="text-gray-400 hover:text-purple-500">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}