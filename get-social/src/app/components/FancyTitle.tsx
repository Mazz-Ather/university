"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

interface FancyTitleProps {
  title: string;
  containerClass?: string;
}

const FancyTitle: React.FC<FancyTitleProps> = ({ title, containerClass }) => {
  const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     // Set initial state
//     gsap.set(".animated-word", {
//       opacity: 0,
//       transform: "translate3d(0, 50px, 0) rotateY(10deg) rotateX(10deg)"
//     });

//     const titleAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top bottom-=100",
//         end: "bottom center",
//         toggleActions: "play none none reverse",
//         markers: true,
//       }
//     });

//     titleAnimation.to(".animated-word", {
//       opacity: 1,
//       transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
//       duration: 0.8,
//       ease: "power2.out",
//       stagger: 0.05,
//     });

//     return () => {
//       titleAnimation.kill();
//     }
// }, [])
  return (
    <div ref={containerRef} className={clsx("fancy-title", containerClass)}>
      {title.split("<br />").map((line: string, index: number) => (
        <div key={index} className="line-container">
          {line.split(" ").map((word: string, idx: number) => (
            <span
              key={idx}
              className="word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default FancyTitle
