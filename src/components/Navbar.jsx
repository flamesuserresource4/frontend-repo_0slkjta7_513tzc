import { Store, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold select-none shadow-sm">
            RB
          </div>
          <span className="text-lg font-semibold text-gray-900">RetailBill</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#workflows" className="hover:text-gray-900 transition">Workflows</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            <User size={18} /> Sign in
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-800">
            <Store size={18} /> For Stores
          </button>
          <button className="ml-1 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
