"use server"

import { GraphQLClientSingleton } from "app/graphql/index (5)"
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";

export const handleCreateuser = async (formData: FormData) => {

  const formDataObject = Object.fromEntries(formData);
  delete formDataObject['password_confirmation'];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: '+54' + formDataObject.phone
    }
  }
  const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
  console.log(customerCreate);
  const { customerUserErrors, customer } = customerCreate
  if (customer?.firstName) {
    await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    redirect('/store')
  }
}
export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const data = await createAccessToken(formDataObject.email as string, formDataObject.password as string);
  if (data?.status) {
    redirect('/store');
  }
}