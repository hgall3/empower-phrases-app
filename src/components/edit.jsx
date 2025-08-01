<PhraseList phrases={phrases} setPhrases={setPhrases} />

import { useState } from 'react'
import './edit.scss'
import editIcon from '../assets/edit2.svg'
import saveIcon from '../assets/save.svg'

const Edit = ({ phrases, setPhrases }) => {
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

  return (
    <div className="edit-wrapper">
      {phrases.map((phrase) => (
        <div key={phrase.id} className="edit-card">
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
            <div className="edit-fields">
              <input type="text" value={phrase.text} readOnly />
              <input type="text" value={phrase.author} readOnly />
            </div>
          )}

          <div className="edit-buttons">
            <button onClick={() => handleEdit(phrase.id)}>
              <img src={editIcon} alt="Edit" />
            </button>
            <button
              onClick={() => handleSave(phrase.id)}
              disabled={editingId !== phrase.id}
            >
              <img src={saveIcon} alt="Save" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Edit