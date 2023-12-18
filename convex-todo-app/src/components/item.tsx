import { useMutation } from 'convex/react'
import React from 'react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'


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
  const styleItem = { display: 'flex' }

  const updateIsCompleted = useMutation(api.tasks.updateIsCompleted)

  const onCompleted = () => {
    updateIsCompleted({
      id: id as Id<'tasks'>
    })
  }
  return (
    <div className={styleItem}>
      <input type='checkbox' checked={isCompleted} onChange={onCompleted} />
      {text}
    </div>
  )

}

