import '../styles/Pages.css'

export default function Practice() {
  return (
    <div className="container">
      <h1>Practice Modes</h1>
      <div className="practice-modes">
        <div className="practice-card">
          <h3>🎯 Recognition Practice</h3>
          <p>App shows a sign and you identify the word.</p>
          <button className="btn btn-primary">Start Recognition</button>
        </div>
        <div className="practice-card">
          <h3>🎥 Production Practice</h3>
          <p>You perform the sign and get AI feedback.</p>
          <button className="btn btn-primary">Start Production</button>
        </div>
        <div className="practice-card">
          <h3>💬 Conversation Scenarios</h3>
          <p>Practice real-world signing conversations.</p>
          <button className="btn btn-primary">Start Conversation</button>
        </div>
      </div>
    </div>
  )
}
