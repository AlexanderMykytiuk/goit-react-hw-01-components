import React from "react";
import Profile from "./components/Profile";
import user from './user.json'

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Profile
        name ="Jacques Gluke"
       tag ="jgluke"
       location ="Ocho Rios, Jamaica"
       avatar ="https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
         followers = {5603}
         views = {4827}
         likes = {1308}
      />
    </div>
  );
};
export default App;
