import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import {Header} from './components/Header';
import {Body} from './components/Body';

export default function App() {
  return (
     <Page>
       <Header/>
       <Body/>
     </Page>
  );
}

const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

