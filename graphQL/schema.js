// vuex
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} from 'graphql'


// mongodb  schema  数据不在他这里， 规则
const QueryRootType = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQL
    }
  },
  fields: {
    greeting: {
      type: GraphQLString,
      resolve: () => `hello ~`
    },
    posts: {
      type: new GraphQLList()
    }
  }
})


export default new GraphQLSchema({
  query: QueryRootType
  // mutation 
})