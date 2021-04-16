/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $input: CreateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    createRegistration(input: $input, condition: $condition) {
      id
      userId
      courseName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $input: UpdateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    updateRegistration(input: $input, condition: $condition) {
      id
      userId
      courseName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $input: DeleteRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    deleteRegistration(input: $input, condition: $condition) {
      id
      userId
      courseName
      createdAt
      updatedAt
      owner
    }
  }
`;
