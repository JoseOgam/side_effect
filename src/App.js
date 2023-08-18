import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/features/usersSlice";

const App = () => {
  const { users, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      {users.map((item, index) => (
        <div key={index}>
          <h2> {item.id} </h2>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
//https://jsonplaceholder.typicode.com/posts
