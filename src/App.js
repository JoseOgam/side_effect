import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/features/usersSlice";
import "./App.css";
// import ListUsers from "./components/listUsers";
import ListPost from "./components/listPost";

const App = () => {
  //   const { users, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }
  return (
    <div>
      {/* {users.map((item, index) => {
        return <ListUsers item={item} />;
      })} */}
      <ListPost />
    </div>
  );
};

export default App;
