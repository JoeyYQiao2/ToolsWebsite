import Navigator from "components/Navigator";
import Footer from "components/Footer";

export default function AppLayout({ children }) {
  return (
    <div className="root">
      <Navigator />
      {children}
      <Footer />
    </div>
  );
}
