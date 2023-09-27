import LandingPage from '@/pages/home/landingpage'
import LandingPopup from '@/components/landingPopup/landingPopup';


export default function Home() {
  return (
    <>
         <LandingPopup />
      {/* <div className="screenSize"> */}
        <div className="full-flex-centered">
     
          <LandingPage />
{/* <PricingPage/> */}
        {/* <FAQPage/> */}
        {/* </div> */}
      </div>

    </>
  );
}
