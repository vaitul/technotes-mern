import { Schema, Types, model } from "mongoose";

export type TRoles = "Employee";

export interface IUser {
  username: string;
  password: string;
  roles: Types.Array<TRoles>;
  active: boolean;
}

export const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "Employee",
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

const UserModel = model<IUser>("Users", userSchema);

export default UserModel;
