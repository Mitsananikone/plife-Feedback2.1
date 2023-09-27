/** @format */

// React and hooks imports
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Components imports
import Slick from "@/components/home/slick/slick";
import AnimInfoCard from "@/components/home/animInfoCard/animInfoCard";
import Image from 'next/image';

// Styles import
import styles from "./landingPage.module.css";

const FadeInSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.01,
    });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 200 },
            }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

const Slideshow = () => {
    const images = [
        "/images/home/home1.jpg",
        "/images/home/home2.jpg",
        "/images/home/home3.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

      return (
        <section>
            <div className="backgroundChange">
                {images.map((img, index) => (
                    <div key={img} className={`backgroundChange-image ${index === currentImageIndex ? "visible" : ""}`}>
                        <Image src={img} layout="fill" objectFit="cover" alt={`Slideshow image ${index + 1}`} />
                    </div>
                ))}
                <div className={styles.slickContainerHome}>
                    <Slick />
                </div>
            </div>
        </section>
    );
};

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Slideshow />

      <FadeInSection>
        <section className={styles.section} id={styles.section1}>
        <div className={styles.section_image}>
                    <Image src="/images/home/section1/section1Background.jpg" layout="fill" objectFit="cover" alt="Section 1 Background" />
                    <h2 className={styles.sectionTitle}>
                        Exclusive Plastic Surgery Packages
                    </h2>
                </div>

          <motion.div
            className={styles.section_text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className={styles.packages}>
              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery1.jpg"
                  title="Package 1"
                  body="Experience seamless medical care with our surgery package, complete with travel arrangements and a stay in luxury accommodation, tailored just for you."
                />
              </motion.div>

              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery2.jpg"
                  title="Package 2"
                  body="Unlock unparalleled savings with our dual-surgery package; we handle all your travel needs and ensure your recovery in opulent accommodation."
                />
              </motion.div>

              <motion.div
                className={styles.package}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <AnimInfoCard
                  backgroundImage="/images/home/section1/surgery3.jpg"
                  title="Package 3"
                  body="Embrace the pinnacle of value with our triple-surgery offer: extensive medical procedures combined with premium travel and the finest luxury lodgings, all at an unbeatable rate."
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section2}>
        <div className={styles.section_image}>
                    <Image src="/images/home/section2/section2Background.jpg" layout="fill" objectFit="cover" alt="Section 2 Background" />
                </div>
          <div className={styles.section_text}>
          <h2 className={styles.sectionTitle}>
          Luxurious, Seamless Journeys
            </h2>
            <p>
              Relinquish the stresses of travel. From your baggage check-in to
              the welcoming embrace of your resort, to every scenic drive in
              between, be chauffeured with grace. Revel in the serenity of our
              all-inclusive travel experience.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section3}>
        <div className={styles.section_image}>
                    <Image src="/images/home/section3/section3Background.jpg" layout="fill" objectFit="cover" alt="Section 3 Background" />
                </div>
          <div className={styles.section_text}>
          <h2 className={styles.sectionTitle}>
            Guidance from World-Renowned Thai Surgeons
            </h2>
            <p>
              Embark on your transformational journey with the finest surgical
              maestros of Thailand. Their unmatched expertise ensures
              you&apos;re always in safe hands, guiding you every step of the
              way, molding dreams into reality.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className={styles.section} id={styles.section4}>
        <div className={styles.section_image}>
                    <Image src="/images/home/section4/section4Background.jpg" layout="fill" objectFit="cover" alt="Section 4 Background" />
                </div>
          <div className={styles.section_text}>
          <h2 className={styles.sectionTitle}>
            Unwavering Post-Surgery Aftercare
            </h2>
            <p>
              Post-operative care is a testament to our commitment. We pledge to
              cradle you with attention, ensuring swift recovery, comfort, and
              peace of mind. Because your well-being is at the heart of what we
              do.
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default LandingPage;
