import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Dictionary from './pages/Dictionary'
import Practice from './pages/Practice'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">🤟 SignFlow</h1>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/learn">Learn</a></li>
              <li><a href="/dictionary">Dictionary</a></li>
              <li><a href="/practice">Practice</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
