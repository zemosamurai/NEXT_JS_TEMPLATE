import { useTasksStore } from '../../tasksProvider/tasksProvider'
import s from './styles.module.scss'

interface IProps {
  title: string
  description: string
  id: number
}

export const Item = ({ description, title, id }: IProps) => {
  const deleteTask = useTasksStore((state) => state.deleteTask)

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  return (
    <div className={s.item}>
      <div className={s.textWrapper}>
        <h3>{title}</h3>
        <h6>{description}</h6>
      </div>

      <button onClick={handleDeleteTask} className={s.deleteBtn}>
        x
      </button>
    </div>
  )
}
