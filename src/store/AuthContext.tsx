import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services";
import { toast } from "react-toastify";

interface UserData {
  name: string,
  email: string,
  password: string,
  avatar_url: string | null,
  created_at: string;
  updated_at: string;
}

interface AuthContextData {
  userData: UserData;
  authToken: string;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateProfile: (userRequestData: UserUpdateRequestData) => Promise<void>;
}

interface UserUpdateRequestData {
  updateUserData: {
    name: string;
    email: string;
    newPassword?: string;
    oldPassword?: string;
    avatar_url?: string;
  },
  avatarFile: File | null;
}

const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState({} as UserData)
  const [authToken, setAuthToken] = useState("");

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { token, user } = response.data;

      localStorage.setItem("@NotesOnly:token", token);

      /* INSERINDO TOKEN NO HEADER DE TODAS AS REQUISIÇÕES */
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUserData(user);
      setAuthToken(token);

      toast.success("Usuário logado com sucesso!");

    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível efetuar o login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@NotesOnly:token");

    setUserData({} as UserData);
  }

  async function updateProfile({ updateUserData, avatarFile }: UserUpdateRequestData) {
    try {
      if (avatarFile) {
        // FORMATANDO ARQUIVO DE AVATAR PARA O FORMATO CORRETO PARA O ENVIO NA REQUISIÇÃO
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        updateUserData.avatar_url = response.data.avatar_url;
      }

      await api.put("/users", updateUserData);
      //localStorage.setItem("@NotesOnly:user", JSON.stringify(updateUserData));

      setUserData(prevState => {
        return {
          ...prevState,
          name: updateUserData.name,
          email: updateUserData.email,
          password: updateUserData.newPassword || prevState.password,
          avatar_url: updateUserData.avatar_url || prevState.avatar_url,
        }
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@NotesOnly:token");

    async function fetchUserData() {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await api.get("/users");
        const user = response.data;

        setUserData(user);
        setAuthToken(token!);
      } catch (error: any) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  // const userQuery = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const token = JSON.parse(localStorage.getItem("@NotesOnly:token") || '');

  //     try {
  //       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //       const response = await api.get("/users");
  //       const user = response.data;

  //       return { user, token };
  //     } catch (error: any) {
  //       console.log(error);
  //     }
  //   }
  // });

  // setUserData(userQuery.data?.user);
  // setAuthToken(userQuery.data?.token);

  return (
    <AuthContext.Provider value={{
      userData,
      authToken,
      signIn,
      signOut,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }