import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/features/postsSlice";
import Posts from "./posts";

const ListPost = () => {
  const { posts, loading } = useSelector((status) => status.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      {posts.map((item, index) => {
        return <Posts item={item} index={index} />;
      })}
    </div>
  );
};

export default ListPost;
