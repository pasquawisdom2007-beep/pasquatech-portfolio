import { Router, Routes, Route } from "./router/Router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WhatsappBots from "./pages/WhatsappBots";
import TelegramBots from "./pages/TelegramBots";
import Websites from "./pages/Websites";
import Apps from "./pages/Apps";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import StartProject from "./pages/StartProject";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/whatsapp-bots" element={<WhatsappBots />} />
          <Route path="/telegram-bots" element={<TelegramBots />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
