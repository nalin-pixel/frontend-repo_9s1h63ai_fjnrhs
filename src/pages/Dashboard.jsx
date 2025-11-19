import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[{
          title:'Total Balance', value:'$124,567.89', change:'+12.5%'
        },{
          title:"Today's P&L", value:'+\u0024 2,847.32', change:'+8.2%'
        },{
          title:'Active Trades', value:'23', change:'+3'
        },{
          title:'Win Rate', value:'78.5%', change:'+2.1%'
        }].map((c,i)=> (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-sm text-gray-400">{c.title}</div>
            <div className="mt-2 text-2xl font-bold text-white">{c.value}</div>
            <div className="mt-1 text-sm text-emerald-400">{c.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Wallet Overview */}
        <div className="lg:col-span-8 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">Wallet Overview</div>
              <div className="text-sm text-gray-400">Total Portfolio Value: <span className="text-white font-semibold">$167,948.23</span></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              {['1h','24h','7d','30d'].map((t)=> (
                <button key={t} className={`px-3 py-1.5 rounded-md border ${t==='24h'?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="mt-4 h-48 bg-gray-950 border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            Portfolio Performance Chart — integration coming soon
          </div>

          {/* Assets list */}
          <div className="mt-4">
            <div className="hidden md:grid grid-cols-12 text-xs text-gray-400 px-2">
              <div className="col-span-4">Asset</div>
              <div className="col-span-2">Balance</div>
              <div className="col-span-2">Value</div>
              <div className="col-span-2">24h Change</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            {[
              {name:'Arbitrage', path:'/arbitrage'},
              {name:'Forex', path:'/forex'},
              {name:'Futures', path:'/futures'},
            ].map((a,i)=> (
              <div key={i} className="mt-2 border border-gray-800 rounded-lg p-3 md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-4 text-white font-medium">{a.name}</div>
                <div className="md:col-span-2 text-gray-300">$0.00</div>
                <div className="md:col-span-2 text-gray-300">$0.00</div>
                <div className="md:col-span-2 text-emerald-400">+$0.00</div>
                <div className="md:col-span-2 md:text-right space-x-2 mt-2 md:mt-0">
                  <a href={a.path} className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-md px-3 py-1.5">Trade</a>
                  <button className="inline-block bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md px-3 py-1.5 border border-gray-700">Transfer</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div className="lg:col-span-8 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">Trading Modules</div>
              <div className="text-sm text-gray-400">Manage your automated trading strategies</div>
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md px-3 py-1.5 border border-gray-700">Configure All</button>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {[{
              name:'Arbitrage', status:'Active', profit:'+\u0024 1,234.56', active:'12 active'
            },{
              name:'Futures', status:'Active', profit:'+\u0024 2,847.32', active:'8 positions'
            },{
              name:'Forex', status:'Monitoring', profit:'+\u0024 567.89', active:'3 pairs'
            },{
              name:'Admin Panel', status:'Available', profit:'Full Control', active:'Access Level 5'
            }].map((m,i)=> (
              <div key={i} className="border border-gray-800 rounded-lg p-4 bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{m.name}</div>
                  <div className="text-xs text-emerald-400">{m.status}</div>
                </div>
                <div className="mt-2 text-emerald-400">{m.profit}</div>
                <div className="text-sm text-gray-400">{m.active}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Trades */}
        <div className="lg:col-span-4 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div className="text-white font-semibold">Recent Trades</div>
            <button className="text-sm text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs">
            {['All','Completed','Active','Pending'].map((t)=> (
              <button key={t} className={`px-3 py-1.5 rounded-md border ${t==='All'?'bg-gray-800 border-gray-700 text-white':'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/70'}`}>{t}</button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-400">No trades found</div>
        </div>
      </div>
    </Layout>
  )
}
