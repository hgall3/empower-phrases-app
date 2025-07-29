function PhraseList({ phrases }) {
    return (
      <div className="phrase-list">
        {phrases.length === 0 ? (
          <p className="empty-message">No phrases yet!</p>
        ) : (
          phrases.map((phrase) => (
            <div key={phrase.id} className='phrase-card'>
              <p className='phrase-text'>"{phrase.text}"</p>
              <p className='phrase-author'>— {phrase.author || "Anonymous"}</p>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default PhraseList;
  
