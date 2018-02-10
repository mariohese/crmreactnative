import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';


export default class VisitDetail extends React.Component{
	constructor(props) {
		super(props);
		this.formatDate = this.formatDate.bind(this);

	}

	formatDate(date){
		return date.substring(0,10)
	}


	render(){

	var pf = this.formatDate(this.props.pf)
	var fa = this.props.fa
	if(fa==null){
		fa="Not fulfilled yet"
	}

	return(
		
		<View style={styles.flex}>
			<Text style={[styles.title]}>Info</Text>
			
			<Text style={styles.titleSmaller}> Planned for:  

				<Text style= {styles.normal}> {pf} </Text>

			</Text>
	
			<Text style={styles.titleSmaller}> Fulfilled at:

				<Text style= {styles.normal}> {fa} </Text>

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

	backButton: {
		backgroundColor: 'blue',
		borderRadius: 4,
    	borderWidth: 0.5,
    	margin: 8,
	}

	,

	normal: {

		fontSize: 16,
		fontWeight: 'normal'
	},

	flex: {
    	flex: 1,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center',
    	backgroundColor: 'green',
		borderRadius: 4,
    	borderWidth: 0.5,
    	margin: 1,
    	width: 320, 
    	height: 60
	}


})