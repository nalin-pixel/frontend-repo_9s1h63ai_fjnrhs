import Layout from '../components/Layout'
import { useState } from 'react'

const sessions = [
  { name:'Sydney', status:'Closed', vol:'Low' },
  { name:'Tokyo', status:'Active', vol:'High' },
  { name:'London', status:'Active', vol:'Very High' },
  { name:'New York', status:'Opening', vol:'High' },
]

export default function Forex() {
  const [pair, setPair] = useState('EURUSD')
  const [tab, setTab] = useState('All')
  const [rulesTab, setRulesTab] = useState('Psychology')

  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pair Analysis & Active Setups */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">Trading Sessions</div>
              <div className="text-sm text-gray-400">Current Time: 18:35:39</div>
            </div>
            <div className="mt-3 grid sm:grid-cols-4 gap-3">
              {sessions.map((s,i)=> (
                <div key={i} className="bg-gray-950 border border-gray-800 rounded-md p-3">
                  <div className="text-white font-medium">{s.name}</div>
                  <div className={`text-xs ${s.status==='Active'?'text-emerald-400':s.status==='Opening'?'text-yellow-400':'text-gray-400'}`}>{s.status}</div>
                  <div className="text-xs text-gray-400">Volume: {s.vol}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-sm text-emerald-400">Tokyo + London Overlap: Prime Time / High Volatility</div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex flex-wrap items-center gap-2">
              {['EURUSD','USDCHF','GBPUSD','XAUUSD'].map(p => (
                <button key={p} onClick={()=>setPair(p)} className={`px-3 py-1.5 rounded-md border ${pair===p?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{p}</button>
              ))}
            </div>
            <div className="mt-3 bg-gray-950 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 space-y-1">
              <div><span className="text-gray-400">Session:</span> London</div>
              <div><span className="text-gray-400">Bias:</span> Bullish</div>
              <div><span className="text-gray-400">Setup:</span> FVG + OB + Liquidity Sweep</div>
              <div><span className="text-gray-400">Correlation:</span> DXY Bearish</div>
              <div><span className="text-gray-400">Behavior:</span> Trend continuation after retrace</div>
              <div className="pt-2 border-t border-gray-800">
                <div className="text-white font-medium">Current Setup</div>
                <div>Entry: 1.0860 • SL: 1.0830 • TP: 1.0950 • R:R 1:3</div>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Wait for displacement and FVG creation</li>
                  <li>Refine entry on lower TF orderblock</li>
                  <li>Secure partials at 1:2, trail to BE</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm">
              {['All','Active','Waiting','Closed'].map(t => (
                <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md border ${tab===t?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
              ))}
            </div>
            <div className="mt-3 grid gap-3">
              {[{title:'EURUSD Waiting for FVG Retest', status:'Waiting', info:'Entry 1.0860 / SL 1.0830 / TP 1.0950 / R:R 1:3', conf:'DXY Bearish, London Sweep'},
                {title:'XAUUSD Active Long', status:'Active', info:'Entry 2380 / SL 2368 / TP 2420 / R:R 1:3', conf:'London Momentum, USD Weakness'},
                {title:'GBPUSD Closed Short', status:'Closed', info:'+120 pips', conf:'NY Reversal'}].map((s,i)=> (
                <div key={i} className="border border-gray-800 rounded-lg p-3 bg-gray-950">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-white font-medium">{s.title}</div>
                    <div className={`${s.status==='Active'?'text-emerald-400':s.status==='Waiting'?'text-yellow-400':'text-gray-400'} text-sm`}>{s.status}</div>
                  </div>
                  <div className="text-sm text-gray-400">{s.info}</div>
                  <div className="text-xs text-gray-500">Confluence: {s.conf}</div>
                  <div className="mt-2 space-x-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded-md px-3 py-1.5">Execute</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 border border-gray-700">Cancel</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 border border-gray-700">Modify</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm">
              {['Framework','Liquidity','Entry','Risk','Psychology'].map(t => (
                <button key={t} onClick={()=>setRulesTab(t)} className={`px-3 py-1.5 rounded-md border ${rulesTab===t?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
              ))}
            </div>
            <div className="mt-3 text-sm text-gray-300 space-y-2">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Wait for session-specific liquidity sweep.</li>
                <li>Identify displacement and FVG.</li>
                <li>Refine entry on 1M-15M TF.</li>
                <li>Risk 1-2% per trade, min R:R 1:3.</li>
                <li>Secure partials at 1:2, trail to BE.</li>
              </ol>
              <div className="bg-gray-950 border border-gray-800 rounded-md p-3 text-xs text-gray-400">
                Max Daily Trades: 3 • Risk/Trade: 1–2% • Min R:R: 1:3 • Execution TF: 1M–15M
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
