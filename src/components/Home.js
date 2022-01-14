import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	
	// let el = document.getElementById('listWithHandle')

	// Sortable.create(el, {
	// 	handle: '.glyphicon-move',
	// 	animation: 150
	//   });


	return (
		<div id='homePage'>
			<h1 id='appName'>NETFLIXIFY</h1>
		</div>
	)
}

export default Home
