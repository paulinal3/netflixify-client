import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	
	let el = document.getElementById('listWithHandle')

	Sortable.create(el, {
		handle: '.glyphicon-move',
		animation: 150
	  });


	return (
		<>
			<div id="listWithHandle" class="list-group">
				<div class="list-group-item">
					<span class="badge">14</span>
					<span class="glyphicon glyphicon-move" aria-hidden="true"></span>
					Drag me by the handle
				</div>
				<div class="list-group-item">
					<span class="badge">2</span>
					<span class="glyphicon glyphicon-move" aria-hidden="true"></span>
					You can also select text
				</div>
				<div class="list-group-item">
					<span class="badge">1</span>
					<span class="glyphicon glyphicon-move" aria-hidden="true"></span>
					Best of both worlds!
				</div>
			</div>
		</>
	)
}

export default Home
