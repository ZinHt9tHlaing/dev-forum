import { ZodError } from "zod";

export type ActionStateTypes = {
  message: string;
  payload?: FormData;
};

export const actionStateFilter = (
  error: unknown,
  formData: FormData,
): ActionStateTypes => {
  if (error instanceof ZodError || error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
    };
  }

  return {
    message: "Something went wrong",
    payload: formData,
  };
};
