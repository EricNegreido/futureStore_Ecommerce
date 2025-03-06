import { GraphQLClientSingleton } from "app/graphql/index (5)"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers';

export const createAccessToken = async (email: string, password: string) => {

  const cookiesStore = await cookies();

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
    'email': email,
    'password': password
  })

  if (!customerAccessTokenCreate.customerAccessToken) {
    return {
      "message": customerAccessTokenCreate.customerUserErrors[0].message,
      "status": false
    }
  }
  const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken;

  if (accessToken) {
    (await cookiesStore).set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })

    return {
      "message": "success",
      "token": accessToken,
      "status": true
    }
  }
}