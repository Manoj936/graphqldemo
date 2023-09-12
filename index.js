import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import db from './_db.js'

// resolver
const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        users() {
            return db.users
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        user(_, args) {
            return db.users.find((user) => user.id === args.id)
        }
    }

}


// starting the server

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("server starting at : ", 4000)