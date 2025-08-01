import { useState } from 'react'
import editIcon from "../../assets/edit.svg";
import './EditPhrase.scss';

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
    if (!editText.trim()) {
      alert('Please fill out the quote.')
      return
    }

    // Si no hay autor, poner 'Anonymous'
    const authorToSave = editAuthor.trim() ? editAuthor : 'Anonymous'

    const updated = phrases.map(p =>
      p.id === id ? { ...p, text: editText, author: authorToSave } : p
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
            <button onClick={() => handleEdit(phrase.id)} className="edit-button circular">
              <img src={editIcon} alt="Edit" />
            </button>

            <button
              onClick={() => handleSave(phrase.id)}
              disabled={editingId !== phrase.id}
              className="save-button circle"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Edit