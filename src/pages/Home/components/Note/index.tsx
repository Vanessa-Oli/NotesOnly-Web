import { ButtonHTMLAttributes } from 'react';
import { Tag } from '../../../../components/Tag';
import { INote } from '../../../../types/note';
import { NoteContainer } from './styles';

type NoteProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: INote;
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <NoteContainer
      {...rest}
    >
      <h2>{data.title}</h2>
      {
        data.tags.length > 0 &&
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      }
    </NoteContainer>
  );
}