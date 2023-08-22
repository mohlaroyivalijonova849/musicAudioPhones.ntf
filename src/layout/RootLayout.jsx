import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GlobalArticle from "../components/article/GlobalArticle";

function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <GlobalArticle />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
