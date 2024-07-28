export interface UserTypes {
  name: string;
  email: string;
  token: Nullable<string>;
  error: boolean;
}

type Nullable<Types> = null | Types;
