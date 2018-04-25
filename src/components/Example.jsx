import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  floatLeft: '56px',
  floatBottom: '32px',
};

const steps = [
  {
    id: '0',
    message: 'Hello World',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    user: true,
  },
];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot
      steps={steps}
      floating={true}
      second={true}
      title={'this.state.secondTitle'}
      days={'this.state.secondDays'}
      time={'this.state.secondTime'}
      contact={'this.state.secondContact'}
      footerStyle={{ marginLeft: '15px', marginRight: '15px', marginBottom: '20px' }}
      inputStyle={{ borderRadius: '100px', marginTop: '20px' }}
      submitButtonStyle={{ marginTop: '19px' }}
    />
  </ThemeProvider>
);

export default ThemedExample;
