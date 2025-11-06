import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Schedule />
      <News />
      <Footer />
    </div>
  );
}
