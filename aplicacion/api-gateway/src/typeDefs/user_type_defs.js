const { gql } = require('apollo-server');
const userTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpInput {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        address: String!
        phone: String!
        email: String!
        username: String!
        password: String!
        professionalCard: String!
        entity: String!
    }
    type UserDetail {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        address: String!
        phone: String!
        email: String!
        username: String!
        password: String!
        professionalCard: String!
        entity: String!
    }
    input UserUpdate {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        address: String!
        phone: String!
        email: String!
        username: String!
        password: String!
        professionalCard: String!
        entity: String!
    }

    type Users {
        usuarios: [UserDetail]!
    }

    type Mutation {
        createUser(userInput :SignUpInput): Tokens!
        updateUser(numero_documento: String!, user: UserUpdate!): UserDetail!
        deleteUser(numero_documento: String!): String!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {

        userDetailById(numero_documento: String!): UserDetail!
        allUserDetail: Users!

    }`;

module.exports = userTypeDefs;