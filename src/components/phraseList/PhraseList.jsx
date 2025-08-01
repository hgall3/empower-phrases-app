import { useState } from 'react'
import './PhraseList.scss'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'

function PhraseList({ phrases, setPhrases }) {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editAuthor, setEditAuthor] = useState('')

  const handleEdit = (id) => {
    const phrase = phrases.find(p => p.id === id)
    setEditingId(id)
    setEditText(phrase.text)
    setEditAuthor(phrase.author)
  }

  const handleSave = (id) => {
    if (!editText.trim() || !editAuthor.trim()) {
      alert('Please fill out both fields.')
      return
    }

    const updated = phrases.map(p =>
      p.id === id ? { ...p, text: editText, author: editAuthor } : p
    )
    setPhrases(updated)
    setEditingId(null)
    setEditText('')
    setEditAuthor('')
  }

  const handleDelete = (id) => {
    const updated = phrases.filter(p => p.id !== id)
    setPhrases(updated)
  }

  return (
    <div className="phrase-list">
      {phrases.length === 0 ? (
        <p className="empty-message">No phrases yet!</p>
      ) : (
        phrases.map((phrase) => (
          <div key={phrase.id} className="phrase-card">
            {editingId === phrase.id ? (
              <div className="edit-fields">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Write your quote here..."
                />
                <input
                  type="text"
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                  placeholder="Author goes here..."
                />
              </div>
            ) : (
              <>
                <p className="phrase-text">"{phrase.text}"</p>
                <p className="phrase-author">— {phrase.author || "Anonymous"}</p>
              </>
            )}

            <div className="phrase-buttons">
              <button onClick={() => handleEdit(phrase.id)}>
                <img src={editIcon} alt="Edit" />
              </button>
      
              <button
               onClick={() => handleSave(phrase.id)}
               disabled={editingId !== phrase.id}
               className="save-button"
                >
               Save
              </button>

              <button onClick={() => handleDelete(phrase.id)}>
                <img src={deleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default PhraseList