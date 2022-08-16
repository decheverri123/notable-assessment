import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Axios from "axios";
import api from "./api/blogs";

interface Blog {
  id: Number;
  title: String;
  body: String;
  author: String;
}

function App() {
  const getBlogs = async () => {
    const response = await api.get<Blog[]>("/blogs");
    return response.data;
  };
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const allBlogs = await getBlogs();
      if (allBlogs) setBlogs(allBlogs);
    };

    getAllBlogs();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      {blogs &&
        blogs.map((blog) => {
          return (
            <div>
              <h2>{blog.title}</h2>
              <h3>{blog.author}</h3>
              <p>{blog.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
