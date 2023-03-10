import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'// box is ajust a simple <div> element.
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'


//you can skip using the return keyword in the function component by changing the curly braces with a parenth
const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Feed />} />
                <Route exact path='/video/:id/' element={<VideoDetail />} />
                <Route exact path='/channel;/:id/' element={<ChannelDetail />} />
                <Route exact path='/search/:searchTerm/' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>

)

export default App

