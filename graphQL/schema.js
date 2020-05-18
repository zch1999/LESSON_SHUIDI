// vuex
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} from 'graphql'


// mongodb  schema  数据不在他这里， 规则
const QueryRootType = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    greeting: {
      type: GraphQLString,
      resolve: () => `hello ~`
    }
  }
})


export default new GraphQLSchema({
  query: QueryRootType
  // mutation 
})