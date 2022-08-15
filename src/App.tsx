import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Axios from "axios";

interface Blog {
  id: Number;
  title: String;
  body: String;
  author: String;
}

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const url = "http://localhost:8000/blogs";
    Axios.get(url).then((res) => {
      setBlogs(res.data);
    });
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
