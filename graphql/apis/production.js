const { gql } = require("@apollo/client");

const PRODUCTION_CREATE = gql`
    mutation productionCreate($inputProduction: InputProduction!) {
        productionCreate(inputProduction: $inputProduction) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;
const PRODUCTION_BY_ID = gql`
    query productionById($pid: ID!) {
        productionById(pid: $pid) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;

const PRODUCTION_BY_USER = gql`
    query productionByUser($uid: ID!, $activate: Boolean!) {
        productionByUser(uid: $uid, activate: $activate) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;

const PRODUCTION_BY_NAME = gql`
    mutation productionByName($name: ID!, $activate: Boolean!) {
        productionByName(name: $name, activate: $activate) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;

const PRODUCTION_UPDATE = gql`
    mutation productionUpdate($pid: ID!, $data: InputProductUpdate!) {
        productionUpdate(pid: $pid, data: $data) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;

const PRODUCTION_DELETE = gql`
    mutation productionDelete($pid: ID!) {
        productionDelete(pid: $pid) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
            isActivate
            viewTime
    }
}`;

const PRODUCTION_VIEWTIME_INCREMENT = gql`
    mutation productionViewTimeincrement($pid: ID!) {
        productionViewTimeincrement(pid: $pid) {
            _id
            userId
            price
            name
            condition
            quantity
            description
            addressId
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
    PRODUCTION_VIEWTIME_INCREMENT 

}
