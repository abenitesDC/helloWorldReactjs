var Note = React.createClass({
	getInitialState: function(){
		return {editing: false}
	},
	randomBetween: function(min, max){
		return (min + Math.ceil(Math.random() * max ));
	},
	edit: function(){
		this.setState({editing: true});
	},
	save: function(){
		this.props.onChange(
			this.props.index,
			this.refs.newTitle.getDOMNode().value,
			this.refs.newText.getDOMNode().value
		)
		this.setState({editing: false});
	},
	remove : function(){
		this.props.onRemove(this.props.index);
	},
	renderDisplay: function(){
		return (
				<div className="note">
					<h1>{this.props.title}</h1>
					<p>{this.props.children}</p>
					<span>
						<button
							onClick={this.edit} 
							className="btn btn-primary glyphicon glyphicon-pencil"/>
						<button
							onClick={this.remove}
							className="btn btn-danger glyphicon glyphicon-trash"/>
					</span>
				</div>
				);
	},
	renderForm: function(){
		return (
			<div className="note">
				<input defaultValue={this.props.title}
					ref="newTitle"
					className="form-control"/>
				<textarea defaultValue={this.props.children}
					ref="newText"
					className="form-control">
				</textarea>
				<button 
					onClick={this.save}
					className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"/>
			</div>
			);
	},
	render: function(){
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderDisplay();
		}
	}
});

// React.render(
// 	<div>
// 		<Note title="CE">Consultative Exam</Note>
// 		<Note title="MER">Medical Evidence Request</Note>
// 		<Note title="TR">Task Request</Note>
// 	</div>
// 	, document.getElementById('react-container2'));