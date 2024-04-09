import axios from "axios";
import Server from "../server/Server";
import Blog from "@/config/interfaces/Blog.interface";

class BlogService extends Server{
     public constructor(){
          super("http://localhost:3002");
     }

     public async getAll():Promise<Array<Blog>> {
          try{
               let blogs:Array<Blog> = (await axios.get(this.serverUrl + "/blogs")).data;
               console.log("function reached")
               return blogs;
          }catch(error){ 
               console.log(error)
               return [];
          }
     }
}

export default BlogService;