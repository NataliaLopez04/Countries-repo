import React from "react";
import usersList from "./users.json";
import "./styles.css";
import Name from "./components/Name";
import Countries from "./components/Countries";

const App = () => {
  console.log(usersList);
  return (
    <div className="App">
      <div className="navBar">
        <h1>Countries</h1>
      </div>
      <ul>
        {/* {usersList.map((user) => (
          <li key={user.cell}>
            <Name user={user} key={user.cell} />
          </li>
        ))} */}
        <Countries />
      </ul>
    </div>
  );
};

export default App;
