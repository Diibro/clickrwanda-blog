import TitleInterface from '@/config/interfaces/Title'
import React from 'react'

const SmallTitle:React.FC<TitleInterface> = ({title}) => {
  return (
    <h3 className='small-title'>{title}</h3>
  )
}

export default SmallTitle