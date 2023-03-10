import React from 'react'
//layout tool from @mui
import { Stack } from '@mui/material'
//allows client side routing when accessing a link just like an <a href>
import { Link } from 'react-router-dom'
//importing logo from the created constants.js file
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    //p is for padding and sx is for styles. the rest you can find in the doc of mui
    <Stack direction='row' alignitems='center' p={2} sx={{ position: 'sticky', background: '#000', justifyContent: 'space-between' }}>
      {/* logo as the link  */}
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar