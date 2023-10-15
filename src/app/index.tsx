import React from 'react';
import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/utilities/queryClient';
import { ToastContainer } from 'react-toastify';
import { MainRoute } from '../modules';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ThemedGlobalStyle } from '../reducers/theme';
import {
  AccessTokenProvider,
  LoadingProvider,
  WalletProviders,
} from 'providers';
import Header from 'components/Header/Header';
// import Connect from 'components/Connect/Connect';
// import ConnectForm from 'components/ConnectForm/ConnectForm';
// import Footer from 'components/Footer/Footer';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { SUPPORTED_NETWORKS } from 'configs/Connect/Configs.networks';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://api.studio.thegraph.com/query/49354/zera-amm-testnet/v0.0.2',
  exchanges: [cacheExchange, fetchExchange],
});

let persistor = persistStore(store);

export const App = () => {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <QueryClientProvider client={queryClient}>
            <ThirdwebProvider
              activeChain={
                SUPPORTED_NETWORKS[
                  parseInt(process.env.REACT_APP_BASE_CHAIN_ID || '280')
                ]
              }
              autoConnect={true}
            >
              <Provider value={client}>
                <BrowserRouter>
                  <WalletProviders>
                    <AccessTokenProvider>
                      <Router>
                        <LoadingProvider>
                          {/* <Connect /> */}
                          {/* <ConnectForm /> */}
                          <Header />
                          <MainRoute />
                          <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnFocusLoss
                            pauseOnHover
                          />
                          {/* <Footer /> */}
                        </LoadingProvider>
                      </Router>
                    </AccessTokenProvider>
                  </WalletProviders>
                </BrowserRouter>
              </Provider>
            </ThirdwebProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </ProviderRedux>
  );
};
