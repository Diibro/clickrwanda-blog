import React from 'react'

interface PageProps{
     children: React.ReactNode;
}

const Page:React.FC<PageProps> = ({children}) => {
     return (
     <main className='page-container'>{children}</main>
     )
}

export default Page