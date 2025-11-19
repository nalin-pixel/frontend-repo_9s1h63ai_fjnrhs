import { useState } from 'react'
import Layout from '../components/Layout'

const COINS = [
  { sym:'USDT', net:'TRC20', fee:'1 USDT', min:'10 USDT' },
  { sym:'USDC', net:'ERC20', fee:'5 USDC', min:'20 USDC' },
  { sym:'BTC', net:'BTC', fee:'0.0002 BTC', min:'0.0005 BTC' },
  { sym:'ETH', net:'ERC20', fee:'0.003 ETH', min:'0.01 ETH' },
  { sym:'BNB', net:'BEP20', fee:'0.001 BNB', min:'0.01 BNB' },
  { sym:'ADA', net:'ADA', fee:'1 ADA', min:'10 ADA' },
]

export default function Wallet() {
  const [tab, setTab] = useState('Deposit')
  const [selected, setSelected] = useState(COINS[0])
  const [conv, setConv] = useState({ from:'USDT', to:'BTC'})

  return (
    <Layout>
      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Portfolio Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="text-white font-semibold">Portfolio Overview</div>
            <div className="mt-1 text-sm text-gray-400">Total Value: <span className="text-white font-semibold">$166,389.6</span> — +12.5% from last month / +$8,247.32 this month</div>
          </div>

          {/* Asset Holdings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['USDT','BTC','ETH','BNB','ADA','SOL'].map((a)=> (
              <div key={a} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-white font-medium">{a}</div>
                <div className="text-sm text-gray-400">Balance: 0.00</div>
                <div className="text-sm text-gray-400">USD Value: $0.00</div>
                <div className={`text-sm ${Math.random()>0.5?'text-emerald-400':'text-red-400'}`}>{Math.random()>0.5?'+':'-'}{(Math.random()*3).toFixed(2)}%</div>
              </div>
            ))}
          </div>

          {/* Deposit & Withdraw */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm">
              {['Deposit','Withdraw'].map(t => (
                <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md border ${tab===t?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
              ))}
            </div>

            <div className="mt-4 grid lg:grid-cols-3 gap-4">
              {/* Crypto selection */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                <div className="border border-gray-800 rounded-lg p-3 overflow-auto max-h-64">
                  {COINS.map(c => (
                    <button key={c.sym} onClick={()=>setSelected(c)} className={`w-full text-left px-3 py-2 rounded-md mb-1 ${selected.sym===c.sym?'bg-gray-800 text-white':'text-gray-300 hover:bg-gray-800/60'}`}>
                      <div className="font-medium">{c.sym}</div>
                      <div className="text-xs text-gray-400">{c.sym}/{c.net}</div>
                    </button>
                  ))}
                </div>
                <div className="border border-gray-800 rounded-lg p-3">
                  <div className="text-white font-medium">{selected.sym}/{selected.net}</div>
                  <div className="text-sm text-gray-400">Network Fee: <span className="text-white">{selected.fee}</span></div>
                  <div className="text-sm text-gray-400">Min Deposit: <span className="text-white">{selected.min}</span></div>
                </div>

                {/* Forms */}
                <div className="md:col-span-2 border border-gray-800 rounded-lg p-3">
                  {tab==='Deposit' ? (
                    <div className="space-y-3">
                      <div className="text-sm text-gray-400">Deposit Address</div>
                      <div className="bg-gray-950 border border-gray-800 rounded-md p-2 text-white">TTRC20exampleaddress1234567890</div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-300 mb-1">Amount</label>
                          <input type="number" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="0.00" />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-300 mb-1">Payment Proof</label>
                          <input type="file" className="w-full text-sm text-gray-300" />
                        </div>
                      </div>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-2">Submit Deposit</button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-300 mb-1">Withdrawal Address</label>
                          <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="0x..." />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-300 mb-1">Amount</label>
                          <input type="number" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="0.00" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">Available: 0.00 — Min withdrawal applies</div>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-2">Submit Withdrawal</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Convert crypto */}
              <div className="border border-gray-800 rounded-lg p-3">
                <div className="text-white font-semibold">Convert Crypto</div>
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">From</label>
                    <select value={conv.from} onChange={(e)=>setConv(v=>({...v,from:e.target.value}))} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      {COINS.map(c=> (<option key={c.sym}>{c.sym}</option>))}
                    </select>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={()=>setConv(v=>({from:v.to,to:v.from}))} className="text-gray-400 hover:text-white">⇅ Swap</button>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">To</label>
                    <select value={conv.to} onChange={(e)=>setConv(v=>({...v,to:e.target.value}))} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      {COINS.map(c=> (<option key={c.sym}>{c.sym}</option>))}
                    </select>
                  </div>

                  <div className="border-t border-gray-800 pt-3">
                    <div className="text-xs text-gray-400">Recent Conversions</div>
                    <div className="mt-2 space-y-2 text-sm">
                      {[
                        {amt:'100', pair:'USDT → BTC', status:'Completed'},
                        {amt:'50', pair:'USDT → ETH', status:'Pending'},
                      ].map((r,i)=> (
                        <div key={i} className="flex items-center justify-between bg-gray-950 rounded-md p-2 border border-gray-800">
                          <div className="text-gray-300">{r.amt}</div>
                          <div className="text-gray-400">{r.pair}</div>
                          <div className={`text-xs ${r.status==='Completed'?'text-emerald-400':'text-yellow-400'}`}>{r.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">Transaction History</div>
              <div className="flex items-center gap-2">
                <input placeholder="Search" className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white" />
                {['All','Deposits','Withdrawals','Transfers'].map(t => (
                  <button key={t} className={`px-3 py-1.5 rounded-md border text-sm ${t==='All'?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className="mt-4 hidden md:grid grid-cols-12 text-xs text-gray-400 px-2">
              <div className="col-span-3">Type</div>
              <div className="col-span-3">Asset</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Date</div>
            </div>
            {[{
              type:'Deposit', asset:'BTC', amount:'+0.01', status:'Completed', date:'2025-01-05'
            },{
              type:'Withdrawal', asset:'ETH', amount:'-0.2', status:'Pending', date:'2025-01-04'
            },{
              type:'Deposit', asset:'BNB', amount:'+1', status:'Completed', date:'2025-01-03'
            },{
              type:'Transfer', asset:'USDT', amount:'-100', status:'Failed', date:'2025-01-02'
            },{
              type:'Deposit', asset:'SOL', amount:'+2', status:'Completed', date:'2025-01-01'
            }].map((r,i)=> (
              <div key={i} className="mt-2 border border-gray-800 rounded-lg p-3 md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-3 text-white font-medium">{r.type}</div>
                <div className="md:col-span-3 text-gray-300">{r.asset}</div>
                <div className="md:col-span-2 text-gray-300">{r.amount}</div>
                <div className={`md:col-span-2 ${r.status==='Completed'?'text-emerald-400':r.status==='Pending'?'text-yellow-400':'text-red-400'}`}>{r.status}</div>
                <div className="md:col-span-2 text-gray-400">{r.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar spacing with nothing to keep grid intact on xl */}
        <div className="xl:col-span-1" />
      </div>
    </Layout>
  )
}
