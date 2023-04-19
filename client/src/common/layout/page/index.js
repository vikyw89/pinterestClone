import { Footer } from "../footer";
import { Header } from "../header";

export const Page = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
