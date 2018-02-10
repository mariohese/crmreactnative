import React from 'react';
import VisitListElement from "./VisitListElement"
import { FlatList, View, Text } from 'react-native';


export default class VisitList extends React.Component{
	constructor(props) {
		super(props);
		this.visitClick = this.visitClick.bind(this);
	}


	visitClick(index){
		
		this.props.appClick(index)

	}

	render(){

			var visitlist = this.props.visits
			
			return(							
				<View>
				
				<FlatList data={visitlist} renderItem={(visita) =>

				<VisitListElement visita = {visita} index = {visita.index} visitClick = {this.visitClick}/>	



				}/>

				</View>
				);


	}

}