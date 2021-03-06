import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function TodoItem(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">

      <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
    {props.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.date}
      </Typography>
      <Typography variant="body2">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions>
    
    </CardActions>
  </React.Fragment>

      </Card>
    </Box>
  );
}
