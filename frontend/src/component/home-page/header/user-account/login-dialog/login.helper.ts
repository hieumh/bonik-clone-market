import { ApiHelper } from "@/helpers/api.helper";
import { ILoginForm } from "./login.model";

export const loginRequest = (formData: ILoginForm) => {
  return ApiHelper.post("/api/v1/auth/login", { data: formData });
};
