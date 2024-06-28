'use client'

import { useTasksStore } from '../tasksProvider/tasksProvider'
import { Item } from './item/item'

import s from './styles.module.scss'

export const TasksList = () => {
  const tasks = useTasksStore((state) => state.tasks)

  return (
    <div className={s.container}>
      {tasks.map((el) => (
        <Item key={el.id} title={el.title} description={el.description} id={el.id} />
      ))}
    </div>
  )
}
