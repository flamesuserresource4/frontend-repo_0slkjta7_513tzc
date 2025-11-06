import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflows from './components/Workflows';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflows />
        <Pricing />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} RetailBill. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
