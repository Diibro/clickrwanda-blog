import { getStringPart } from '@/functions/stringFunctions';
import Blog from '@/config/interfaces/Blog.interface';
import Image from 'next/image';
import React from 'react'
import MediumTitle from '../title_components/MediumTitle';

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
               <MediumTitle title={blog.title} />
               <p>{getStringPart(blog.content, 2)}</p>
               <span>Published | {blog.publish_date}</span>
          </div>
     </div>
     )
}

export default BlogPreview