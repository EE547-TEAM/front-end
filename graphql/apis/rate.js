const { gql } = require("@apollo/client");

const RATE_CREATE = gql`
    mutation rateCreate($inputRate: InputUser!) {
        rateCreate(inputRate: $inputRate) {
            score
            orderId
            comment
            fromUserId
            toUserId
            rateType
    }
}`;

const RATE_BY_USER = gql`
    query rateByUser($uid: ID!, $type: RateTypeEnum!) {
        rateByUser(uid: $uid, type: $type)
}`;

module.exports = {
    RATE_CREATE,
    RATE_BY_USER

}
