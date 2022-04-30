import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardMatematica() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ display: 'flex', flexDirection:'column', justifyContent:'center'}} >
        <CardMedia 
          component="img"
          // height="200"
          sx={{ width: 151 }}
          image="http://mundotrivium.com.br/img/matematica.svg"
          alt="Matemática"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Matemática
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Acompanhe a resolução dos exercícios da apostila de Matemática com o Professor Flávio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}