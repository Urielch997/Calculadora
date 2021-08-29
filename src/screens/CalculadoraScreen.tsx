import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    const {numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        armarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular} = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            <View>
                <Text style={styles.resultadoAnterior}>{numeroAnterior !== '0' && numeroAnterior}</Text>
                <Text style={styles.resultadoText}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}>{numero}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent text="C" color="#9B9B9B" action={limpiar} />
                <ButtonComponent text="+/-" color="#9B9B9B" action={positivoNegativo} />
                <ButtonComponent text="del" color="#9B9B9B" action={btnDelete} />
                <ButtonComponent text="/" color="#FF9427" action={btnDividir} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent text="7" action={armarNumero} />
                <ButtonComponent text="8" action={armarNumero} />
                <ButtonComponent text="9" action={armarNumero} />
                <ButtonComponent text="X" color="#FF9427" action={btnMultiplicar} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent text="4" action={armarNumero} />
                <ButtonComponent text="5" action={armarNumero} />
                <ButtonComponent text="6" action={armarNumero} />
                <ButtonComponent text="-" color="#FF9427" action={btnRestar} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent text="1" action={armarNumero} />
                <ButtonComponent text="2" action={armarNumero} />
                <ButtonComponent text="3" action={armarNumero} />
                <ButtonComponent text="+" color="#FF9427" action={btnSumar} />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent text="0" ancho action={armarNumero} />
                <ButtonComponent text="." action={armarNumero} />
                <ButtonComponent text="=" action={calcular} />
            </View>
        </View>

    )
}


export default CalculadoraScreen;


