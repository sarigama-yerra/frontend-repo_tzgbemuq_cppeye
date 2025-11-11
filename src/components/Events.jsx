import { useEffect, useState } from 'react'

export default function Events(){
  const [events, setEvents] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async ()=>{
    try{
      const res = await fetch(`${backend}/api/events`)
      const data = await res.json()
      setEvents(Array.isArray(data)? data: [])
    }catch(e){ console.error(e) }
  })() },[backend])

  return (
    <section className="py-16 bg-slate-50" id="events">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Etkinlikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(ev => (
            <div key={ev.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {ev.banner_url && <img src={ev.banner_url} alt={ev.title} className="w-full h-40 object-cover" />}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{ev.title}</h3>
                {ev.start_time && <p className="text-sm text-slate-600 mt-1">{new Date(ev.start_time).toLocaleString()}</p>}
                {ev.location && <p className="text-sm text-slate-600">{ev.location}</p>}
                {ev.description && <p className="mt-2 text-slate-700">{ev.description}</p>}
              </div>
            </div>
          ))}
          {events.length===0 && (
            <div className="text-slate-600">Henüz yayınlanmış etkinlik yok.</div>
          )}
        </div>
      </div>
    </section>
  )
}
