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
}`;

const ORDER_CREATED_TO_TRADING = gql`
    mutation orderCreatedToTrading($oid: ID!) {
        orderCreatedToTrading(oid: $oid) {
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

const ORDER_TRADING_TO_CONFIRM = gql`
    mutation orderTradingToConfirm($oid: ID!) {
        orderTradingToConfirm(oid: $oid) {
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

const ORDER_TRADING_TO_REJECT = gql`
    mutation orderTradingToReject($oid: ID!) {
        orderTradingToReject(oid: $oid) {
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

module.exports = {
    MATCH_ORDER_BY_ID,
    MATCH_ORDER_BY_SELLER,
    MATCH_ORDER_BY_bUYER,
    ORDER_CREATE,
    ORDER_CREATED_TO_TRADING,
    ORDER_TRADING_TO_CONFIRM,
    ORDER_TRADING_TO_REJECT,
}
