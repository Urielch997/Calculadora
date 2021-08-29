import { useRef, useState } from "react"

enum Operadores {
    sumar,restar,multiplicar,divicion
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')
    const ultimaOperacion = useRef<Operadores>()


    const limpiar = () => {
        setNumero('0')
    }

    const armarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //Evaluar  si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

                //evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }

    }

    const positivoNegativo = () => {
        if (numero.includes("-")) {
            setNumero(numero.replace("-", ""))
        } else {
            setNumero('-' + numero)
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }

        setNumero('0')
    }

    const btnDividir = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.divicion;
    }

    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const calcular = () =>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case Operadores.divicion:
                setNumero(`${num1 / num2}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
        }

        setNumeroAnterior('0')
    }


    return {numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular}

}
