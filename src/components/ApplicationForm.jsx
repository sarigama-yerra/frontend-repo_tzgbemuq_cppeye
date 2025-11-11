import { useState } from 'react'

export default function ApplicationForm(){
  const [form, setForm] = useState({
    full_name: '', email: '', student_id: '', department: '', interests: '', motivation: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try{
      const payload = {
        ...form,
        interests: form.interests ? form.interests.split(',').map(s=>s.trim()).filter(Boolean) : []
      }
      const res = await fetch(`${backend}/api/applications`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Başvuru gönderilemedi')
      setResult({type:'success', message:'Başvurun başarıyla alındı. Teşekkürler!'})
      setForm({full_name:'', email:'', student_id:'', department:'', interests:'', motivation:''})
    }catch(err){
      setResult({type:'error', message: err.message})
    }finally{
      setLoading(false)
    }
  }

  const set = (k)=>(e)=> setForm(prev=>({...prev, [k]: e.target.value}))

  return (
    <section id="apply" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">Üye Başvuru Formu</h2>
        <p className="text-slate-600 mt-2">Kulübümüze katılmak için formu doldurun. En kısa sürede dönüş yapacağız.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" placeholder="Ad Soyad" value={form.full_name} onChange={set('full_name')} required />
          <input className="input" placeholder="E-posta" type="email" value={form.email} onChange={set('email')} required />
          <input className="input" placeholder="Öğrenci No" value={form.student_id} onChange={set('student_id')} required />
          <input className="input" placeholder="Bölüm" value={form.department} onChange={set('department')} required />
          <input className="input md:col-span-2" placeholder="İlgi Alanları (virgülle)" value={form.interests} onChange={set('interests')} />
          <textarea className="textarea md:col-span-2" rows="4" placeholder="Motivasyon / Notlar" value={form.motivation} onChange={set('motivation')} />
          <button disabled={loading} className="md:col-span-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 disabled:opacity-60">{loading? 'Gönderiliyor...' : 'Başvuruyu Gönder'}</button>
        </form>
        {result && (
          <div className={`mt-4 p-3 rounded-md border ${result.type==='success'? 'bg-green-50 border-green-200 text-green-800':'bg-red-50 border-red-200 text-red-800'}`}>
            {result.message}
          </div>
        )}
      </div>
    </section>
  )
}

