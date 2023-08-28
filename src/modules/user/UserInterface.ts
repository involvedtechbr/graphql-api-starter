import { Document } from "mongoose";

export type UserInterface = {
  name: string;
  email: string;
  password: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
} & Document;
