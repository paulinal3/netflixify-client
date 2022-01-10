// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Profile from './components/profile/Profile'
import Search from './components/external/Search'

import { getNetflixVideos, getSearchTermRes } from './api/external'

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

	// <---------- EXTERNAL API STATES & HELPER METHODS ----------> //
	const [netflixVids, setNetflixVids] = useState([])

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
							<Profile user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/search'
					element={ <Search netflixVids={netflixVids} /> }
				/>
			</Routes>
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
