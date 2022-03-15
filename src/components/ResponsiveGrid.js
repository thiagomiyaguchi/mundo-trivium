import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardFisica from './CardFisica';
import CardQuimica from './CardQuimica';
import CardMatematica from './CardMatematica';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <Item><CardFisica /></Item>
          </Grid>

           <Grid item xs={4}>
            <Item><CardMatematica /></Item>
          </Grid>

          <Grid item xs={4}>
            <Item><CardQuimica /></Item>
          </Grid>
      </Grid>
    </Box>
  );
}