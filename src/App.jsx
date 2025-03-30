import "./App.css";
import userData from "./utils/userData.json";

import Profile from "./components/Profile/Profile";
Profile;
function App() {
  return (
    <>
      <Profile {...userData} />
    </>
  );
}

export default App;
