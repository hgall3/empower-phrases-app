import './PhraseList.scss'
import deleteIcon from "../../assets/trash.svg"; 

function PhraseList({ phrases, setPhrases }) {
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
            <p className="phrase-text">"{phrase.text}"</p>
            <p className="phrase-author">— {phrase.author || "Anonymous"}</p>

            <div className="phrase-buttons">
              {/* <button onClick={() => handleDelete(phrase.id)}>
                <img src={deleteIcon} alt="Delete" />
              </button> */}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default PhraseList