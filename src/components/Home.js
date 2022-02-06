import {BsSearch, BsPlayCircle} from "react-icons/bs"
import {MdOutlineAddCircleOutline} from "react-icons/md"

import logo from "../img/logo.png"

const Home = (props) => {
	console.log('props in home', props)

	return (
		<div id='homePage'>
			{/* <img src={logo} /> */}
			<h1 id='appName'>NETFLIXIFY</h1>
			<div id='homeContainer'>
				<div class='landingPage'>
					<h3><BsSearch size='25%'/></h3>
					<hr />
					<h5>Search over 17000 Netflix movies and shows across 38 different countries</h5>
				</div>
				<div class='landingPage'>
					<h3><MdOutlineAddCircleOutline size='25%' /></h3>
					<hr />
					<h5>Create your own playlists and add as many videos as you choose!</h5>
				</div>
				<div class='landingPage'>
					<h3><BsPlayCircle size='25%'/></h3>
					<hr />
					<h5>Be directed straight to Netflix based off the show or movie you want to watch.</h5>
				</div>
			</div>
		</div>
	)
}

export default Home
