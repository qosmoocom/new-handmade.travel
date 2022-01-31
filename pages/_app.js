import "../styles/globals.scss";
import '../styles/header.scss'

import store from "../store";
import { Provider } from "react-redux";

// import bootstrap css gird
import "bootstrap/dist/css/bootstrap-grid.min.css";
function MyApp({ Component, pageProps }) {
  const app = (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
  return app;
}

export default MyApp;
