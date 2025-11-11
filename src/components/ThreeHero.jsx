import Spline from '@splinetool/react-spline'

export default function ThreeHero(){
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/8P72kz2m5iFv3e0e/scene.splinecode" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 pt-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
          Kulübümüze Hoş Geldiniz
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700 text-lg">
          3D etkileşimli web deneyimi ile etkinliklerimizi, duyurularımızı ve yönetimimizi keşfedin.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#apply" className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700">Üye Ol</a>
          <a href="#about" className="bg-white text-slate-800 px-5 py-3 rounded-md border border-slate-200 hover:bg-slate-50">Hakkımızda</a>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="text-slate-600 text-sm bg-white/70 px-3 py-1 rounded-full border">3D sahne Spline ile render ediliyor</div>
      </div>
    </section>
  )
}
