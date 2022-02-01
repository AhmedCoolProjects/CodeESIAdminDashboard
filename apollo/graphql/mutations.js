import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $profession: String!
    $image: String!
    $category: String!
    $post: String!
    $email: String
    $linkedin: String
    $isHidden: Boolean
  ) {
    createPerson(
      first_name: $firstName
      last_name: $lastName
      profession: $profession
      image: $image
      category: $category
      post: $post
      email: $email
      linkedin: $linkedin
      is_hidden: $isHidden
    ) {
      id
    }
  }
`;
export const UPDATE_PERSON = gql`
  mutation UpdatePerson(
    $updatePersonId: ID!
    $firstName: String
    $lastName: String
    $linkedin: String
    $email: String
    $profession: String
    $image: String
    $category: String
    $post: String
    $isHidden: Boolean
  ) {
    updatePerson(
      id: $updatePersonId
      first_name: $firstName
      last_name: $lastName
      linkedin: $linkedin
      email: $email
      profession: $profession
      image: $image
      category: $category
      post: $post
      is_hidden: $isHidden
    ) {
      id
    }
  }
`;
export const DELETE_PERSON = gql`
  mutation Mutation($deletePersonId: ID!) {
    deletePerson(id: $deletePersonId) {
      id
    }
  }
`;
