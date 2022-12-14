const { gql } = require("@apollo/client");

const GET_CHAT_BY_USER = gql`
    query chatsByUser($uid: ID!) {
        user: chatsByUser(uid: $uid) {
            _id
            participant
    }
}`;

const CHAT_CREATE = gql`
    mutation chatCreate($pids: [ID]!) {
        chatCreate(pids: $pids) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`;

module.exports = {
    GET_CHAT_BY_USER,
    CHAT_CREATE
}
