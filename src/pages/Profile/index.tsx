import { ChangeEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Avatar, Form, ProfileContainer } from "./styles";
import { api } from '../../services';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile() {
  const { userData, updateProfile } = useAuth();

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoadingUpdateProfile, setIsLoadingUpdateProfile] = useState(false);

  const avatarUrl = userData.avatar_url 
    ? `${api.defaults.baseURL}/files/${userData.avatar_url}` 
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile() {
    setIsLoadingUpdateProfile(true);
    await updateProfile({
      updateUserData: {
        name,
        email,
        newPassword,
        oldPassword,
      },
      avatarFile: avatarFile,
    })
    .then(() => {
      setIsLoadingUpdateProfile(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoadingUpdateProfile(false);
    })
  }

  function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);// TRANFORMANDO O FILE OBJECT PARA UMA URL DE PREVIEW DA IMAGEM
    setAvatar(imagePreview);
  }

  return (
    <ProfileContainer>
      <header>
        <button
          type="button"
          onClick={handleBack}
        >
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={oldPassword}
          onChange={event => setOldPassword(event.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdateProfile}
          loading={isLoadingUpdateProfile}
        />
      </Form>
    </ProfileContainer>
  )
}