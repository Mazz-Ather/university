"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import FancyTitle from "./FancyTitle";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const videoRef = useRef<HTMLVideoElement>(null);


  useGSAP(() => {
    // Wait for the video to be loaded
    const video = videoRef.current;
    if (!video) return;

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        onEnter: () => video.play(),
      },
    });

    // Initial state
    gsap.set(".mask-clip-path", {
      width: "300px",  // Initial small size
      height: "300px",
      borderRadius: "20px",
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <div id="about" className="w-screen  mt-[360px] md:mt-[200px] bg-black text-white">
      <div className="relative mb-8  flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[17px] mt-11">
          Welcome to Get social digital marketing agency
        </p>

        <FancyTitle
  title="<b>explore-about-our-agency</b>"
  containerClass="mt-5 text-center capitalize"
/>

        <div className="about-subtext">
          <p>Transform Your Brand with Expert Digital Marketing</p>
          <p className="text-gray-500">
            Our agency specializes in creating customized digital marketing strategies that enhance your online visibility and drive real results.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            ref={videoRef}
            src="/thomas.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
