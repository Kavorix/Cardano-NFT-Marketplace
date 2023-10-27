import { Suspense, createContext, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

// import ErrorBoundary from './components/ErrorBoundary';
import 'index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'react-bootstrap';
import { lightTheme } from 'styles/Theme';
import AppLoader from 'components/loader/AppLoader';
import MainRouter from 'routes';

interface GlobalContextType {
  flag: boolean
}


export const GlobalProvider = createContext<GlobalContextType>({} as GlobalContextType);
function App() {
  const flag = true;
  const contextValues = {
    flag
  }
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <GlobalProvider.Provider value={contextValues}>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<AppLoader />}>
              <MainRouter />
              <ToastContainer />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalProvider.Provider>

    </>
  );
}

export default App;
