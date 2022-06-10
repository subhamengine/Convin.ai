import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  
  const [singleUserData, setSingleUserData] = useState([])
  
  const setProfile = (id) => {
    // console.log(id)
    const s = async () => {
      const res = await fetch(`https://reqres.in/api/users/${id}`);
      
      const json = await res.json();
      // setUsers(json.data);
      console.log(json);
      setSingleUserData(json.data)
    };
    s();
  }
    return (
    <div className="App">
      <div className="display">
        <img src={singleUserData.avatar} alt="" />
        <h2>Name:  <span className="name"> {`${singleUserData.first_name} ${singleUserData.last_name}`} </span></h2>
        <h3>User Info:- <span className="userInf">{singleUserData.email}</span></h3>
      </div>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
                <button className="btn" onClick={() => setProfile(user.id)}>{user.id}</button>
            );
          })}
      </div>
    </div>
  );
}