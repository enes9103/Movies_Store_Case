// React Hooks imports
import { useState } from "react";

// custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

// custom components
import EditForm from "../components/EditForm";
import TaskItem from "../components/TaskItem";

// Library imports
import { FiPlus } from "react-icons/fi";

function AddMovies() {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [imdb, setImdb] = useState("");
  const [actor, setActor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      imdb: imdb,
      actor: actor,
      image: image,
      description: description,
      checked: false,
      id: Date.now(),
    });
    setOpen(false);
    setTask("");
    setImdb("");
    setActor("");
    setImage("");
    setDescription("");
  };

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) =>
        t.id === task.id
          ? {
              ...t,
              name: task.name,
              imdb: task.imdb,
              actor: task.actor,
              image: task.image,
              description: task.description,
            }
          : t
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "full",
    height: "full",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };

  return (
    <div className="">
      <div className="relative flex flex-col md:flex-row justify-center">
        <div
          onClick={handleOpen}
          className="h-12 mt-5 mx-5 md:px-12 rounded-full cursor-pointer border border-[#f2f2f2] shadow-md transform transition-all ease-in-out text-gray-500 bg-white flex justify-center items-center"
        >
          Add Movie
          <FiPlus className="text-gray-500 ml-1" size={22} />
        </div>

        {open && (
          <div className="absolute -bottom-80 md:top-80 left-0 w-full h-full flex items-center justify-center z-40 ">
            <div className="bg-white rounded-lg p-6 shadow-2xl">
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-blue-600 font-bold pb-3 px-4 rounded-full"
                >
                  X
                </button>
              </div>
              <form method="post" onSubmit={handleFormSubmit}>
                <div className="flex flex-col md:flex-row gap-3 mb-5">
                  <input
                    required
                    type="text"
                    placeholder="Movie Name"
                    className="border border-gray-400 p-2 rounded-lg"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                  />
                  <input
                    required
                    type="text"
                    placeholder="IMDB Point"
                    className="border border-gray-400 p-2 rounded-lg"
                    value={imdb}
                    onInput={(e) => setImdb(e.target.value)}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Actors"
                    className="border border-gray-400 p-2 rounded-lg"
                    value={actor}
                    onInput={(e) => setActor(e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Movie Visual"
                    className="border border-gray-400 p-2 rounded-lg"
                    value={image}
                    onInput={(e) => setImage(e.target.value)}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Description of The Movie"
                    className="border border-gray-400 p-2 rounded-lg w-full"
                    value={description}
                    onInput={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  {!(task && imdb && actor && image && description) && (
                    <h1 className="mt-2 text-red-500 text-start">
                      * Please fill in all fields
                    </h1>
                  )}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-full w-full"
                  >
                    Add Movie
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}

      <header className="mt-4 font-bold text-[20px] text-blue-800 border border-gray-300 rounded-md py-1 w-[96%] m-auto">
        <h1>My Added Movie List</h1>
      </header>

      {tasks && (
        <TaskItem
          key={tasks.id}
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default AddMovies;
