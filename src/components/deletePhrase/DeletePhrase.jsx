import "./DeletePhrase.scss"
import trashIcon from "../../assets/trash.svg"

function DeletePhrase({ id, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm("¿Eliminar esta frase?")
    if (confirmDelete) {
      onDelete(id)
    }
  }

  return (
    <button className="delete-phrase-btn" onClick={handleDelete} aria-label="Eliminar frase">
      <img src={trashIcon} alt="Eliminar" />
    </button>
  )
}

export default DeletePhrase