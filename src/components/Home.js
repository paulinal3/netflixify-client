import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

const Home = (props) => {
	console.log('props in home', props)

	return (
		<div id='homePage'>
			{/* <h1 id='appName'>NETFLIXIFY</h1> */}
			<div>
				<h1>Search</h1>
			</div>
			<div>
				<h1>Add</h1>
			</div>
			<div>
				<h1>Watch</h1>
			</div>
		</div>
	)
}

export default Home
