import { useEffect, useState } from 'react'

export default function Board(){
  const [members, setMembers] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async ()=>{
    try{
      const res = await fetch(`${backend}/api/board`)
      const data = await res.json()
      setMembers(Array.isArray(data)? data: [])
    }catch(e){ console.error(e) }
  })() },[backend])

  return (
    <section className="py-16" id="board">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Yönetim Kurulu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map(m=> (
            <div key={m.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center gap-4">
                <img src={m.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(m.name||'U')}`} alt={m.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-900">{m.name}</p>
                  <p className="text-slate-600 text-sm">{m.role}</p>
                </div>
              </div>
              {m.bio && <p className="mt-3 text-sm text-slate-700">{m.bio}</p>}
              {m.socials && (
                <div className="mt-3 flex gap-2 text-sm text-blue-700">
                  {Object.entries(m.socials).map(([k,v])=> v && <a key={k} href={v} target="_blank" className="underline">{k}</a>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
