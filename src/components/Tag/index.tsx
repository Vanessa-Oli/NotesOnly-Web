import { TagContainer } from './styles';

interface TagProps {
  title: string;
}

export function Tag({ title, ...rest }: TagProps) {
  return (
    <TagContainer {...rest}>
      {title}
    </TagContainer>
  )
}