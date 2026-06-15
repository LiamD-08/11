import { useEffect, useState } from 'react'
import '../styles/Pages.css'

export default function Dictionary() {
  const [signs, setSigns] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/signs')
      .then(res => res.json())
      .then(data => {
        setSigns(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching signs:', err)
        setLoading(false)
      })
  }, [])

  const filteredSigns = signs.filter(sign =>
    sign.english_word?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="container"><p>Loading dictionary...</p></div>

  return (
    <div className="container">
      <h1>Sign Dictionary</h1>
      <input
        type="text"
        placeholder="Search signs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="signs-grid">
        {filteredSigns.map(sign => (
          <div key={sign.sign_id} className="sign-card">
            <h3>{sign.english_word}</h3>
            <p><strong>Auslan:</strong> {sign.auslan_name}</p>
            {sign.movement_description && <p><strong>Movement:</strong> {sign.movement_description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
