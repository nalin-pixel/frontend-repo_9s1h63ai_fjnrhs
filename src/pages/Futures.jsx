import Layout from '../components/Layout'

export default function Futures() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart + indicators */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-sm text-white">
                <option>BTC/USDT</option>
                <option>ETH/USDT</option>
                <option>SOL/USDT</option>
              </select>
              <div className="flex items-center gap-2 text-xs">
                {['1M','1W','1D','4H','1H','15M','5M','1M'].map(t => (
                  <button key={t} className={`px-3 py-1.5 rounded-md border ${t==='1H'?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="mt-3 h-80 bg-gray-950 border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              TradingView Chart Placeholder
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {[{k:'RSI',v:'72.5',s:'Overbought'},{k:'MACD',v:'+125.8',s:'Bullish'},{k:'MA(200)',v:'Price>MA',s:'Uptrend'},{k:'Vol',v:'High',s:'Rising'}].map((i,idx)=> (
                <div key={idx} className="bg-gray-950 border border-gray-800 rounded-md p-3">
                  <div className="text-sm text-gray-400">{i.k}</div>
                  <div className="text-white font-semibold">{i.v}</div>
                  <div className="text-xs text-emerald-400">{i.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Position Manager */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-white font-semibold">Position Manager</div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              {['Open Positions (2)','Pending Orders (1)','Closed Positions (2)'].map((t,i)=> (
                <button key={i} className={`px-3 py-1.5 rounded-md border ${i===0?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
              ))}
            </div>
            {[{sym:'BTCUSDT', side:'Long', lev:'10x', pnl:'+75.00 USDT / +0.35%', size:'0.5', entry:'42000', mark:'42120', margin:'200', sl:'41000'}, {sym:'ETHUSDT', side:'Short', lev:'10x', pnl:'-12.50 USDT / -0.10%', size:'2', entry:'2300', mark:'2310', margin:'150', sl:'2350'}].map((p,idx)=> (
              <div key={idx} className="mt-3 border border-gray-800 rounded-lg p-3">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-white font-semibold">{p.sym} {p.side} {p.lev}</div>
                  <div className={`text-sm ${p.pnl.includes('+')?'text-emerald-400':'text-red-400'}`}>{p.pnl}</div>
                </div>
                <div className="mt-2 grid sm:grid-cols-3 lg:grid-cols-6 gap-2 text-sm text-gray-300">
                  <div>Size: {p.size}</div>
                  <div>Entry: {p.entry}</div>
                  <div>Mark: {p.mark}</div>
                  <div>Margin: {p.margin}</div>
                  <div>Stop Loss: {p.sl}</div>
                  <div className="space-x-2">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-2 py-1 border border-gray-700">Close</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-2 py-1 border border-gray-700">Update SL</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-2 py-1 border border-gray-700">Add TP</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trade History */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-white font-semibold">Trade History</div>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div className="bg-gray-950 border border-gray-800 rounded-md p-3"><div className="text-gray-400 text-xs">Total Trades</div><div className="text-white font-semibold">5</div></div>
              <div className="bg-gray-950 border border-gray-800 rounded-md p-3"><div className="text-gray-400 text-xs">Total P&L</div><div className="text-emerald-400 font-semibold">+$464.50</div></div>
              <div className="bg-gray-950 border border-gray-800 rounded-md p-3"><div className="text-gray-400 text-xs">Win Rate</div><div className="text-white font-semibold">80.0%</div></div>
              <div className="bg-gray-950 border border-gray-800 rounded-md p-3"><div className="text-gray-400 text-xs">Winning Trades</div><div className="text-white font-semibold">4</div></div>
            </div>
            {[{sym:'BTCUSDT Long', res:'TP / +225.00 USDT', entry:'42000', exit:'42500', dur:'2h', close:'2025-01-05 14:20'},
              {sym:'SOLUSDT Long', res:'SL / -43.00 USDT', entry:'100', exit:'95', dur:'1h', close:'2025-01-05 10:00'}].map((t,idx)=> (
              <div key={idx} className="mt-3 border border-gray-800 rounded-lg p-3 text-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-white font-medium">{t.sym}</div>
                  <div className={`${t.res.includes('+')?'text-emerald-400':'text-red-400'}`}>{t.res}</div>
                </div>
                <div className="text-gray-400">Entry: {t.entry} • Exit: {t.exit} • Duration: {t.dur} • Close: {t.close}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings + Risk */}
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-white font-semibold">Trading Settings</div>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                {['Long Only','Short Only','Both'].map((t,i)=> (
                  <button key={t} className={`px-3 py-1.5 rounded-md border ${i===0?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Position Size</label>
                  <input className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white" placeholder="0.1%" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Max Position Cap</label>
                  <input className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white" placeholder="$20" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Max Total Risk</label>
                  <input className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white" placeholder="2%" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Leverage</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"><option>10x</option><option>5x</option><option>2x</option></select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {['Limit Order','Market Order'].map((t,i)=> (
                  <button key={t} className={`px-3 py-1.5 rounded-md border ${i===0?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
                ))}
              </div>
              <div className="space-y-1 text-xs text-gray-400">
                <label className="flex items-center gap-2"><input defaultChecked type="checkbox" className="accent-emerald-600" /> Auto Analysis</label>
                <label className="flex items-center gap-2"><input defaultChecked type="checkbox" className="accent-emerald-600" /> Risk Management</label>
                <label className="flex items-center gap-2"><input defaultChecked type="checkbox" className="accent-emerald-600" /> Strategic SL Updates</label>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-white font-semibold">Risk Manager</div>
            <div className="mt-3 text-sm text-gray-300 space-y-2">
              <div>Total: $10,000 • Available: $8,500 • Unrealized PnL: <span className="text-emerald-400">+ $95</span></div>
              <div>
                <div className="text-xs text-gray-400">Total Risk Used (1.2% / 2%)</div>
                <div className="h-2 bg-gray-800 rounded"><div className="h-2 bg-emerald-600 rounded" style={{width:'60%'}} /></div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Position Count (2 / 20)</div>
                <div className="h-2 bg-gray-800 rounded"><div className="h-2 bg-emerald-600 rounded" style={{width:'10%'}} /></div>
              </div>
              <div className="text-xs text-gray-400">Secured: 1 • Unsecured: 1</div>
              <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                <li>Max 1–2% risk per trade</li>
                <li>Min R:R = 1:3</li>
                <li>Avoid trading during low-liquidity</li>
              </ul>
              <div className="flex items-center gap-2">
                <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 border border-gray-700">Close All Positions</button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 border border-gray-700">Secure All Profits</button>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded-md px-3 py-1.5">Pause Trading</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
