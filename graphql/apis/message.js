const { gql } = require("@apollo/client");

const MESSAGE_BY_CHAT = gql`
    query messageByChat($cid: ID) {
        messageByChat(cid: $cid) {
            _id
            chatId
            senderId
            content
            status
    }
}`;

const LAST_MESSAGE_BY_CHAT = gql`
    query lastMessageByChat($cid: ID!) {
        lastMessageByChat(cid: $cid) {
            _id
            chatId
            senderId
            content
            status
    }
}`;

const MESSAGE_CREATE = gql`
    mutation messageCreate($inputMessage: InputMessage!) {
        messageCreate(inputUser: $inputMessage) {
            id
            chatId
            senderId
            content
            status
    }
}`;

const MESSAGE_UPDATE = gql`
    mutation messageUpdate($mid: ID!) {
        messageUpdate(mid: $mid) {
            id
            chatId
            senderId
            content
            status
    }
}`

module.exports = {
    MESSAGE_BY_CHAT,
    LAST_MESSAGE_BY_CHAT,
    MESSAGE_CREATE,
    MESSAGE_UPDATE
}
