import React from 'react';
import TargetElement from "./TargetElement"
import { FlatList, View, Text, StyleSheet } from 'react-native';


export default class TargetDetail extends React.Component{
	constructor(props) {
		super(props);
	}


	render(){

			var alltargets = this.props.alltg
			console.log("alltargets")
			console.log(alltargets)
			

			return(
				<View style={styles.flex}>
				<Text style={styles.title}>Targets</Text>

				<FlatList data={alltargets} renderItem={(target) =>

				<TargetElement target = {target} />	
				}/>

				</View>
				);
		
			

	}

}

const styles = StyleSheet.create({

	backButton: {
		backgroundColor: 'blue',
		borderRadius: 4,
    	borderWidth: 0.5,
    	margin: 8,
	}

	,

	title: {

		color: 'black',
		fontSize: 18,
		fontWeight: 'bold'

	},

	flex: {
    	flex: 1,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center',
    	backgroundColor: 'green',
		borderRadius: 4,
    	borderWidth: 0.5,
    	width: 320
		
	}


})