'use client'
import BlogsRow from "@/components/blog_components/BlogsRow";
import BlogService from "@/config/service/BlogService";
import Blog from "@/config/interfaces/Blog.interface";
import { useEffect, useState } from "react";
import Page from "@/components/Page";
import MainTitle from "@/components/title_components/MainTitle";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async() => {
      let fetchedBlogs:Array<Blog> = await new BlogService().getAll();
      setBlogs(fetchedBlogs);
      console.log(fetchedBlogs);
    })();
  }, [])
  return (
    <Page>
      <MainTitle title="Click Rwanda Blog" />
      <BlogsRow blogs={blogs} limit={3} title="Featured Article"/>
    </Page>
  );
}
