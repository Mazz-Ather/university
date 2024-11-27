import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ApiAxios from "./components/ApiAxios";
export default function Home() {
  return (
  <>
  <Navbar/>
  <ApiAxios/>
  {/* <Footer/> */}
  </>
  )
  ;
}
