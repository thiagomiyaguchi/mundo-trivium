import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardFisica() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea sx={{ display: 'flex', flexDirection:'column', justifyContent:'center'}}>
        <CardMedia 
          component="img"
          // height="200"
          sx={{ width: 151 }}
          image="http://mundotrivium.com.br/img/fisica.svg"
          alt="Física"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Física
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Resolução dos exercícios da apostila de Física com o Professor Daniel 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}