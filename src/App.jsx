import Navbar from './components/Navbar'
import ThreeHero from './components/ThreeHero'
import ApplicationForm from './components/ApplicationForm'
import Board from './components/Board'
import Events from './components/Events'
import Announcements from './components/Announcements'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar/>
      <main>
        <ThreeHero/>
        <section id="about" className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Neler Yapıyoruz?</h2>
            <p className="mt-3 text-slate-700">Etkinlikler, atölyeler, yarışma hazırlıkları ve topluluk projeleriyle aktif bir kulüp deneyimi sunuyoruz. 3D web deneyimi ile çalışmalarımızı etkileyici bir şekilde sergiliyoruz.</p>
          </div>
        </section>
        <Board/>
        <Events/>
        <Announcements/>
        <ApplicationForm/>
        <footer className="py-10 border-t bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Okul Kulübü. Tüm hakları saklıdır.</p>
            <a href="/test" className="underline">Sistem Durumu</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
