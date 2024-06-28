'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { TasksStoreType, createTasksStore, initTasksStore } from '@/4-entities/tasks'

export type TasksStoreApi = ReturnType<typeof createTasksStore>

export const TasksStoreContext = createContext<TasksStoreApi | undefined>(undefined)

interface IProps {
  children: ReactNode
}

//  В этом примере мы обеспечиваем безопасность повторного рендеринга этого компонента,
//  проверяя значение ссылки, чтобы хранилище создавалось только один раз.
//  Этот компонент будет отображаться только один раз для каждого запроса на сервере,
//  но может быть повторно отображен на клиенте несколько раз,
//  если над этим компонентом в дереве расположены клиентские компоненты с
//  отслеживанием состояния, или если этот компонент также содержит другое изменяемое состояние,
//  которое вызывает перерисовать.

export const CounterStoreProvider = ({ children }: IProps) => {
  const storeRef = useRef<TasksStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createTasksStore(initTasksStore())
  }

  return <TasksStoreContext.Provider value={storeRef.current}>{children}</TasksStoreContext.Provider>
}

export const useTasksStore = <T,>(selector: (store: TasksStoreType) => T): T => {
  const counterStoreContext = useContext(TasksStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useTasksStore must be used within CounterStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
