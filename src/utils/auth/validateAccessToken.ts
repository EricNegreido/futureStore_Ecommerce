import { GraphQLClientSingleton } from 'app/graphql/index (5)';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {

  const cookiesStore = cookies();
  const accessToken =  cookiesStore.get('accessToken')?.value;

  if(!accessToken) return;

  const graphqlClient = await GraphQLClientSingleton.getInstance().getClient();

  console.log(graphqlClient);
  const { customer } = await graphqlClient.request(customerName, {
    customerAccessToken : accessToken
  });

  return customer;
}