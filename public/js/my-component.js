var MyComponent = React.createClass({
			render: function(){
				return <div>
							<h1>{this.props.text}</h1>
							<p>{this.props.children}</p>
						</div>;
			}
		});

		React.render(
			<div>
				<MyComponent text="CE">Consultative Exam</MyComponent>
				<MyComponent text="MER">Medical Evidence Request</MyComponent>
				<MyComponent text="TR">Task Request</MyComponent>
			</div>
			, document.getElementById('react-container'));