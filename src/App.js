import React from "react";
import Profile from "./components/Profile";
import user from "./user.json";

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
   </div>
  );
};
export default App;




// const App = () => {
//   return (
//   <div>
//        <ul>
//       {users.map(({ id, avatar, name, tag, location, stats }) => (
//         <li key={id}> 
//           <Profile
//         name={name}
//         tag={tag}
//         location={location}
//         avatar={avatar}
//         stats={stats}
//       />
//     </li>
//    ))}
//    </ul>
//   </div>
//   );
// };
// export default App;