import "./App.css";

import userData from "./utils/userData.json";
import friends from "./utils/friends.json";
import transactions from "./utils/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
