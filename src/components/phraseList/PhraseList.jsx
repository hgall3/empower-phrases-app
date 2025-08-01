import "../phraseList/PhraseList.scss"
import DeletePhrase from "../deletePhrase/DeletePhrase.jsx"

function PhraseList({ phrases, onDeletePhrase }) {
    return (
      <div className="phrase-list">
        {phrases.length === 0 ? (
          <p className="empty-message">No phrases yet!</p>
        ) : (
          phrases.map((phrase) => (
            <div key={phrase.id} className='phrase-card'>
              <p className='phrase-text'>"{phrase.text}"</p>
              <p className='  '>— {phrase.author || "Anonymous"}</p>
              <DeletePhrase id={phrase.id} onDelete={onDeletePhrase} />
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default PhraseList;
  