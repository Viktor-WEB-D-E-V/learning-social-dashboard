import "./App.css";
import userData from "./utils/userData.json";
import friends from "./utils/friends.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
Profile;
function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
