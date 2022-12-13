const { gql } = require("@apollo/client");

const LOGIN = gql`
    query login($email: String!, $password: String!) {
        user: authority(email: $email, password: $password) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`;

const REGISTER = gql`
    mutation register($user: InputUser!) {
        user: register(inputUser: $user) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`

module.exports = {
    LOGIN,
    REGISTER
}
