import { useEffect, useState } from 'react'

export default function Announcements(){
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async ()=>{
    try{
      const res = await fetch(`${backend}/api/announcements`)
      const data = await res.json()
      setItems(Array.isArray(data)? data: [])
    }catch(e){ console.error(e) }
  })() },[backend])

  return (
    <section className="py-16" id="announcements">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Duyurular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(a => (
            <div key={a.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {a.cover_url && <img src={a.cover_url} alt={a.title} className="w-full h-40 object-cover" />}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-slate-700">{a.content}</p>
              </div>
            </div>
          ))}
          {items.length===0 && (
            <div className="text-slate-600">Henüz duyuru bulunmuyor.</div>
          )}
        </div>
      </div>
    </section>
  )
}
