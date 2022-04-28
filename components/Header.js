import { Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Header = () => {
    return (
        <Page>
            <H1>Calculadora de Gorjeta</H1> 
        </Page>
    );
}

const Page = styled.View`
   width: 100%;
   height: 100px;
   background-color: #000cfe;
`;

const H1 = styled.Text`
    text-align: center;
    font-size: 30px;
    color: #fff;
    padding: 12px 0 12px 0;
    margin-top: 30px;
`;