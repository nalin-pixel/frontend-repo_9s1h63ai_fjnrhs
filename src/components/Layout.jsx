import { NavLink, useLocation } from 'react-router-dom'

function cnActive({ isActive }) {
  return `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'}`
}

export default function Layout({ children }) {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <header className="sticky top-0 z-40 border-b border-gray-800 backdrop-blur bg-black/70">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">G</div>
            <div className="font-semibold tracking-wide">TradePro</div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/dashboard" className={cnActive}>Dashboard</NavLink>
            <NavLink to="/arbitrage" className={cnActive}>Arbitrage</NavLink>
            <NavLink to="/futures" className={cnActive}>Futures</NavLink>
            <NavLink to="/forex" className={cnActive}>Forex</NavLink>
            <NavLink to="/wallet" className={cnActive}>Wallet</NavLink>
            <NavLink to="/admin" className={cnActive}>Admin</NavLink>
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <button className="px-2 py-1 rounded-md hover:bg-gray-800">🔔</button>
            <div className="text-sm text-gray-400">test@gmail.com</div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
