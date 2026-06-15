import '../styles/Pages.css'

export default function Profile() {
  return (
    <div className="container">
      <h1>My Profile</h1>
      <div className="profile-container">
        <div className="profile-section">
          <h2>Account Information</h2>
          <p><strong>Email:</strong> user@example.com</p>
          <p><strong>Proficiency Level:</strong> Beginner</p>
          <p><strong>Member Since:</strong> June 2024</p>
        </div>
        <div className="profile-section">
          <h2>Learning Goals</h2>
          <ul>
            <li>Learn 500 signs</li>
            <li>Complete beginner curriculum</li>
            <li>Maintain 30-day streak</li>
          </ul>
        </div>
        <div className="profile-section">
          <h2>Achievements</h2>
          <p>🏆 Getting Started - Completed first lesson</p>
        </div>
      </div>
    </div>
  )
}
