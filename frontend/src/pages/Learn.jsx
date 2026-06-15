import { useEffect, useState } from 'react'
import '../styles/Pages.css'

export default function Learn() {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/lessons')
      .then(res => res.json())
      .then(data => {
        setLessons(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching lessons:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="container"><p>Loading lessons...</p></div>

  return (
    <div className="container">
      <h1>Lessons</h1>
      {lessons.length === 0 ? (
        <p>No lessons available yet. Check back soon!</p>
      ) : (
        <div className="lessons-grid">
          {lessons.map(lesson => (
            <div key={lesson.lesson_id} className="lesson-card">
              <h3>{lesson.title}</h3>
              <p><strong>Level:</strong> {lesson.level}</p>
              <p><strong>Category:</strong> {lesson.category}</p>
              <button className="btn btn-small">Start Lesson</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
