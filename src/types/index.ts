export type AppTransaction = {
  id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  token: string;
  transactionId: string;
  msisdn: string;
  telco: string;
  amount: number;
  expired: boolean;
  transaction_date: Date;
  draw_date: string;
  product: {
    id: number;
    name: string;
    playAmount: number;
  };
};

export interface IUser {
  id: string;
  createdTimestamp: number;
  username: string;
  enabled: boolean;
  totp: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  attributes: IAttributes;
  disableableCredentialTypes: any[];
  requiredActions: any[];
  notBefore: number;
  access: IAccess;
  realmRoles: string[];
  role?: any,
  groups: IGroups[];
}

export interface IGroups {
  id:        string;
  name:      string;
  path:      string;
  subGroups: IGroups[];
}

export interface IAccess {
  manageGroupMembership: boolean;
  view: boolean;
  mapRoles: boolean;
  impersonate: boolean;
  manage: boolean;
}

export interface IAttributes {
  phoneNumber: string[];
  radioId: string[];
}

export interface ILoggedUser extends IUser { }