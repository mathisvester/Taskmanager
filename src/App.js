import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Task from './components/Task';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {tasks: this.props.initialTasks};
		this.onTaskChange = this.onTaskChange.bind(this);
  }

	onTaskChange(delta, index) {
		console.log('onTaskChange', index, delta);

		this.state.tasks[index].done = true;
		this.setState(this.state);

		/*this.setState((prevState, props, index) => ({
			tasks: prevState.tasks[index],
		}));*/
	}

  render() {
    return (
      <div className="App">
				<Header title={this.props.title} />
				<ol className="tasks">
					{this.state.tasks.map(function(task, index){
						return(
							<Task
								onTaskChange={(delta) => this.onTaskChange(delta, index)}
								name={task.name}
								done={task.done}
								key={task.id} />
						);
					}.bind(this))}
				</ol>
				<button>Add new task</button>
      </div>
    );
  }
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	initialTasks: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		done: PropTypes.bool.isRequired,
	})).isRequired,
};

App.defaultProps = {
	title: "My first react app"
};

export default App;
