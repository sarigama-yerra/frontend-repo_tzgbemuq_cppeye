import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-800 text-lg">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500"/> Club 3D
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={({isActive})=>`${linkBase} ${isActive? 'bg-blue-600 text-white':'text-slate-700 hover:bg-blue-100'}`}>Anasayfa</NavLink>
          <NavLink to="/board" className={({isActive})=>`${linkBase} ${isActive? 'bg-blue-600 text-white':'text-slate-700 hover:bg-blue-100'}`}>Yönetim</NavLink>
          <NavLink to="/events" className={({isActive})=>`${linkBase} ${isActive? 'bg-blue-600 text-white':'text-slate-700 hover:bg-blue-100'}`}>Etkinlikler</NavLink>
          <NavLink to="/announcements" className={({isActive})=>`${linkBase} ${isActive? 'bg-blue-600 text-white':'text-slate-700 hover:bg-blue-100'}`}>Duyurular</NavLink>
          <NavLink to="/apply" className={({isActive})=>`${linkBase} ${isActive? 'bg-green-600 text-white':'text-white bg-green-600 hover:bg-green-700'}`}>Üye Ol</NavLink>
        </nav>
      </div>
    </header>
  )
}
