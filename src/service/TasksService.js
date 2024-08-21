import { PrivateAxios } from "../config/AxiosConfig";

const createTask=(data)=>{
    return PrivateAxios.post("/task",data);
}


const UpdateTask=(Taskid,data)=>{
    return PrivateAxios.put(`/task/update/${Taskid}`,data);
}

const deleteTask=(Taskid)=>{
    return PrivateAxios.delete(`/task/delete/${Taskid}`);
}

const getAllTask=()=>{
    return PrivateAxios.get("/task");
}

const UpdateTaskState=(id,data)=>{
    return PrivateAxios.put(`/task/update/status/${id}`,data);
}

const getTaskById=(id)=>{
    return PrivateAxios.get(`task/${id}`);
}

export {createTask,UpdateTask,deleteTask,getAllTask,UpdateTaskState,getTaskById}