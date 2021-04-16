/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
      id
      userId
      courseName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        courseName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const registrationsByUserId = /* GraphQL */ `
  query RegistrationsByUserId(
    $userId: String
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        courseName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
