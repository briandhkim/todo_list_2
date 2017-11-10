import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addItem} from '../actions';
import $ from 'jquery';

class AddItem extends Component{
	renderInput({input, label, type, placeholder, meta:{touched, error}}){
		return (
			<div>
				<label>{label}</label>
				<input {...input} type={type} placeholder={placeholder}/>
				<p className="red-text text-lighten-2">{touched && error}</p>
			</div>
		)
	}

	toastMsg(msgString, time){ 
	    const msg = $('<div>',{
	        text: msgString,
	        class:'toast'       
	    }).css({
	        position: 'fixed',
	        right: '-150px',
	        top: '-125px',
	        'width': '250px',
	        'padding': '7px',
	        'background-color': 'rgba(0,0,0,0.7)',
	        'color' : 'white',
	        'z-index': 1000,
	        'border-radius': '15px',
	        'font-family': "'Orbitron', sans-serif",
	        'font-size': '15px'
	    }).animate({
	        right: '+=200px',
	        top: '+=135px'
	    }, 900);
	    $('body').append(msg);
	    setTimeout(function(){
	        $('.toast').remove();
	    }, time);
	}

	submitItem(values){
		// console.log(values);
		this.props.addItem(values).then(()=>{
			this.props.history.push('/');
			this.toastMsg(`added new item: ${values.title}`, 3500);
		});
	}

	render(){
		// console.log('props', this.props);
		const{handleSubmit, reset} = this.props;

		return(
			<div>
				<h1 className="center-align"> add new thing </h1>
				<div className="right-align">
					<Link to="/" className="btn green darken-1">Back</Link>
				</div>
				<form onSubmit={handleSubmit( (val)=>{this.submitItem(val)} ) }>
					<Field name="title" component={this.renderInput} type="text" placeholder="add something" label="Title"/>
					<Field name="details" component={this.renderInput} type="text" placeholder="read a book or something" label="Details" />
					<div className="right-align">
						<button style={{marginRight: '20px'}} className="btn amber accent-4 waves-effect waves-teal"> add new </button>
						<button type="button" onClick={reset} className="btn brown lighten-1 waves-effect waves-light">reset</button>
					</div>
				</form>
				
			</div>
		)
	}
}

function validation(values){
	const error = {};
	if(!values.title){
		error.title = 'enter a title'
	}

	if(!values.details){
		error.details = "enter some details"
	}

	return error;
}

AddItem = reduxForm({
	form:'add-item',
	validate: validation
})(AddItem);

export default connect(null,{addItem})(AddItem);