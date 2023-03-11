import React from 'react'
import { Stack } from '@mui/material'
//categories contains an array of all the categories
import { categories } from '../utils/constants'

//use <Stack> for to be able to set layouts for the elements
//iterate over the categories in the utils directory, that will provide the icons and name for the buttons of the sidebar.

// const SelectedCategory = 'New'; THIS LINE WILL BE REMOVED
function Sidebar({ SelectedCategory, setSelectedCategory }) {
    return (
        <Stack direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}>
            {categories.map(category =>
                <button className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{ background: category.name === SelectedCategory && '#FC1503', color: 'white' }}
                    key={category.name}
                >
                    <span style={{ color: category.name === SelectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                    <span style={{ opacity: category.name === SelectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            )}

        </Stack>
    )
}

export default Sidebar