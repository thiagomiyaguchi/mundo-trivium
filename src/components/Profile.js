import { useGoogleAuth } from './googleAuth';

const Profile = () => {
    const { googleUser } = useGoogleAuth();
  
    return (
      <div>
        <h1 className='nome'>Olá, {googleUser.profileObj.name}</h1>
        {/* <p>{googleUser.profileObj.email}</p> */}
        {/* <img src={googleUser.profileObj.imageUrl} alt="Fotinha" /> */}
      </div>
    )}

export default Profile;