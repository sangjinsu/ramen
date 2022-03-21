import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Figure} from 'react-bootstrap';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
<Figure>
  <Figure.Image
    width={100}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
  <Figure.Caption>
    봉지라면
  </Figure.Caption>
</Figure>
  );
}