import { useState } from 'react'
import { api, setAuthToken } from '../lib/api'

export default function AuthPanel({ open, onClose }) {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'register') {
        await api.register(email, password)
        setMode('login')
      } else {
        const data = await api.login(email, password)
        if (data?.access_token) {
          setAuthToken(data.access_token)
          window.location.href = '/dashboard'
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-gray-900 border-l border-gray-800 shadow-2xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-5 border-b border-gray-800 flex items-center justify-between">
            <div className="text-emerald-400 font-semibold tracking-wide">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>

          <div className="p-6 space-y-6 overflow-auto">
            <div>
              <div className="text-2xl font-bold text-white mb-1">GAT Access</div>
              <div className="text-sm text-gray-400">Sign in to continue to your dashboard</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="••••••••" />
              </div>

              {error && <div className="text-sm text-red-400">{error}</div>}

              <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold rounded-lg px-4 py-2 transition">
                {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            <div className="text-sm text-gray-400">
              {mode === 'login' ? (
                <>Don't have an account? <button onClick={()=>setMode('register')} className="text-emerald-400 hover:underline">Create one</button></>
              ) : (
                <>Already have an account? <button onClick={()=>setMode('login')} className="text-emerald-400 hover:underline">Sign in</button></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
