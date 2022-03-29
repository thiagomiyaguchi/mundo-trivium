import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardFisicaUn3() {
  return (
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
            Unidade 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Faça em Casa - Página:36
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}