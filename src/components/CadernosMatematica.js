import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import  {Grid} from "@material-ui/core";

export default function CadernosMatematica() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography gutterBottom variant="h3" component="div">Caderno 1</Typography> */}
          <Typography gutterBottom variant="h3" component="div">
              <Grid container direction="row" alignItems="center" justifyContent='center'>
                Caderno 1<MenuBookTwoToneIcon fontSize="inherit" color='primary' />
              </Grid>
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                Unidade 1
            </Button>
            <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                Unidade 2
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>

     

   
    </div>
  );
}
