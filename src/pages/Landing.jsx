import { useState } from 'react'
import AuthPanel from '../components/AuthPanel'

export default function Landing() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-200 relative overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -inset-40 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(800px_400px_at_90%_120%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize:'cover', backgroundPosition:'center', opacity:.25}} />
      </div>

      {/* Hero */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-emerald-400 font-semibold">GAT - GODSLOVE AUTOMATED TRADING</div>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">Professional Automated Trading Platform</h1>
            <p className="mt-4 text-gray-300 max-w-prose">Arbitrage across 15+ exchanges, 10x futures leverage with risk controls, and institutional ICT/SMC forex strategies — unified in one powerful dashboard.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={()=>setAuthOpen(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg">Start Trading Now</button>
              <button onClick={()=>setAuthOpen(true)} className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-lg border border-gray-700">View Features</button>
            </div>

            {/* Feature icons */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                {label:'Arbitrage', icon:'💱'},
                {label:'Futures', icon:'📈'},
                {label:'Forex', icon:'🌐'},
              ].map((f,i)=> (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-2xl animate-pulse">{f.icon}</div>
                  <div>
                    <div className="text-white font-medium">{f.label}</div>
                    <div className="text-xs text-gray-400">Automated strategies</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
            <div className="text-emerald-400 font-semibold">Plans</div>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
                <div className="text-white font-semibold">Monthly</div>
                <div className="mt-2 text-3xl font-bold text-white">$299<span className="text-base text-gray-400 font-medium">/month</span></div>
                <ul className="mt-3 text-sm text-gray-400 space-y-1">
                  <li>• 5% withdrawal fee</li>
                  <li>• Arbitrage, Futures, Forex</li>
                  <li>• 24/7 monitoring</li>
                </ul>
                <button onClick={()=>setAuthOpen(true)} className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2">Start Plan</button>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-gray-950 p-5 relative">
                <span className="absolute -top-2 right-3 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded">POPULAR</span>
                <div className="text-white font-semibold">Annual</div>
                <div className="mt-2 text-3xl font-bold text-white">$2,999<span className="text-base text-gray-400 font-medium">/year</span></div>
                <ul className="mt-3 text-sm text-gray-400 space-y-1">
                  <li>• 3% withdrawal fee</li>
                  <li>• 2 months free</li>
                  <li>• Priority support</li>
                </ul>
                <button onClick={()=>setAuthOpen(true)} className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2">Start Plan</button>
              </div>
            </div>

            {/* Advanced features */}
            <div className="mt-6">
              <div className="text-white font-semibold mb-2">Advanced Trading Features</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {title:'Arbitrage', pts:['15+ exchanges','Real-time scanning']},
                  {title:'Futures', pts:['10x leverage','Risk management']},
                  {title:'Forex', pts:['ICT/SMC methodology','Liquidity zones']},
                ].map((s,i)=> (
                  <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                    <div className="text-emerald-400 font-medium">{s.title}</div>
                    <ul className="mt-2 text-sm text-gray-400 space-y-1">
                      {s.pts.map((p,idx)=>(<li key={idx}>• {p}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthPanel open={authOpen} onClose={()=>setAuthOpen(false)} />
    </div>
  )
}
