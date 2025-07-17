import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { blink } from './blink/client'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import FindWorkPage from './pages/FindWorkPage'
import FindTalentPage from './pages/FindTalentPage'
import JobDetailsPage from './pages/JobDetailsPage'
import FreelancerProfilePage from './pages/FreelancerProfilePage'
import DashboardPage from './pages/DashboardPage'
import MessagesPage from './pages/MessagesPage'
import ProposalsPage from './pages/ProposalsPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to FreelanceHub</h1>
          <p className="text-xl text-gray-600 mb-8">Connect with top talent or find your next opportunity</p>
          <button 
            onClick={() => blink.auth.login()}
            className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-work" element={<FindWorkPage />} />
            <Route path="/find-talent" element={<FindTalentPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/freelancer/:id" element={<FreelancerProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App