import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';



export default class TargetElement extends React.Component{
	constructor(props) {
		super(props);
	}

	


	render(){

	var target = this.props.target
	var hayvisita = this.props.hayvisita


	if (target.item.success ==false){
		var success = "Pending"
	}
	else {
		var success = "Succeded"
	}
	console.log(target)

	return(
		<View>
			<Text style={styles.normal, styles.flex}> {target.item.Company.name}
				
				<Text style={styles.normal, styles.flex}> ( {target.item.TargetType.name} ) 
			
					<Text style={styles.normal, styles.flex}> {success} </Text>

				</Text>

			</Text>
			
		</View>
		
	);


	}

}

const styles = StyleSheet.create({

	title: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold'

	},

	normal: {
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