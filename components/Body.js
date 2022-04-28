import React, {useState} from 'react';
import { Text, View, TextInput,Button} from 'react-native';
import styled from 'styled-components/native';

export const Body = () => {

    const [bill, setBill] = useState('');
    const [percentage, setPercentage] = useState('');
    const [tip, setTip] = useState(0);

   
    const calc = () => {
        let nBill = parseFloat(bill);
        let nPercentage = parseFloat(percentage);

        if (nBill) {
            setTip((nPercentage/100) * nBill);
        } else {
            alert("Digite o valor da conta");
        }
    }

    return (
        <Page>
            <Input
               placeholder="Quanto deu a conta?"
               placeholderTextColor="#000"
               keyboardType="numeric"
               value={bill}
               onChangeText={n=>setBill(n)}
            />

            <Input
               placeholder="Quantos % é a gorjeta?"
               placeholderTextColor="#000"
               keyboardType="numeric"
               value={percentage} 
               onChangeText={n=>setPercentage(n)}
            />

            <AreaBotao>
                <BotaoGorjeta
                    title="10%"
                    onPress={()=>{
                        setPercentage('10')
                    }}
                />
            </AreaBotao>
            <AreaBotao>
                <BotaoGorjeta
                    title="30%"
                    onPress={()=>{
                        setPercentage('30')
                    }}
                />
            </AreaBotao>

            <AreaBotao>
                <BotaoGorjeta
                    title="50%"
                    onPress={()=>{
                        setPercentage('50')
                    }}
                />
            </AreaBotao>
            
           <CalcButton 
                title="Calcular"
                onPress={calc}
           />
           {tip > 0 &&
                <ResultArea>
                    <ResultItemTile>Valor da Conta</ResultItemTile>
                    <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

                    <ResultItemTile>Valor da Gorjeta</ResultItemTile>
                    <ResultItem>R$ {tip.toFixed(2)}</ResultItem>

                    <ResultItemTile>Valor Total</ResultItemTile>
                    <ResultItem>R$ {(tip + parseFloat(bill)).toFixed(2)}</ResultItem>
                </ResultArea>
            }   
        </Page>
    );
}

const Page = styled.View`
    width: 80%;
`;

const Input = styled.TextInput`
    margin: 20px auto 20px auto;
    height: 40px;
    width: 80%;
    font-size: 18px;
    background-color: #eee;
    border-radius: 10px;
    padding: 10px;
`;

const CalcButton = styled.Button`
    width: 100%;
`;

const ResultArea = styled.View`
    width: 100%;
    margin-top: 30px;
    background-color: #ddd;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const ResultItemTile = styled.Text`
    font-size: 18px;
    font-weight:bold;
`;

const ResultItem = styled.Text`
    font-size: 15px;
`;

const AreaBotao = styled.View`
    width: 100%;
    margin: 5px 0 5px 0
`;

const BotaoGorjeta = styled(Button)`
`;