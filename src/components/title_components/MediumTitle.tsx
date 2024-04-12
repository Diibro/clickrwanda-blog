import TitleInterface from '@/config/interfaces/Title'
import React from 'react'

const MediumTitle:React.FC<TitleInterface> = ({title}) => {
  return (
    <h2 className='medium-title'>{title}</h2>
  )
}

export default MediumTitle