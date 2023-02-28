import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import { AppBarMUI } from "./components/";
import { getUser } from "./feature/authSlice/authSlice";
import Loader from "./components/Loader";
// import Feed from "./components/Feed";
function App() {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state);
  const dispatch = useDispatch();

  const token = Cookies.get("token");

  useEffect(() => {
    console.log(auth);
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const user = await response.json();
      console.log(user);
      dispatch(getUser(user));
    }
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <AppBarMUI />
      {/*router-dom new version*** when we use children for a element in router than we have 
      to only use <Outlet/> for children to render according to specified route*/}
      <Outlet />
    </div>
  );
}

export default App;
