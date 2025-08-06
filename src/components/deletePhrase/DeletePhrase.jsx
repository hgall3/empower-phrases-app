import "./DeletePhrase.scss"
import trashIcon from "../../assets/trash.svg"

function DeletePhrase({ id, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm("Do you want to delete this phrase?")
    if (confirmDelete) {
      onDelete(id)
    }
  }

  return (
    <button className="delete-phrase-btn" onClick={handleDelete} aria-label="delete phrase">
      <img src={trashIcon} alt="trash to delete" />
    </button>
  )
}

export default DeletePhrase