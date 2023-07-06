import mongoose from "mongoose";
import { IUser, userSchema } from "./UserModel";
import Inc from "mongoose-sequence";

const { Schema, model } = mongoose;

export type TRoles = "Employee";

export interface INote {
  ticket: number;
  user: IUser;
  title: string;
  text: string;
  completed: boolean;
}

const noteSchema = new Schema<INote>(
  {
    ticket: {
      type: Number,
    },
    user: {
      type: userSchema,
      required: true,
      ref: "Users",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//@ts-ignore
const AutoIncrement = Inc(mongoose);
//@ts-ignore
noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 500,
});

const NoteModel = model<INote>("Notes", noteSchema);

export default NoteModel;
