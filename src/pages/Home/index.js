/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : LinQiao
 * Student ID : 1155185447
 * Date : 2022/12/02
 */

import { useEffect, useState } from "react";
import "./index.css";
import PostThumbnail from "../../components/PostThumbnail";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const queryPosts = () => {
    fetch("/.netlify/functions/posts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setPosts(json);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    queryPosts();
  }, []);
  return (
    <div className="Home">
      {posts.map((item) => (
        <PostThumbnail {...item} key={item._id} />
      ))}
    </div>
  );
};

export default Home;
