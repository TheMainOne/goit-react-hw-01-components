import React from "react";
import User from "../User/User";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transaction from "../../data/transaction.json";
import { Container } from "./App.styled";

export default function App() {
    return (<Container>
        <User
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transaction} />
    </Container>);
}