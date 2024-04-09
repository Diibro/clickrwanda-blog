import { getStringPart } from '@/functions/stringFunctions';
import Blog from '@/config/interfaces/Blog.interface';
import Image from 'next/image';
import React from 'react'

interface BlogPreviewProps {
     blog: Blog;
}

const BlogPreview:React.FC<BlogPreviewProps> = ({blog}) => {
     console.log(blog.image)
     return (
     <div className='blog-preview-container'>
          <div className="image-container">
               <Image width={800} height={500} src={blog.image} alt={blog.title} />
          </div>
          <div className="content">
               <h2>{blog.title}</h2>
               <p>{getStringPart(blog.content, 5)}</p>
          </div>
     </div>
     )
}

export default BlogPreview