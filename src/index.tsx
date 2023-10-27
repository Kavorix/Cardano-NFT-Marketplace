import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WalletConnectProvider } from './context/WalletConnect';
import { GlobalStyles } from 'styles/GlobalStyles';
import { lightTheme } from 'styles/Theme';
import { GlobalProvider } from 'context/GlobalContext';
import { CartProvider } from 'context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <WalletConnectProvider>
        <GlobalProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </GlobalProvider>
      </WalletConnectProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();