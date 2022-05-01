import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import  {Grid} from "@material-ui/core";
import	{Link} from 'react-router-dom';

export default function CadernosFisica() {
  return (
    <div>
      <Accordion sx={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography gutterBottom variant="h3" component="div">Caderno 1</Typography> */}
          <Typography gutterBottom variant="h3" component="div" sx={{marginBottom:'0px'}}>
              <Grid container direction="row" alignItems="center" justifyContent='center'>
                Caderno 1<MenuBookTwoToneIcon fontSize="inherit" color='primary' sx={{marginLeft:'20px'}}/>
              </Grid>
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Link to="/FisicaUnidade1">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 1
              </Button>
            </Link> 
            
            <Link to="/FisicaUnidade2">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 2
              </Button>
            </Link> 

            <Link to="/FisicaUnidade3">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 3
              </Button>
            </Link>

            <Link to="/FisicaUnidade4">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 4
              </Button>
            </Link>

          </Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion sx={{marginBottom:'10px'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography gutterBottom variant="h3" component="div">Caderno 1</Typography> */}
          <Typography gutterBottom variant="h3" component="div" sx={{marginBottom:'0px'}}>
              <Grid container direction="row" alignItems="center" justifyContent='center'>
                Caderno 2<MenuBookTwoToneIcon fontSize="inherit" color='primary' sx={{marginLeft:'20px'}}/>
              </Grid>
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Link to="/FisicaCaderno2Unidade1">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 1
              </Button>
            </Link> 
            
            <Link to="/FisicaCaderno2Unidade2">
              <Button color="primary" size='large' variant="contained" sx={{width: '100%', marginBottom:'10px'}}>
                  Unidade 2
              </Button>
            </Link> 


          </Typography>

        </AccordionDetails>
      </Accordion>

     

   
    </div>
  );
}
