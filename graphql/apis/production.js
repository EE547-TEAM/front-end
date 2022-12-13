const { gql } = require("@apollo/client");



const GET_PRODUCTION_IDS_BY_NAME = gql`
    query productionByName($name: String!, $activate: Boolean!) {
        productions: productionByName(name: $name, activate: $activate) {
            _id
    }
}`;

const PRODUCTION_CREATE = `
    mutation productionCreate($inputProduction: InputProduction!) {
        productionCreate(inputProduction: $inputProduction) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;
const PRODUCTION_BY_ID = `
    query productionById($pid: ID!) {
        production: productionById(pid: $pid) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

const PRODUCTION_BY_USER = `
    query productionByUser($uid: ID!, $activate: Boolean!) {
        productionByUser(uid: $uid, activate: $activate) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

const PRODUCTION_BY_NAME = `
    query productionByName($name: String!, $activate: Boolean!) {
        productions: productionByName(name: $name, activate: $activate) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

const PRODUCTION_UPDATE = `
    mutation productionUpdate($pid: ID!, $data: InputProductUpdate!) {
        productionUpdate(pid: $pid, data: $data) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

const PRODUCTION_DELETE = `
    mutation productionDelete($pid: ID!) {
        productionDelete(pid: $pid) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

const PRODUCTION_VIEWTIME_INCREMENT = `
    mutation productionViewTimeincrement($pid: ID!) {
        productionViewTimeincrement(pid: $pid) {
            _id
            user {
                _id
                name
                email
                buyerRate
                sellerRate
            }
            price
            name
            condition
            quantity
            description
            address {
                _id
                is_default
                content
            }
            isActivate
            viewTime
    }
}`;

module.exports = {
    PRODUCTION_CREATE,
    PRODUCTION_BY_ID,
    PRODUCTION_BY_USER,
    PRODUCTION_BY_NAME,
    PRODUCTION_UPDATE,
    PRODUCTION_DELETE,
    PRODUCTION_VIEWTIME_INCREMENT,
    GET_PRODUCTION_IDS_BY_NAME

}
