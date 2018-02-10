import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';



export default class CustomerDetail extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){

	var cust = this.props.cust

	return(
		
		<View style={styles.flex}>
		<Text style={styles.title}>Customer </Text>

		<Text style={styles.titleSmaller}>	Name: 

			<Text style={styles.normal}> {cust.name} </Text>

		</Text>

		<Text style={styles.titleSmaller}> Code: 
			
			<Text style={styles.normal}> {cust.code} </Text>

		</Text>

		<Text style={styles.titleSmaller}> CIF: 

			<Text style={styles.normal}> {cust.cif} </Text>

		</Text>

		<Text style={styles.titleSmaller}> Email: 

			<Text style={styles.normal}> {cust.email1} </Text>

		</Text>

		<Text style={styles.titleSmaller}> Address: 

			<Text style={styles.normal}> {cust.address1} </Text>

		</Text>

		<Text style={styles.titleSmaller}> Phone: 
			<Text style={styles.normal}> {cust.phone1} </Text>

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

	flex: {
    	flex: 2,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center',
    	backgroundColor: 'green',
		borderRadius: 4,
    	borderWidth: 0.5,
    	margin: 1,
    	width: 320
	}



})