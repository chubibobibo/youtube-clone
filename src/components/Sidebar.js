import React from 'react'
import { Stack } from '@mui/material'
//categories contains an array of all the categories
import { categories } from '../utils/constants'

//use <Stack> for to be able to set layouts for the elements
//iterate over the categories in the utils directory, that will provide the icons and name for the buttons of the sidebar.

const SelectedCategory = 'New';
function Sidebar() {
    return (
        <Stack direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}>
            {categories.map(category =>
                <button className='category-btn'
                    style={{ background: category.name === SelectedCategory && '#FC1503', color: 'white' }}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            )}

        </Stack>
    )
}

export default Sidebar