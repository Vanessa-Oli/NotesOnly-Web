import { ColorRing } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

interface RingLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  width?: number;
  height?: number;
}

export function RingLoader({ color, width = 32, height = 32, ...rest }: RingLoaderProps) {
  const { COLORS } = useTheme();

  const loaderColor = color || COLORS.BACKGROUND_800;

  return (
    <div {...rest}>
      <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          loaderColor,
          loaderColor,
          loaderColor,
          loaderColor,
          loaderColor
        ]}
      />
    </div>

  )
}