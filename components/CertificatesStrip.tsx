type CertificatesStripProps = {
  className?: string;
};

export default function CertificatesStrip({ className = '' }: CertificatesStripProps) {
  return (
    <section className={`w-full bg-white py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-4">
          <img
            src="/certificaten/longcertlist1000x200.jpg"
            alt="Overzicht van certificeringen en keurmerken"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
