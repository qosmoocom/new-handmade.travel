import "../public/fonts/Akrobat/fonts.css";
import "../public/fonts/Mulish/fonts.css";
import "../public/fonts/Roboto/fonts.css";
import "../public/fonts/Oswald/fonts.css";
import "../public/fonts/Caveat/fonts.css";

import "../styles/custom-quill.scss";
import "../styles/globals.scss";



import store from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

// import bootstrap css gird
import "bootstrap/dist/css/bootstrap-grid.min.css";
function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  const app = (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
  return app;
}

export default MyApp;
