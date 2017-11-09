import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingle, toggleComplete} from '../actions';

class SingleItem extends Component{
	componentDidMount(){
		this.props.getSingle(this.props.match.params.id);
	}  
	toggleComplete(){
		// console.log('toggle complete', this.props.single._id);
		this.props.toggleComplete(this.props.single._id);
	}

	render(){
		const{single} = this.props;
		if(!single){
			return <div>...loading loading loading</div>
		}

		return(
			<div>
				<h3>
					{single.title}
				</h3>
				<p>Details: {single.details}</p>
				<p>Created by: {single.userId}</p>
				<p>Status: {single.complete ? 'complete' : 'in progress'}</p>
				<button className={`btn ${single.complete ? 'red' : 'cyan'} lighten-1`} onClick={()=>this.toggleComplete()}>
					{single.complete ? 'revert' : 'complete'}
				</button>
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		single: state.todo.single
	}
}

export default connect(mapStateToProps,{getSingle, toggleComplete})(SingleItem);