import { QrCode, MessageSquare, Barcode, CreditCard, ShieldCheck, Database } from "lucide-react";

const features = [
  {
    icon: Barcode,
    title: "Fast barcode scanning",
    desc: "UPC, EAN, and Code128 supported with instant add-to-bill.",
  },
  {
    icon: QrCode,
    title: "QR payments",
    desc: "Generate dynamic payment QR codes and track status in real-time.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp bills",
    desc: "Send itemized bills and payment links directly to customers.",
  },
  {
    icon: CreditCard,
    title: "Multiple methods",
    desc: "Accept UPI, cards, and cash with clear reconciliation.",
  },
  {
    icon: Database,
    title: "Customer history",
    desc: "Build a secure database of repeat customers and purchases.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & compliant",
    desc: "Encryption, RBAC, and audit logs for peace of mind.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need at the counter</h2>
          <p className="mt-3 text-gray-600">Designed for speed, reliability, and delightful customer experiences.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
