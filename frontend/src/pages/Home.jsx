import { useEffect, useState } from 'react'
import '../styles/Home.css'

export default function Home() {
  const [stats, setStats] = useState({
    wordsLearned: 0,
    currentStreak: 0,
    lessonsCompleted: 0
  })

  useEffect(() => {
    // Fetch user stats from backend
    fetch('http://localhost:5000/api/progress/1')
      .then(res => res.json())
      .then(data => {
        console.log('Progress data:', data)
      })
      .catch(err => console.log('Error:', err))
  }, [])

  return (
    <div className="home-container">
      <h1>Welcome to SignFlow</h1>
      <p>Learn Australian Sign Language with interactive lessons and practice modes.</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Words Learned</h3>
          <p className="stat-number">{stats.wordsLearned}</p>
        </div>
        <div className="stat-card">
          <h3>Current Streak</h3>
          <p className="stat-number">{stats.currentStreak} days</p>
        </div>
        <div className="stat-card">
          <h3>Lessons Completed</h3>
          <p className="stat-number">{stats.lessonsCompleted}</p>
        </div>
      </div>

      <div className="quick-actions">
        <a href="/learn" className="btn btn-primary">Start Learning</a>
        <a href="/dictionary" className="btn btn-secondary">Browse Dictionary</a>
        <a href="/practice" className="btn btn-secondary">Practice Now</a>
      </div>
    </div>
  )
}
