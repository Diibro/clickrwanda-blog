'use client';

import Blog from '@/config/interfaces/Blog.interface';
import BlogContainerInterface from '@/config/interfaces/BlogContainer';
import Image from 'next/image';
import React from 'react'
import SmallTitle from '../title_components/SmallTitle';

const BlogContainerRow: React.FC<BlogContainerInterface> = ({blog}) => {
     return (
          <div className='blog-container-row'>
               <div className="image-container">
                    <Image width={300} height={200} src={blog.image} alt={blog.title} />
               </div>
               <div className='content'>
                    <p>Added on {blog.publish_date}</p>
                    <SmallTitle title={blog.title} />
               </div>
          </div> 
     )
}

export default BlogContainerRow;