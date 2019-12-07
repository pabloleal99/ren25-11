import React, {Component} from 'react';
import {View,AsyncStorage, Text, Button,Alert,TextInput} from 'react-native';
import { List } from 'native-base';

//import List from './listaRendiciones'

export default class Rendicion extends Component{
    static navigationOptions = {
        title:'Rendicion',
        headerStyle:{
            backgroundColor:'#1565c0'
        },
        headerTintColor:'#fff',
        headerTitletStyle:{
            fontWeight:'bold',
        },

    };
    constructor(){
       super()

       this.state = {
          nombre:'',
          apellido:'',
          rut:'',
          tipodedocumento:'',
          numerodedocumento:'',
          categoria:'',
          formadepago:'',
          totalgasto:''

       }
    }

    changeNombre(nombre){
       this.setState({nombre})
    }
    changeApellido(apellido){
      this.setState({apellido})
   }
   changeRut(rut){
      this.setState({rut})
   }
   changeTipoDocumento(tipodedocumento){
      this.setState({tipodedocumento})
   }
   changeNumeroDocumento(numerodedocumento){
      this.setState({numerodedocumento})
   }
   changeCategoria(categoria){
      this.setState({categoria})
   }
   changeFormaPago(formadepago){
      this.setState({formadepago})
   }
   changeTotalGasto(totalgasto){
      this.setState({totalgasto})
   }



    buttonPressed(){
      const arrayData =[]; 
      if(this.state.nombre && this.state.apellido && this.state.rut && this.state.tipodedocumento &&
         this.state.numerodedocumento && this.state.categoria && this.state.formadepago && this.state.totalgasto){
         Alert.alert('Se ha guardado con exito')
         /*const data = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            rut: this.state.rut,
            tipodedocumento:this.state.tipodedocumento,
            numerodedocumento: this.state.numerodedocumento,
            categoria: this.state.categoria,
            formadepago: this.state.formadepago,
            totalgasto:this.state.totalgasto

         }
         arrayData.push(data);
         try{
            AsyncStorage.getItem('database_form').then((value) => {
               if(value != null){

               }else{
                  AsyncStorage.setItem('database', JSON.stringify(arrayData)).then() => {
                     this.props.navigator.push({
                        title: 'Lista de rendiciones',
                        component: List
                     })
                  }
               }
            }
         }*/
    } else {
       Alert.alert('Faltan campos que rellenar')

    }
   }


    render (){
        return(
            <View style={{padding:5}}>
          
          <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Nombre'
             value={this.state.nombre}
             onChangeText={(nombre) => this.changeNombre(nombre)}
          />
                    <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Apellido'
             value={this.state.apellido}
             onChangeText={(apellido) => this.changeApellido(apellido)}
          />
          <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Rut'
             value={this.state.rut}
             onChangeText={(rut) => this.changeRut(rut)}
          />
          <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Tipo de documento'
             value={this.state.tipodedocumento}
             onChangeText={(tipodedocumento) => this.changeTipoDocumento(tipodedocumento)}
          />
          <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Numero de documento'
             value={this.state.numerodedocumento}
             onChangeText={(numerodedocumento) => this.changeNumeroDocumento(numerodedocumento)}
          />
          <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Categoria'
             value={this.state.categoria}
             onChangeText={(categoria) => this.changeCategoria(categoria)}
          />
            <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Forma de pago'
             value={this.state.formadepago}
             onChangeText={(formadepago) => this.changeFormaPago(formadepago)}
          />
                    
            <TextInput 
             style= {{height:50, fontSize:20, borderColor:'black'}}
             placeholder='Total gasto'
             value={this.state.totalgasto}
             onChangeText={(totalgasto) => this.changeTotalGasto(totalgasto)}
          />
      

        <Button
          title="Guardar"
          color="blue"
          //onPress={() => Alert.alert('Se ha guardado con exito!')}
          onPress={() => this.buttonPressed()}
        />
        <Button
          title="Cancelar"
          color="red"
          onPress={() => Alert.alert('Se ha Cancelado con exito!')}
        /> 
        
        <Button
                   title='volver a Home' onPress = {()=>{
                       this.props.navigation.goBack();
                   }}
        />    
        </View>
        );
    }
}