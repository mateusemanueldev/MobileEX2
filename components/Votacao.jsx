import React, { Component } from 'react'
import {StyleSheet,Button, Text, View } from 'react-native'

export default class Votacao extends Component {
    constructor(props){
        super(props)

        this.state = {
            votoA: 0, votoB: 0, votoC: 0, votoD: 0,
            timeA: 'Fortaleza', timeB: 'Quixadá', timeC: 'Limoeiro do Norte', timeD: 'Juazeiro'
        }
        
    }

    render() {
        return (
            <View>
                <Button title="Fortaleza" onPress={()=>{this.setState({votoA: this.state.votoA + 1})}}/>
               
                <Button title="Quixadá" onPress={()=>{this.setState({votoB: this.state.votoB + 1})}}/>
              
                <Button title="Limoeiro do Norte" onPress={()=>{this.setState({votoC: this.state.votoC + 1})}}/>
              
                <Button title="Juazeiro" onPress={()=>{this.setState({votoD: this.state.votoD + 1})}}/>
            
                <Text style={styles.resultados}>Fortaleza {this.state.votoA} Votos</Text>
                <Text style={styles.resultados}>Quixadá {this.state.votoB} Votos</Text>
                <Text style={styles.resultados}>Limoeiro do Norte {this.state.votoC} Votos</Text>
                <Text style={styles.resultados}>Juazeiro {this.state.votoD} Votos</Text>
              
                <Text style={styles.resultados}>Mais votado(s):{()=>{
                    const votoA = this.state.votoA;
                    const votoB = this.state.votoB;
                    const votoC = this.state.votoC;
                    const votoD = this.state.votoD;
                    if(votoA > votoB && votoC && votoD){
                        <Text>{this.state.timeA}</Text>
                    }else if(votoB > votoA && votoC && votoD){
                        <Text>{this.state.timeB}</Text>
                    }else if(votoC > votoA && votoB && votoD){
                        <Text>{this.state.timeC}</Text>
                    }else{
                        <Text>{this.state.timeD}</Text>
                    }
                }}</Text>
                <Text style={styles.resultados}>Menos votado(s):{()=>{
                    const votoA = this.state.votoA;
                    const votoB = this.state.votoB;
                    const votoC = this.state.votoC;
                    const votoD = this.state.votoD;
                    if(votoA < votoB && votoC && votoD){
                        <Text>{this.state.timeA}</Text>
                    }else if(votoB < votoA && votoC && votoD){
                        <Text>{this.state.timeB}</Text>
                    }else if(votoC < votoA && votoB && votoD){
                        <Text>{this.state.timeC}</Text>
                    }else{
                        <Text>{this.state.timeD}</Text>
                    }
                }}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    titulo:{
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center',
      textTransform:'uppercase',
      color:'#fff'
    },
    resultados:{
      fontSize:20,
      color:'#fff'
    }
  });
  