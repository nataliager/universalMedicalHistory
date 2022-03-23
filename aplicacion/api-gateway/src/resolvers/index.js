const lodash = require('lodash');
const userResolver = require('./user_resolver');
const mhResolver = require('./medicalHistory_resolver');

const resolvers = lodash.merge(mhResolver, userResolver);

module.exports = resolvers