import { useAuth } from "../../hooks/useAuth";
import { HeaderContainer, Logout, Profile } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';
import { api } from "../../services";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, userData } = useAuth();

  const avatarUrl = userData.avatar_url 
    ? `${api.defaults.baseURL}/files/${userData.avatar_url}` 
    : avatarPlaceholder

  return (
    <HeaderContainer>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={userData.name}
        />

        <div>
          <span>Bem vindo,</span>
          <strong>{userData.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </HeaderContainer>
  )
}