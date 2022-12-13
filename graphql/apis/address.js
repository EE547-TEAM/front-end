const { gql } = require("@apollo/client");

const ADDRESS_BY_ID = gql`
    query addressById($aid: ID) {
        addressById(aid: $aid) {
            _id: ID
            content: String!
            userId: ID!
            is_default: Boolean
    }
}`;

const ADDRESS_CREATE = gql`
    mutation addressCreate($inputAddress: InputAddress) {
        addressCreate(inputUser: $inputAddress) {
            _id
            content
            userId
            is_default
    }
}`

module.exports = {
    ADDRESS_BY_ID,
    ADDRESS_CREATE
}