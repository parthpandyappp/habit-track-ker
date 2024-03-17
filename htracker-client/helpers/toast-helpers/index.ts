import { ReactNode } from "react";
import toast from "react-hot-toast";

export const notifySuccess = (message: string) => toast.success(`${message}`);
export const notifyCustom = (message: any) =>
  toast.custom(message, { duration: 1000 });
