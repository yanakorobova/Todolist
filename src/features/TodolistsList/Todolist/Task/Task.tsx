import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "../../../../components/EditableSpan";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import {TaskType} from "../../../../api/todolist-api";
import {
    deleteTasksTC, updateTaskTC,
} from "../../../../state/tasks-reducer";
import {TaskStatuses} from "../../../../api/todolist-api";
import {useAppDispatch} from "../../../../state/store";

type TaskPropsType = {
    task: TaskType
    todolistId: string
}

export const Task = React.memo(({task, todolistId}: TaskPropsType) => {
    const {id, status, title} = task
    const dispatch = useAppDispatch()
    const removeTask = useCallback(() => dispatch(deleteTasksTC(todolistId,id)), [])
    const changeTaskStatus = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New
        dispatch(updateTaskTC(id, {status:newStatus}, todolistId))
    }, [])
    const changeTaskTitle = useCallback((newTitle: string) => {
        dispatch(updateTaskTC(id, {title:newTitle},todolistId))
    }, [id,todolistId])

    return (
        <li key={id} className={!!status ? 'isDone' : ''}>
            <Checkbox color='primary' checked={!!status} onChange={changeTaskStatus}/>
            <EditableSpan title={title} changeTitle={changeTaskTitle}/>
            <IconButton onClick={removeTask} color='warning'><CancelPresentationIcon/></IconButton>
        </li>
    );
})

