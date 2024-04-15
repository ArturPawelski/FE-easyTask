interface UserState {
  email: string;
  id: string;
  name: string;
  setUser: (email: string, id: string, name: string) => void;
}
