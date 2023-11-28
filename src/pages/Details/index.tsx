import { useRef } from 'react';
import { useQuery } from 'react-query';
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { DefaultSection } from "../../components/DefaultSection";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { DetailsContent, DetailsContainer, Links } from "./styles";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/';
import { RingLoader } from '../../components/RingLoader';
import { useTheme } from 'styled-components';
import { toast, Id } from 'react-toastify';
import { CustomToast } from './components/CustomToast';
import { ILink } from '../../types/link';
import { ITag } from '../../types/tag';

interface NoteDetail {
  id: string;
  title: string;
  description: string;
  links: ILink[];
  tags: ITag[];
}

export function Details() {
  const { id } = useParams();
  const { COLORS } = useTheme();
  const toastId = useRef<Id>();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    async function removeNote() {
      try {
        await api.delete(`/notes/${id}`);

        toast.dismiss(toastId.current);
        toast.success('Note excluida com sucesso!');

        navigate(-1);
      } catch (error: any) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível excluir a nota");
        }
      }
    }

    toastId.current = toast.info(
      <CustomToast>
        <p>Você tem certeza que quer deletar esta nota?</p>
        <button
          onClick={removeNote}>
          Sim
        </button>

        <button
          onClick={() => { toast.dismiss(toastId.current) }}>
          Não
        </button>
      </CustomToast>,
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  }

  const noteQuery = useQuery({
    queryKey: ['note', id],
    queryFn: async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        return response.data as NoteDetail;
      } catch (error: any) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível carregar os dados da nota.");
        }
      }
    }
  })

  return (
    <DetailsContainer>
      <Header />

      {
        noteQuery.data &&
        <main>
          <DetailsContent>
            <ButtonText
              title="Excluir nota"
              isActive
              onClick={handleRemove}
            />

            <h1>
              {noteQuery.data.title}
            </h1>

            <p>
              {noteQuery.data.description}
            </p>

            {
              noteQuery.data.links &&
              <DefaultSection title="Links úteis">
                <Links>
                  {noteQuery.data.links.map(link => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </DefaultSection>
            }

            {
              noteQuery.data.tags &&
              <DefaultSection title="Marcadores">
                {noteQuery.data.tags.map(tag => (
                  <Tag
                    key={tag.id}
                    title={tag.name}
                  />
                ))}
              </DefaultSection>
            }

            <Button
              title="Voltar"
              onClick={handleBack}
            />
          </DetailsContent>
        </main>
      }

      {noteQuery.isLoading &&
        <RingLoader
          className="details-loader"
          color={COLORS.GRAY_100}
          width={80}
          height={80}
        />
      }

    </DetailsContainer>
  )
}