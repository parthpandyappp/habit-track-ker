import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export const ToastProvider = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};
