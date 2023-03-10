import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    return (
        //will be using Paper from @ mui which is just a div with white background
        //inline styling the the paper
        //setting a props to paper called component which will gives it a function of a form then set the event handler
        <Paper
            component='form'
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }//margin right on sm devices
            }}
        >
            <input
                className='search-bar'
                type='text'
                value=''
                onChange={() => { }}
                placeholder='Search'
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar