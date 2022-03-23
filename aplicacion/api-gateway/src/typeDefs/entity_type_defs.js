const { gql } = require('apollo-server');
const entityTypeDefs = gql `

    input EntitypInput {
        nit: String!
        name: String!
        address: String!
        phone: String!
        email: String!
    }
    type EntityDetail {
        nit: String!
        name: String!
        address: String!
        phone: String!
        email: String!
    }

    input EntityUpdate {
        nit: String!
        name: String!
        address: String!
        phone: String!
        email: String!
    }

    type Entities {
        entidades: [EntityDetail]!
    }

    extend type Query {
        entityDetailById(name: String!): EntityDetail!
        allEntityDetail: Entities!
    }

    extend type Mutation {
        createEntity(entityInput: EntitypInput): String!
        updateEntity(name: String!, entityInput: EntityUpdate!): EntityDetail!
        deleteEntity(name: String!): String!
    }
    
`;

module.exports = entityTypeDefs;