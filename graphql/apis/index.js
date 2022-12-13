// const client = new ApolloClient({
//     uri: "https://api.spacex.land/graphql/",
//     cache: new InMemoryCache()
// });

import { ABS_GRAPHQL_PATH } from '../../config/env'

export * from './authority'
export * from './address'
export * from './chat'
export * from './message'
export * from './order'
export * from './production'
export * from './rate'
export * from './user'

export async function sendGraphqlRequest({ query, variables, isPreFetch = false }) {
    return fetch(isPreFetch ? ABS_GRAPHQL_PATH : '/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        }),
    }).then(res => res.json());
}