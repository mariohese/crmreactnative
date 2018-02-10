import React from 'react';

import VisitList from "./VisitList.js";
import Detail from "./Detail.js";
import { Text, View, Modal, TouchableHighlight, StyleSheet } from 'react-native';

import axios from 'axios';

export default class Crm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hayvisita: false,
			modalVisible:false,
			
			visits: [],
			visita: 0,
		};
		this.appClick = this.appClick.bind(this)
	}


	appClick(index){
		let visit = this.state.visits[index]

		console.log(index)
		console.log(visit)
		this.setState({
			visita: visit,
			modalVisible: true,
			hayvisita: true,
			

		});
	}

	async getVisitas(){
		var url = 'https://dcrmt.herokuapp.com/api/visits/flattened?token=77b8e332ce25369a3285'
		var response = await fetch(url,{
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type':'application/json',
			}
		});
		var responseJson = await response.json();
		return responseJson;
	}

	componentDidMount() {
            this.getVisitas().then(function(visitas){
            	if((typeof visitas == "object") && (visitas instanceof Array)){ //if

            		for(let i=0; i<visitas.length; i++){ //for
            			visitas[i].key = i;} //for
            			this.setState({visits: visitas});
            			
            		} //if

            	}.bind(this)).catch(function(exception){ //zz
            		alert("Exception: " + exception);
            	});//zz
	}


	_setModalVisible(visible){
		this.setState({modalVisible: visible});
	}


	render() {

		var listavisita = this.state.visits
		var visita = this.state.visita
		var hayvisita = this.state.hayvisita

		return (
			<View style={styles.flex}>

				<VisitList visits={listavisita} appClick={this.appClick}/>

				<Modal style={styles.flex} visible={this.state.modalVisible} onRequestClose={() => {this._setModalVisible(false)}}>
				
				<TouchableHighlight style={styles.backButton} onPress={() => {this._setModalVisible(false)}}>
						<Text style={styles.backButton}> GO BACK </Text>
				</TouchableHighlight>
				<Detail visita={visita} hayvisita={hayvisita}/>
				
				</Modal>

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
	},

	flex: {
    	flex: 1,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center'
		
	}


})