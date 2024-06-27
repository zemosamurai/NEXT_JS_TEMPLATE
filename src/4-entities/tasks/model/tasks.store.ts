import { createStore } from "zustand/vanilla";
import { ITask } from "./types";

export type TasksStateType = {
  tasks: ITask[];
};

export type TasksActionsType = {
  deleteTask: (taskId: number) => void;
};

export type TasksStoreType = TasksStateType & TasksActionsType;

const tasksMock: ITask[] = [
  { id: 1, description: "description 1", isCompleted: false, title: "task 1" },
  { id: 2, description: "description 2", isCompleted: false, title: "task 2" },
  { id: 3, description: "description 3", isCompleted: false, title: "task 3" },
  { id: 4, description: "description 4", isCompleted: false, title: "task 4" },
  { id: 5, description: "description 5", isCompleted: false, title: "task 5" },
];

export const initTasksStore = (): TasksStateType => {
  return { tasks: tasksMock };
};

export const defaultInitState: TasksStateType = {
  tasks: [],
};

export const createTasksStore = (
  initState: TasksStateType = defaultInitState,
) => {
  return createStore<TasksStoreType>()((set) => ({
    ...initState,
    deleteTask: (takId) =>
      set((state) => ({
        tasks: state.tasks.filter((el) => el.id !== takId),
      })),
  }));
};
