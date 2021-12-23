import User from "./components/User";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transaction from "./transaction.json";

export default function App() {
    return <div>
        <User
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transaction}/>
    </div>
}