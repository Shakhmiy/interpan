 import Welcome from "@/components/ui/Welcome";
import Product from "@/components/ui/Product";
import About from "@/components/ui/About";
import Products from "@/components/ui/Products";
import News from "@/components/ui/News";
import Cooperation from "@/components/ui/Cooperation";
import Support from "@/components/ui/Support";
import Footer from "@/components/layout/footer";


export default function Home() {
  return (
    <><main className="flex container mx-auto px-30 flex-col gap-20 w-[1440px]"> 
      <Welcome />
      <Product />
      <About />
      <Products />
      <News />
      <Cooperation />
      <Support />
    </main>
    <Footer /> </>
  );
}
