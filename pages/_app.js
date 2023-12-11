import '../styles/globals.css';
import { appWithTranslation } from "next-i18next";
import AppLayout from "../app/layout/AppLayout";

function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default appWithTranslation(App);
