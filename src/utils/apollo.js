import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';
 
const LOCAL_SYSTEM_IP_ADDRESS = '192.168.100.168';
const PORT = '3000';
 
const apolloClient = () => {
 const link = new HttpLink({
    uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/graphql`,
 });
 
 return new ApolloClient({
   link: from([link]),
   cache: new InMemoryCache(),
 });
};
export default apolloClient;    