import { useGoogleAuth } from './googleAuth';
import Button from '@mui/material/Button';

export default function LoginButton() {
  
    const { signIn } = useGoogleAuth();
    
    return (
      <>
        <Button color="primary" variant="contained" onClick={signIn}>Login</Button>
            
      </>
    );
  }