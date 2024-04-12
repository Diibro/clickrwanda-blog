'use client'
import React from 'react';
import BlogPreview from './BlogPreview';
import Blog from '@/config/interfaces/Blog.interface';
import Link from 'next/link';
import BlogPreviewLoader from '../loading_components/BlogPreviewLoader';
import BlogLoader from '../loading_components/BlogLoader';
import SmallTitle from '../title_components/SmallTitle';
import BlogContainerRow from './BlogContainer';
import MediumTitle from '../title_components/MediumTitle';

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
      <div className='main-blog'>
        {title ? <MediumTitle title='Featured Article' /> : null}
        <BlogPreview blog={blogs[0]} />
      </div>
      <div className="side-blogs">
        <MediumTitle title='Popular Articles' />
        {
          blogs.slice(1).map((blog, index) => !limit ? <BlogContainerRow blog={blog} key={blog.blogId} /> : index < limit ? <BlogContainerRow blog={blog} key={blog.blogId} /> : null )
        }
        {
          limit ? <Link href="#">More...</Link> : null
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