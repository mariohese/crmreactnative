import React from 'react';
import VisitDetail from "./VisitDetail.js"
import TargetDetail from "./TargetDetail.js"
import CustomerDetail from "./CustomerDetail.js"
import SalesmanDetail from "./SalesmanDetail.js"
import { Text, View, StyleSheet } from 'react-native';



export default class Detail extends React.Component{
	constructor(props) {
		super(props);
	}


	render(){

		var booleano = this.props.hayvisita
		console.log(booleano)

			if(booleano){

				var plannedFor = this.props.visita.plannedFor
				var fulfilledAt = this.props.visita.fulfilledAt

				var alltargets = this.props.visita.Targets

				var customer = this.props.visita.Customer

				var salesman = this.props.visita.Salesman

				console.log("Ha entrado")
			
			
			return(

				<View style={styles.flex}>
					
					<VisitDetail pf={plannedFor} fa={fulfilledAt} />
					
					<TargetDetail alltg = {alltargets}/>
					

					<CustomerDetail cust={customer}/>


					<SalesmanDetail sales={salesman}/>

				</View>

				);

			}
			else{
				console.log("Estoy en el else")
				return null}

			
	}



}

const styles = StyleSheet.create({


	flex: {
    	flex: 1,
    	flexDirection:'column',
    	alignItems:'center',
    	justifyContent:'center'
		
	}


})