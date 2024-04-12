import TitleInterface from '@/config/interfaces/Title'
import React from 'react'

const MainTitle:React.FC<TitleInterface> = ({title}) => {
  return (
     <>
          <h1 className='main-title'>{title}</h1>
          <div className="divider"></div>
     </>
  )
}

export default MainTitle;