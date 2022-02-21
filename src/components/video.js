import React from 'react';
// import AppBar from '@material-ui/core/AppBar'
// import ToolBar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';
import ReactPlayer from 'react-player';
import PrivateButtonAppBar from './PrivateButtonAppBar';

function Video() {
  return (
    <>
  {/* <AppBar>
    <ToolBar>
      <Typography variant="h6">Trivium - Novo Ensino Médio</Typography>
    </ToolBar>
  </AppBar>
  <ToolBar /> */}
  <PrivateButtonAppBar />
    <Container maxWidth="md">
      {/* <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
        // muted={false}
        playing={true}
        controls={true}
      /> */}

          <ReactPlayer config={{
          file: {
            attributes: {
              onContextMenu: e => e.preventDefault(),
              controlsList: 'nodownload'
            }
            }
          }} controls url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />

    </Container>
  </>
  );
}

export default Video;
