interface Blog {
     blogId: string;
     title: string;
     content:string;
     image: string;
     images: Array<string>;
     publish_date: string;
     authorName?:string;

}

export default Blog;