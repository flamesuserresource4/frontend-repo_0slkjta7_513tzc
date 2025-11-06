import { ScanLine, Smartphone, Receipt, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ScanLine,
    title: "Scan products",
    desc: "Add items to the bill with lightning-fast barcode recognition.",
  },
  {
    icon: Smartphone,
    title: "Send to WhatsApp",
    desc: "Share an itemized bill and payment link instantly.",
  },
  {
    icon: Receipt,
    title: "Collect payment",
    desc: "Customer pays via QR/UPI or card; status updates automatically.",
  },
  {
    icon: CheckCircle,
    title: "Receipt & history",
    desc: "Digital receipt is stored and available for reprints.",
  },
];

export default function Workflows() {
  return (
    <section id="workflows" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">From scan to paid in seconds</h2>
            <p className="mt-3 text-gray-600">A streamlined flow optimized for counter speed and happy customers.</p>
            <div className="mt-8 space-y-6">
              {steps.map(({ icon: Icon, title, desc }, idx) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{idx + 1}. {title}</div>
                    <div className="text-sm text-gray-600">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="aspect-[9/16] w-full rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 flex flex-col justify-between">
              <div className="text-white/70 text-sm">Counter App</div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-900 font-medium">Simulated QR • Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
