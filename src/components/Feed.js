import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'

const Feed = () => {
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
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{ mt: '1.5', color: '#fff' }}>
          Copyright 2023 Abao
        </Typography >
      </Box>
    </Stack>
  )
}

export default Feed