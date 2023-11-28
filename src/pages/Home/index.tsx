import { useState } from 'react';
import { api } from '../../services/index';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { HomeContainer, Brand, Menu, Search, HomeContent, NewNote } from './styles';
import { Input } from '../../components/Input';
import { DefaultSection } from '../../components/DefaultSection';
import { Note } from './components/Note';
import { useNavigate } from 'react-router-dom';
import { RingLoader } from '../../components/RingLoader';
import { useTheme } from 'styled-components';
import { useQuery } from 'react-query';
import { ITag } from '../../types/tag';
import { INote } from '../../types/note';


async function getNotes(
  { noteTitle = '', tagsFilterSelected = [] }:
    { noteTitle?: string, tagsFilterSelected?: string[] },
) {
  const response = await api.get(`/notes?title=${noteTitle.trim()}&tags=${tagsFilterSelected}`);

  return response.data as INote[];
}

export function Home() {
  const [tagsFilterSelected, setTagsFilterSelected] = useState<string[]>([]);
  const [noteSearch, setNoteSearch] = useState("");
  const { COLORS } = useTheme();

  const notesQuery = useQuery({
    queryKey: ['notes', noteSearch, tagsFilterSelected],
    queryFn: () => getNotes({ noteTitle: noteSearch, tagsFilterSelected }),
  });

  const tagsQuery = useQuery({
    queryKey: ['tags'],
    queryFn: () => api.get('/tags').then((response) => response.data as ITag[]),
  })

  const navigate = useNavigate();

  function handleTagFilterSelected(tagName: string) {
    if (tagName === "all") {
      return setTagsFilterSelected([]);
    }

    const isTagFilterAlreadySelected = tagsFilterSelected.includes(tagName);

    if (isTagFilterAlreadySelected) {
      const filteredTags = tagsFilterSelected.filter(tag => tag !== tagName);

      setTagsFilterSelected(filteredTags);

      return;
    }

    setTagsFilterSelected(prevState => [...prevState, tagName]);
  }

  function handleOpenNoteDetails(noteId: string) {
    navigate(`/details/${noteId}`);
  }

  return (
    <HomeContainer>
      <Brand>
        <h1>NotesOnly</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title='Todos'
            onClick={() => handleTagFilterSelected('all')}
            isActive={tagsFilterSelected.length === 0}
          />
        </li>

        {tagsQuery.data && tagsQuery.data.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagFilterSelected(tag.name)}
                isActive={tagsFilterSelected.includes(tag.name)}
              />
            </li>
          ))
        }

        {tagsQuery.isLoading &&
          <RingLoader
            className="rings-loader"
            color={COLORS.GRAY_100}
            width={32}
            height={32}
          />
        }
      </Menu>

      <Search>
        <Input
          placeholder='Pesquisar pelo título'
          value={noteSearch}
          onChange={event => setNoteSearch(event.target.value)}
        />
      </Search>

      <HomeContent>
        <DefaultSection title='Minhas notas'>
          {notesQuery.data && notesQuery.data.map(note => {
            return (
              <Note
                key={note.id}
                data={note}
                onClick={() => handleOpenNoteDetails(note.id)}
              />
            )
          })}

          {notesQuery.isLoading &&
            <RingLoader
              className="rings-loader"
              color={COLORS.GRAY_100}
              width={80}
              height={80}
            />
          }

        </DefaultSection>
      </HomeContent>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </HomeContainer>
  );
}
