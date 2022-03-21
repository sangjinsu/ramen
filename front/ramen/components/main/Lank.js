import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Figure} from 'react-bootstrap';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          1위
        </ListItemAvatar>
        <ListItemText
          primary="신라면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                농심
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
              
            </React.Fragment>
          }
        />
        <Figure>
  <Figure.Image
    width={50}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
</Figure>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          2위
        </ListItemAvatar>
        <ListItemText
          primary="신라면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                농심
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}

            </React.Fragment>
          }
        />
        <Figure>
  <Figure.Image
    width={50}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
</Figure>
        
        
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          3위
        </ListItemAvatar>
        <ListItemText
          primary="신라면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                농심
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}

            </React.Fragment>
          }
        />
        <Figure>
  <Figure.Image
    width={50}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
</Figure>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          4위
        </ListItemAvatar>
        <ListItemText
          primary="신라면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                농심
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}

            </React.Fragment>
          }
        />
        <Figure>
  <Figure.Image
    width={50}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
</Figure>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          5위
        </ListItemAvatar>
        <ListItemText
          primary="신라면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                농심
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}

            </React.Fragment>
          }
        />
        <Figure>
  <Figure.Image
    width={50}
    // height={180}
    alt="171x180"
    src="icon/bongji.png"
  />
</Figure>
      </ListItem>
      
      
      
    </List>
  );
}