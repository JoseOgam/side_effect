import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../redux/features/postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleContent = (e) => setContent(e.target.value);

  const addPost = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addNewPost({ title: title, author: author, body: content }));
      setTitle("");
      setAuthor("");
      setContent("");
    }
  };

  return (
    <div>
      <div className="forms">
        <form>
          <div>
            <label>Title:</label>
            <input placeholder="title" value={title} onChange={handleTitle} />
          </div>
          <div>
            <label>Author:</label>
            <input
              placeholder="Author"
              value={author}
              onChange={handleAuthor}
            />
          </div>
          <div>
            <label>Conent:</label>
            <input
              placeholder="content"
              value={content}
              onChange={handleContent}
            />
          </div>
          <button onClick={addPost}>save</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
