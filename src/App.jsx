import User from "./components/User"
import user from "./user.json"

export default function App() {
    return <div>
        <User
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    </div>
}