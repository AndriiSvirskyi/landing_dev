import styles from "./styles.module.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Services />
      <Industries />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
