import { Schema, Model, model } from "mongoose";
import { UserInterface } from "./UserInterface";

const UserSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    collection: "user",
  },
);

const UserModel: Model<UserInterface> = model<
  UserInterface,
  Model<UserInterface>
>("User", UserSchema);

export default UserModel;
