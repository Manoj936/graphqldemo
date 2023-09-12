export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type User {
    id:ID!
    name: String!
    username: String!
    email: String!
    address:[Address!]!
  }
  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
  }
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
    users: [User]
    review(id:ID!): Review
    author(id:ID!): Author
    game(id:ID!) : Game
    user(id:ID!) : User
  }
`