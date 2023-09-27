/** @format */

import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./about.module.css";
import withTransition from '@/components/hoc/withTransition';
import Head from 'next/head';

function AboutPage() {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  const fitText = () => {
    const container = containerRef.current;
    if (!container) return;

    const fitTitle = (titleRef, text) => {
      const svgNS = "http://www.w3.org/2000/svg";
      const textElement = titleRef.current;

      // Set the SVG text content
      textElement.textContent = text;

      // Create a temporary path to measure the length
      const path = document.createElementNS(svgNS, "path");
      path.setAttributeNS(null, "d", `M0,0h${container.offsetWidth}`);
      container.appendChild(path);

      // Adjust the text path to fit the container width
      textElement.setAttributeNS(null, "lengthAdjust", "spacingAndGlyphs");
      textElement.setAttributeNS(null, "textLength", container.offsetWidth);

      // Remove the temporary path
      container.removeChild(path);
    };

    fitTitle(title1Ref, "UNIQUE BEAUTY SURGERY");
    fitTitle(title2Ref, "EXPERIENCE IN THAILAND");
  };

  useEffect(() => {
    fitText();
    window.addEventListener("resize", fitText);

    return () => window.removeEventListener("resize", fitText);
  }, []);

  return (
    <div className="background">
       <Head>
    <Link
    rel="preload" 
    as="image" 
      href="/images/about/aboutBackground.webp"
      imagesrcset = "/images/about/aboutBackground.webp"
      imageSizes="100vw"
    />
    </Head>

    <Image
        src="/images/about/aboutBackground.webp"
        alt="About Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        loading="lazy"
      />

{/* <div className={styles.blurredBackground}></div> */}
      <div className={styles.textContainerOuter}>
      <div className={styles.textContainer}>
        <div className={styles.textContainerBlock} ref={containerRef}>
          <svg width="100%" height="4em">
            <text
            
              ref={title1Ref}
              className={styles.textStretch}
              y="1em"
            
            ></text>
          </svg>
          <svg width="100%" height="4em">
            <text
              ref={title2Ref}
              className={styles.textStretch}
              y="1em"
      
            ></text>
          </svg>

          {/* <h2 className="bounds">UNIQUE BEAUTY SURGERY</h2>
          <h2 className="bounds">EXPERIENCE IN THAILAND</h2> */}
          <p>
            Welcome to PHEONIQUE.LIFE, where we specialize in providing the
            ultimate cosmetic surgery holiday experience. Our experienced team
            combined with top surgeons and specialists will ensure that you
            receive the highest level of care and achieve your desired results.
            From breast augmentation to facelifts, we offer a wide range of
            procedures at an affordable cost. With the added bonus of a holiday
            destination, you can relax and rejuvenate both inside and out. Let
            us help you enhance your natural beauty and boost your confidence.
            Contact us today to start planning your cosmetic surgery holiday!
          </p>
          
          <Link href="/contacts/contactsPage">
        <button className={styles.submitButton}>REQUEST QUOTE</button>
    </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default withTransition(AboutPage);