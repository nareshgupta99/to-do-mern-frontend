import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { deleteTask, getAllTask, UpdateTaskState } from "../service/TasksService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Task = () => {

  const [tasks, setTasks] = useState([]);

  const [completedTasks, setcompletedTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllTask();
        setTasks(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleTaskFinished = async (id) => {
    try {
      console.log(id)
      let t = tasks.find((t) => t._id === id);
      let { status } = t;
      status = (status.toLowerCase() === "pending" ? "finished" : "pending");
      console.log(status)
      const res = await UpdateTaskState(id, { status });
      const { data } = res;
      console.log(data);

      const modifyTasks = tasks.map((t) => {
        if (t._id === id) {
          return data;
        } else {
          return t;
        }
      })
      console.log(modifyTasks)
      setTasks(modifyTasks)
    } catch (err) {
      console.log(err);
    }
  }

  const handleEdit = (id) => {
    navigate(`/user/task/edit/${id}`);
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await deleteTask(id);
      const { message, task } = data;
      swal(message, "success");

      const filterArray = tasks.filter((t) => t._id !== task._id);
      setTasks(filterArray);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <div className="flex justify-between m-10 ">

        {tasks.length === 0 ?
          <div>
            your to do list is Empty <Link to={"/user/task/create"} className="">click here </Link>
          </div>
          : <Link to={"/user/task/create"}>  <h1 className="underline: underline-offset-2 text-blue-600 ">Add Task</h1> </Link>}
        <Link to={"/user/logout"} className="text-blue-600" > Logout </Link>
      </div>
      {tasks.map((task, index) => (

        <div key={index} className="border rounded card w-1/3 m-auto my-4 p-4 ">
          <div className="task-name mb-4">
            <h1 className="text-xl font-bold">{task.taskName}</h1>
          </div>
          <div className="task-description mb-4">
            <p>{task.description}</p>
          </div>
          <div className="task-priority mb-4">
            <p className="font-semibold">Priority: {task.priority}</p>
          </div>
          <div className="task-finished mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.status === "finished" ? true : ""}
                onChange={() => handleTaskFinished(task._id)}
              />
              <span>Finished</span>
            </label>
          </div>
          <div className="task-actions flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleEdit(task._id)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>



      ))}

      {completedTasks.length > 0 ?
        completedTasks.map((task, index) => (


          <div key={index} className="border rounded card w-1/3 m-auto my-4 p-4 ">
            <div className="task-name mb-4">
              <h1 className="text-xl font-bold">{task.name}</h1>
            </div>
            <div className="task-description mb-4">
              <p>{task.description}</p>
            </div>
            <div className="task-priority mb-4">
              <p className="font-semibold">Priority: {task.priority}</p>
            </div>
            <div className="task-finished mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={task.isFinished}
                  onChange={() => handleTaskFinished(task.id)}
                />
                <span>Finished</span>
              </label>
            </div>
            <div className="task-actions flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              // onClick={() => handleUpdate(task.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>

        ))

        : ""}
    </>

  )
}
export default Task;