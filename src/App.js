import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Footer from './components/shared/Footer'

import Home from './components/home/Home'
import Search from './components/search/Search'

import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Profile from './components/profile/Profile'
import ShowPlaylist from './components/profile/playlist/Show/ShowPlaylist'
import ShowWatched from './components/profile/playlist/Show/ShowWatched'

// import { getNetflixVideos, getSearchTermRes } from './api/external'
import { getPlaylists } from './api/playlist'
import { useEffect } from 'react'


const App = () => {

    // <---------- USER STATES & HELPER METHODS ----------> //
    const [user, setUser] = useState(null)
    const [msgAlerts, setMsgAlerts] = useState([])

    console.log('user in app', user)
    console.log('message alerts', msgAlerts)
    const clearUser = () => {
        console.log('clear user ran')
        setUser(null)
    }

    const deleteAlert = (id) => {
        setMsgAlerts((prevState) => {
            return (prevState.filter((msg) => msg.id !== id))
        })
    }

    const msgAlert = ({ heading, message, variant }) => {
        const id = uuid()
        setMsgAlerts(() => {
            return (
                [{ heading, message, variant, id }]
            )
        })
    }

    // <---------- PLAYLIST STATES & HELPER METHODS ----------> //
    const [playlists, setPlaylists] = useState([])

    // useEffect(() => {
    //     if (user) {
    //         getPlaylists(user)
    //             .then(foundPlaylists => {
    //                 // console.log(`these are all the current user's playlists \n`, foundPlaylists)
    //                 setPlaylists(foundPlaylists.data.foundPlaylists)
    //             })
    //             .catch(err => console.log)
    //     }
    // }, [playlists])

    const getAllPlaylists = () => {
    	getPlaylists(user)
    		.then(foundPlaylists => {
    			// console.log(`these are all the current user's playlists \n`, foundPlaylists)
    			setPlaylists(foundPlaylists.data.foundPlaylists)
    		})
    		.catch(err => console.log)
    }

    // <---------- EXTERNAL API STATES & HELPER METHODS ----------> //
    // const [netflixVids, setNetflixVids] = useState([])

    // useEffect(() => {
    // 	getNetflixVideos()
    // 		.then(videos => {
    // 			console.log('these are all the videos on US Netflix\n', videos.data)
    // 			setNetflixVids(videos.data.ITEMS)
    // 		})
    // 		.catch(err => console.error)
    // }, [])

    // const searchTermVids = () => {
    // 	getSearchTermRes()
    // 		.then(videos => {
    // 			console.log('thesea re the videos based on search term\n', videos)
    // 		})
    // 		.catch(err => console.error)
    // }

    return (
        <Fragment>
            <Header user={user} />
            <Routes>
                {/* <---------- USER ROUTES ----------> */}
                <Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
                <Route
                    path='/sign-up'
                    element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
                />
                <Route
                    path='/sign-in'
                    element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
                />
                <Route
                    path='/sign-out'
                    element={
                        <RequireAuth user={user}>
                            <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
                        </RequireAuth>
                    }
                />
                <Route
                    path='/change-password'
                    element={
                        <RequireAuth user={user}>
                            <ChangePassword msgAlert={msgAlert} user={user} />
                        </RequireAuth>}
                />
                <Route
                    path='/profile'
                    element={
                        <RequireAuth user={user}>
                            <Profile user={user} getAllPlaylists={getAllPlaylists} playlists={playlists} setPlaylists={setPlaylists} />
                        </RequireAuth>
                    }
                />
                {/* <---------- SEARCH ROUTES ----------> */}
                <Route
                    path='/search'
                    element={<Search user={user} getAllPlaylists={getAllPlaylists} playlists={playlists} />}
                />
                {/* <---------- PLAYLIST ROUTES ----------> */}
                <Route
                    path='/playlists/:id'
                    element={<ShowPlaylist user={user} getAllPlaylists={getAllPlaylists} playlists={playlists} />}
                />
                <Route
                    path='/playlists/watched'
                    element={<ShowWatched user={user} />}
                />
            </Routes>
            {/* <Footer /> */}
            {msgAlerts.map((msgAlert) => (
                <AutoDismissAlert
                    key={msgAlert.id}
                    heading={msgAlert.heading}
                    variant={msgAlert.variant}
                    message={msgAlert.message}
                    id={msgAlert.id}
                    deleteAlert={deleteAlert}
                />
            ))}
        </Fragment>
    )
}

export default App
