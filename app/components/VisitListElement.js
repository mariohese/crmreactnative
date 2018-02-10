import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Moment from 'react-moment';



export default class VisitListElements extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.formatDate = this.formatDate.bind(this);
		this.visita = {}
	}

	handleClick(){
		
		this.props.visitClick(this.props.index)
	}

	formatDate(date){
		return date.substring(0,10)
	}



	componentDidMount() {
			console.log("VisitListElements")
			console.log(this.props.visita)

            return this.setState({visita: this.props.visita});
	}




	render(){

	if(this.props.visita){
		
		var visita = this.props.visita
		var plannedFor = this.formatDate(visita.item.plannedFor)

	return(
		
		<TouchableHighlight onPress={this.handleClick} style={styles.button}>
		<View>
		<Text style={styles.title}>Customer:
			<Text style={styles.normal}> {visita.item.Customer.name}
			</Text>
		</Text>
		
		<Text style={styles.title}>Salesman:
			<Text style={styles.normal}> {visita.item.Salesman.fullname}
			</Text>
		</Text> 


		<Text style={styles.title}>Date:
			<Text style={styles.normal}> {plannedFor}
			</Text>
		</Text> 

		</View>
		</TouchableHighlight>
		
	)

	}

	else{return null}
	
		

	}

}

const styles = StyleSheet.create({

	title: {

		padding: 15,
		margin: 2,
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold'

	},

	normal: {

		padding: 15,
		margin: 2,
		fontSize: 18,
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
		
	}


})