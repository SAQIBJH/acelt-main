import HomeBanner from "./component/HomeBanner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Content from "./component/Content";
import ClientsSection from "./component/Client";
import AddOnServices from "./component/AddOnServices";
import BrochureRequest from "./component/BrochureRequest";
import CompanyClients from "./component/ClientSlider";
import AccordionSlider from "./component/HomePage";
import InfiniteSlider from "./component/HorizontalSlider";
import HomeAbout from "./component/HomeAbout";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Steel Products",
      description: "Products include steel pipes, fittings, flanges, sheets & valves.",
      image: "/background1.png",
      link: "#",
    },
    {
      id: 2,
      title: "Copper Products",
      description: "Products include copper pipes, fittings, valves & accessories.",
      image: "/background2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "PVC Products",
      description: "Products include Drainage Pipes, Pressure Pipes & Fittings, PE-X & PPR Pipes and Accessories.",
      image: "/background3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Tools & Safety Products",
      description:
        "Products include Power Tools, Hand Tools, Holesaws, Abrasives & Blades, Safety Products & Accessories.",
      image: "/background1.png",
      link: "#",
    },
    {
      id: 5,
      title: "Applications",
      description: "Products cater to the requirements of HVAC, Fire Fighting & Plumbing industries.",
      image: "https://apex.ae/wp-content/uploads/2015/10/applications-1500x630.jpg",
      link: "#",
    },
  ]
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* <HomeBanner /> */}
      <AccordionSlider slides={slides} />
      </main>
      <Content/>
      <InfiniteSlider/>
      <HomeAbout/>
      <ClientsSection/>
      <AddOnServices/>
      <CompanyClients/>
      <BrochureRequest/>
      <Footer />
    </div>
  );
}


