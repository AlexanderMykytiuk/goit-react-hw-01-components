import React from "react";
import Profile from "./components/Profile";
import user from "./data/user.json";

import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      
    </div>
  );
};
export default App;
