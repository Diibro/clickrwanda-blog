'use client';

import Blog from '@/config/interfaces/Blog.interface';
import Image from 'next/image';
import React from 'react'

interface BlogContainerProps {
     blog: Blog;
}
const BlogContainer: React.FC<BlogContainerProps> = ({blog}) => {
     return (
          <div className='blog-container'>
               <div className="image-container">
                    <Image width={300} height={200} src={blog.image} alt={blog.title} />
               </div>
               <div className='content'>
                    <h3>{blog.title}</h3>
                    <p>{blog.publish_date}</p>
               </div>
          </div> 
     )
}

export default BlogContainer