import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'
import './item.css'

interface ItemProps {
  id: string,
  text: string,
  isCompleted: boolean
}

export const Item = ({
  id,
  text,
  isCompleted
}: ItemProps) => {



  const updateIsCompleted = useMutation(api.tasks.updateIsCompleted)
  const deleteItem = useMutation(api.tasks.deleteItem)

  const onCompleted = () => {
    updateIsCompleted({
      id: id as Id<'tasks'>
    })
  }

  const onRemove = () => {
    deleteItem({
      id: id as Id<'tasks'>
    })
  }


  return ( //https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
    <div >
      <div className='todoListWrapper'>
        <input type='checkbox' checked={isCompleted} onChange={onCompleted} />
        <input style={isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} value={text}/>
        <button onClick={onRemove}>Delete</button>
        <button onClick={()=>{}}>Update</button>
      </div>
    </div>
  )

}

