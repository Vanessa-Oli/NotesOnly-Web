import { useState } from 'react';
import { Button } from "../../components/Button";
import { DefaultSection } from "../../components/DefaultSection";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem/inde";
import { Textarea } from "../../components/Textarea";
import { NewContainer, Form } from "./styles";
import { api } from '../../services/index';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { toast } from 'react-toastify';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [isLoadingRegisterNote, setIsLoadingRegisterNote] = useState(false);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    if (newLink.trim() === "") return;

    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(linkIndex: number) {
    const updatedLinks = links.filter((link, index) => index !== linkIndex);

    setLinks([...updatedLinks]);
  }

  function handleAddTag() {
    if (newTag.trim() === "") return;

    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(tagIndex: number) {
    const updatedTags = tags.filter((tags, index) => index !== tagIndex);

    setTags([...updatedTags]);
  }

  async function handleRegisterNote() {
    setIsLoadingRegisterNote(true);

    if (!title.trim() || newLink.trim() || newTag.trim()) {
      setIsLoadingRegisterNote(false);
    }

    if (!title.trim()) {
      return toast.info("Digite um título para a nota!");
    }

    if (newLink.trim()) {
      return toast.info("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.", { autoClose: 10000 });
    }

    if (newTag.trim()) {
      return toast.info("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.", { autoClose: 10000 });
    }

    try {
      await api.post("/notes", {
        title,
        description,
        links,
        tags,
      })

      toast.success("Nota criada com sucesso!");

      navigate(-1);
    } catch (error: any) {
      setIsLoadingRegisterNote(false);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao cadastrar nota!")
      }
    }
  }

  return (
    <NewContainer>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title='voltar'
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <Textarea
            placeholder="Observações"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />

          <DefaultSection title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(index)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={event => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </DefaultSection>

          <DefaultSection title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(index)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={event => setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </DefaultSection>

          <Button
            title="Salvar"
            onClick={handleRegisterNote}
            loading={isLoadingRegisterNote}
          />
        </Form>
      </main>
    </NewContainer>
  );
}