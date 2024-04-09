'use client'
import React from 'react';
import BlogContainer from './BlogContainer';
import BlogPreview from './BlogPreview';
import Blog from '@/config/interfaces/Blog.interface';
import Link from 'next/link';
import BlogPreviewLoader from '../loading_components/BlogPreviewLoader';
import BlogLoader from '../loading_components/BlogLoader';

interface BlogsRowProps{
  blogs: Array<Blog>;
  limit?:number;
  title?: string;
} 

const BlogsRow: React.FC<BlogsRowProps> = ({blogs, limit, title}) => {
  return (
    <div className='blogs-row'>
    {blogs && blogs[0] ? 
    <>
      {title ? <h1>{title}</h1> : null}
      <div className='main-blog'>
        <BlogPreview blog={blogs[0]} />
      </div>
      <div className="side-blogs">
        {
          blogs.slice(1).map((blog, index) => !limit ? <BlogContainer blog={blog} key={blog.blogId} /> : index < limit ? <BlogContainer blog={blog} key={blog.blogId} /> : null )
        }
        {
          limit ? <Link href="#">More blogs</Link> : null
        }
      </div>
    </>: 
    <>
      <div className="main-blog">
        <BlogPreviewLoader />
      </div>
      <div className="side-blogs">
        <BlogLoader/>
        <BlogLoader/>
      </div>
    </>}
    </div>
  )
}

export default BlogsRow;