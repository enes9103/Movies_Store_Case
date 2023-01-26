import { useState, useEffect } from 'react';

// Icon library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const [updatedTaskImdb, setUpdatedTaskImdb] = useState(editedTask.imdb);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName, imdb: updatedTaskImdb})
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editMovie"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        className=""
        onSubmit={handleFormSubmit}
        >
        <div className="flex flex-col justify-center items-center mt-5 gap-2">
          <h1>Write the Movie Name and IMDB Rating you want to update</h1>
          <input
            type="text"
            id="editMovie"
            className="input px-2  py-2 rounded-md w-52"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Movie"
          />
                    <input
            type="text"
            id="editMovie"
            className="input px-2  py-2 rounded-md w-52"
            value={updatedTaskImdb}
            onInput={(e) => setUpdatedTaskImdb(e.target.value)}
            required
            autoFocus
            maxLength={4}
            placeholder="Update Movie"
          />
        </div>
        <button
 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-md w-52 flex justify-center m-auto gap-2"
          aria-label={`Confirm edited task to now read ${updatedTaskName} and ${updatedTaskImdb}`}
          type="submit"
          >
           <span>Update</span> 
          <CheckIcon strokeWidth={2} height={20} width={20} />
        </button>
      </form>
    </div>
  )
}
export default EditForm