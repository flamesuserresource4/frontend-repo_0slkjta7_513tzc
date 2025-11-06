import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-10 py-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 w-fit text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-200 mb-4">Fintech Ready • QR + WhatsApp • POS</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Retail billing reimagined for speed and simplicity
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Scan barcodes, send bills on WhatsApp, and accept QR payments — all in one modern, lightning-fast interface.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#features" className="px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">Explore features</a>
            <a href="#workflows" className="px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">See workflows</a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
