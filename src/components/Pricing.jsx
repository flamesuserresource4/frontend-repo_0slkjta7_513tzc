export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple pricing that scales with you</h2>
          <p className="mt-3 text-gray-600">Start free, upgrade when you need advanced analytics and multi-store controls.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: 'Free', features: ['Unlimited bills', 'WhatsApp text receipts', 'Basic QR display'] },
            { name: 'Pro', price: '₹999/mo', features: ['Payment gateway integration', 'Receipt PDFs', 'Inventory tracking'] },
            { name: 'Business', price: '₹1999/mo', features: ['Multi-store support', 'Role-based access', 'Advanced analytics'] },
          ].map((tier) => (
            <div key={tier.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="text-2xl font-bold text-gray-900">{tier.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">Get started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
