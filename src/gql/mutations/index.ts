import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
 mutation Login($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
        id
        username
        email
        lastLogin
        }
    }
`;
