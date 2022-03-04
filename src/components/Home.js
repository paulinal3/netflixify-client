import {BsSearch, BsPlayCircle} from "react-icons/bs"
import {MdOutlineAddCircleOutline} from "react-icons/md"

import logo from "../img/logo.png"

const Home = (props) => {
	console.log('props in home', props)

	return (
		<div className="page-container" id="home-page-container">
			{/* <img src={logo} /> */}
			<h1 id='app-name'>Netflixify</h1>
			<div className='app-features-container'>
				<div className='app-feature'>
					<h3><BsSearch className="features-icon" size='15%'/></h3>
					<hr />
					<h5>Search over 17000 Netflix movies and shows across 38 different countries</h5>
				</div>
				<div className='app-feature'>
					<h3><MdOutlineAddCircleOutline className="features-icon" size='15%' /></h3>
					<hr />
					<h5>Create your own playlists and add as many videos as you choose!</h5>
				</div>
				<div className='app-feature'>
					<h3><BsPlayCircle className="features-icon" size='15%'/></h3>
					<hr />
					<h5>Be directed straight to Netflix based off the show or movie you want to watch.</h5>
				</div>
			</div>
		</div>
	)
}

export default Home
