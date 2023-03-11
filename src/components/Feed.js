import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import fetchFromApi from '../utils/fetchFromApi'

const Feed = () => {

  const [SelectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${SelectedCategory}`).then((data) => { setVideos(data.items) })
  }, [SelectedCategory])
  return (
    //flexDirexction will be initially column then on small screens it will be row
    //Box serves as a wrapper component for most of CSS utility needs
    //sx normal screen is column the md scrren 'row'
    //Typography is used in all text elements
    <Stack sx={{
      flexDirection: {
        sx: 'column', md: 'row'
      }
    }}>
      <Box sx={{
        height: {
          sx: 'auto', md: '92vh'
        },
        borderRight: '1px solid #3d3d3d',
        px: {
          sx: 0, md: 2
        }
      }}>
        {/* passing the SelectedCategory state as a props */}
        <Sidebar
          SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: '1.5', color: '#fff' }}>
          Copyright 2023 Abao
        </Typography >
      </Box>
      {/* NEW BOX FOR VIDEOS */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {SelectedCategory}
          <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={[videos]} />
      </Box>
    </Stack>
  )
}

export default Feed