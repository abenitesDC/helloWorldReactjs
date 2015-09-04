var Board = React.createClass({
	propTypes : {
		count: function(props, propName){
			if(typeof props[propName] !== "number"){
				return new Error('The count property must be a number');
			}
			if(props[propName] > 100){
				return new Error("Creating " + props[propName] + " notes is ridiculous :)");
			}
		}
	},

	render: function(){
		return (<div className="board">
					{this.state.notes.map(this.eachNote)}
					<button className="btn btn-sm btn-success glyphicon glyphicon-plus"
						onClick={this.add} />
				</div>
			);
	},

	add: function(title, text){
		var arr = this.state.notes;
		var note = {"title": "New title", "text": "New text"};
		arr.push(note);

		this.setState({notes:arr});
	},
	update: function(i, newTitle, newText){
		var arr = this.state.notes;
		var note = arr[i];
		note.title = newTitle;
		note.text = newText;

		this.setState({notes:arr});
	},

	remove: function(i){
		var arr = this.state.notes;
		arr.splice(i, 1);

		this.setState({notes: arr});
	},

	eachNote: function(note, i){
		return(
				<Note 
					key={i} 
					index={i}
					title={note.title}
					onChange={this.update}
					onRemove={this.remove}
					>{note.text}</Note>
			);
	},

	getInitialState: function(){
		return {
			notes: [
				{"title" : "CE", text: "Consultative Exam"},
				{"title" : "MER", text: "Medical Evidence Request"},
				{"title" : "TR", text: "Task Request"}
			]
		}
	}
});

React.render(<Board count={10} />, 
	document.getElementById('react-container2')
	);