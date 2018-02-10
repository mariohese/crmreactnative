import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';


export default class CustomerDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: ""
		};
		
	}

	getPhoto() {
          axios.get('this.props.sales.Photo.url')
                .then(function(response){
                    this.setState({photo: response.data});

                }.bind(this));

	}

	render(){

	var sales = this.props.sales
	var pict = this.state.photo

	return(
		
		<View style={styles.flex}>

			<Text style={styles.title}>Salesman </Text>

			<Text style={styles.titleSmaller}>  Name: 

				<Text style={styles.normal}> {sales.fullname} </Text>

			</Text>

			<Text style={styles.titleSmaller}> Email: 

				<Text style={styles.normal}> {sales.email1} </Text>

			</Text>

			<Text style={styles.titleSmaller}> Phone: 

				<Text style={styles.normal}> {sales.phone1} </Text>

			</Text>
	
		</View>
	)
		

	}

}

const styles = StyleSheet.create({

	title: {
		color: 'black',
		fontSize: 19,
		fontWeight: 'bold'

	},

	titleSmaller: {

		color: 'black',
		fontSize: 17,
		fontWeight: 'bold'

	},

	normal: {

		fontSize: 16,
		fontWeight: 'normal'
	},

	button: {
		backgroundColor: 'green',
		borderRadius: 4,
    	borderWidth: 0.5,
    	borderColor: '#d6d7da',
    	margin: 8,
    	flex: 1,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center'
		
	},

	flex: {
    	flex: 2,
    	flexDirection:'column',
    	alignItems:'center',
    	backgroundColor: 'green',
		borderRadius: 4,
    	borderWidth: 0.5,
    	margin: 1,
    	width: 320
	}




})