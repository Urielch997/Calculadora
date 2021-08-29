import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#000',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    resultadoText:{
        color:'#fff',
        textAlign:'right',
        fontSize:60,
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18
    },
    resultadoAnterior:{
        textAlign:'right',
        fontSize:30,
        color:'rgba(255,255,255, 0.5)'
    },
    buttonStyle:{
        backgroundColor:"gray",
        width:80,
        height:80,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:5,
    },
    botonTexto:{
        textAlign:'center',
        color:'#fff',
        fontSize:30,
        fontWeight:'400'
    }
})
