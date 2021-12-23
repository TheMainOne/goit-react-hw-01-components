import User from "./components/User";
import Statistics from "./components/Statistics";
import user from "./user.json";
import data from "./data.json";

export default function App() {
    return <div>
        <User
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data}/>
    </div>
}