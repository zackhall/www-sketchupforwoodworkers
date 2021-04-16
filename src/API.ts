/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRegistrationInput = {
  id?: string | null,
  userId: string,
  courseName: string,
};

export type ModelRegistrationConditionInput = {
  userId?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  and?: Array< ModelRegistrationConditionInput | null > | null,
  or?: Array< ModelRegistrationConditionInput | null > | null,
  not?: ModelRegistrationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Registration = {
  __typename: "Registration",
  id?: string,
  userId?: string,
  courseName?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateRegistrationInput = {
  id: string,
  userId?: string | null,
  courseName?: string | null,
};

export type DeleteRegistrationInput = {
  id?: string | null,
};

export type ModelRegistrationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  and?: Array< ModelRegistrationFilterInput | null > | null,
  or?: Array< ModelRegistrationFilterInput | null > | null,
  not?: ModelRegistrationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRegistrationConnection = {
  __typename: "ModelRegistrationConnection",
  items?:  Array<Registration | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateRegistrationMutationVariables = {
  input?: CreateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type CreateRegistrationMutation = {
  createRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRegistrationMutationVariables = {
  input?: UpdateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type UpdateRegistrationMutation = {
  updateRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRegistrationMutationVariables = {
  input?: DeleteRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type DeleteRegistrationMutation = {
  deleteRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetRegistrationQueryVariables = {
  id?: string,
};

export type GetRegistrationQuery = {
  getRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRegistrationsQueryVariables = {
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegistrationsQuery = {
  listRegistrations?:  {
    __typename: "ModelRegistrationConnection",
    items?:  Array< {
      __typename: "Registration",
      id: string,
      userId: string,
      courseName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type RegistrationsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RegistrationsByUserIdQuery = {
  registrationsByUserId?:  {
    __typename: "ModelRegistrationConnection",
    items?:  Array< {
      __typename: "Registration",
      id: string,
      userId: string,
      courseName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRegistrationSubscriptionVariables = {
  owner?: string,
};

export type OnCreateRegistrationSubscription = {
  onCreateRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRegistrationSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateRegistrationSubscription = {
  onUpdateRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRegistrationSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteRegistrationSubscription = {
  onDeleteRegistration?:  {
    __typename: "Registration",
    id: string,
    userId: string,
    courseName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
