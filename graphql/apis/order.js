const { gql } = require("@apollo/client");

const ORDER_BY_ID = gql`
    query orderById($oid: ID!) {
        orderById(oid: $oid) {
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

const ORDER_BY_SELLER = gql`
    query orderBySeller($uid: ID!,$status: OrderStatusEnum ) {
        orderBySeller(uid: $uid, status: $status) {
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

const ORDER_BY_bUYER= gql`
    query orderByBuyer($uid: ID!,$status: OrderStatusEnum ) {
        orderByBuyer(uid: $uid, status: $status) {
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
    ORDER_BY_ID,
    ORDER_BY_SELLER,
    ORDER_BY_bUYER,
    ORDER_CREATE,
    ORDER_CREATED_TO_TRADING,
    ORDER_TRADING_TO_CONFIRM,
    ORDER_TRADING_TO_REJECT,
}
