import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import	{Link} from 'react-router-dom';

export default function CadernoFisica1() {
  return (

    <Link to="/fisica">

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="http://mundotrivium.com.br/img/fisica_quadro.jpg"
            alt="Física"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Caderno 1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}