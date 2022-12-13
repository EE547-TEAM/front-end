const { gql } = require("@apollo/client");

const MATCH_ORDER_BY_ID = gql`
    query matchOrderById($oid: ID!) {
        matchOrderById(oid: $oid) {
            _id
            productionID
            quantity
            buyerID
            sellerID
            status
            tradingTimestamp
            rejectTimestamp
            confirmTimestamp
            addressFromId
            addressToId
    }
}`;

const MATCH_ORDER_BY_SELLER = gql`
    query matchOrderBySeller($uid: ID!,$status: OrderStatusEnum ) {
        matchOrderBySeller(uid: $uid, status: $status) {
            _id
            productionID
            quantity
            buyerID
            sellerID
            status
            tradingTimestamp
            rejectTimestamp
            confirmTimestamp
            addressFromId
            addressToId
    }
}`;

const MATCH_ORDER_BY_bUYER= gql`
    query matchcOrderByBuyer($uid: ID!,$status: OrderStatusEnum ) {
        matchcOrderByBuyer(uid: $uid, status: $status) {
            _id
            productionID
            quantity
            buyerID
            sellerID
            status
            tradingTimestamp
            rejectTimestamp
            confirmTimestamp
            addressFromId
            addressToId
    }
}`;

const ORDER_CREATE = gql`
    mutation orderCreate($inputOrder: InputOrder!) {
        orderCreate(inputOrder: $inputOrder) {
            _id
            productionID
            quantity
            buyerID
            sellerID
            status
            tradingTimestamp
            rejectTimestamp
            confirmTimestamp
            addressFromId
            addressToId
    }
}`

const UPDATE_ORDER = gql`
    mutation updateOrder($inputOrder: InputOrder!) {
        updateOrder(inputOrder: $inputOrder) {
            _id
            productionID
            quantity
            buyerID
            sellerID
            status
            tradingTimestamp
            rejectTimestamp
            confirmTimestamp
            addressFromId
            addressToId
    }
}`

module.exports = {
    MATCH_ORDER_BY_ID,
    MATCH_ORDER_BY_SELLER,
    MATCH_ORDER_BY_bUYER,
    UPDATE_ORDER,
    ORDER_CREATE
}
