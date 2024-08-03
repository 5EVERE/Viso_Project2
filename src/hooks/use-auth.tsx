import { useAppSelector } from "../store/redux-hooks";

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);
  console.log(email);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
