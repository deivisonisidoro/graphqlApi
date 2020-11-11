import startServer from "./statusServer"
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

startServer({typeDefs, resolvers})