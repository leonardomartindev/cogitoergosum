import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Hero from "./components/home/hero";
import Header from "./components/header/header";
import CaseSection from "./components/caseSection/caseSection";
import PillarsSection from "./components/pillarsSection/PillarsSection";
import QuoteIntro from "./components/quoteSection/QuoteIntro";
import QuoteSection from "./components/quoteSection/QuoteSection";
import RevealSection from "./components/revealSection/RevealSection";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/footer/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function App() {
  const main = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: main.current,
        content: ".smooth-content",
        smooth: 1,
        effects: true,
      });

      let split = SplitText.create(".split", { type: "words, chars" });

      gsap.from(split.words, {
        opacity: 0,
        y: -100,
        ease: "power4.out",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".yellow-container",
          start: "top 15%",
          end: "bottom bottom",
        },
      });

      gsap.from(".case-description", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".case-section",
          start: "top 80%",
        },
      });

      const caseNumbers = gsap.utils.toArray(".case-number", main.current);

      caseNumbers.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target") || "0");
        const counterState = { value: 0 };

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".case-section",
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          })
          .to(counterState, {
            value: target,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
              counter.textContent = Math.round(counterState.value).toString();
            },
          });
      });

      gsap.to(".blue-box", {
        y: "50%",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".blue-container",
          start: "top 70%",
          end: "bottom-=350px 60%",
        },
      });

      gsap.to(".green-box", {
        y: "300px",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".green-container",
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".purple-container",
          start: "top 60%",
        },
      });

      tl.from(".purple-title", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".purple-box",
          {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .to(".purple-box", {
          scale: 0.5,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.2,
          backgroundColor: "#f1f5f9",
        })
        .to(".purple-box", {
          y: "100px",
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.2,
        })
        .to(".purple-box", {
          x: "100px",
          duration: 0.8,
          ease: "power4.out",
          stagger: {
            each: 0.2,
            from: "random",
          },
        });
    },
    { scope: main }
  );

  return (
    <div
      ref={main}
      className="smooth-wrapper flex flex-col items-center justify-start overflow-hidden text-white"
    >
      <Header />
      <div className="smooth-content">
        <Hero />
        <CaseSection />
        <PillarsSection />
        <QuoteIntro />
        <QuoteSection />
        <RevealSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
