const { gql } = require("@apollo/client");

const USER_BY_ID = gql`
    query userById($uid: ID!) {
        userById(uid: $uid) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`;

const IS_USER_EXISTES = gql`
    query isUserExisted($email: String!) {
        isUserExisted(email: $email)
}`;

const USER_PROFILE_UPDATE = gql`
    mutation userProfileUpdate($uid: ID!, $data: InputUser) {
        userProfileUpdate(uid: $uid, data: $data) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`

const USER_RATE_UPDATE = gql`
    mutation userRateUpdate($uid: ID!, $type: RateTypeEnum) {
        userRateUpdate(uid: $uid, type: $type) {
            _id
            name
            email
            buyerRate
            sellerRate
    }
}`

module.exports = {
    USER_BY_ID,
    IS_USER_EXISTES,
    USER_PROFILE_UPDATE,
    USER_RATE_UPDATE
}
