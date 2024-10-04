import "./about.css";

export const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutSectionIneerFlex">
          <div>
            <h1 className="about_heading">About Us </h1>
            <p className="about_para">
            <span >L</span>udo <span>V</span>erse provides an infinite gaming device in the cloud to its
              users. The specs of this device can expand dynamically based on
              the game the user is playing. The device is ad supported so there
              is no cost of playing the game in the cloud.
            </p>
            <p className="about_para">
            <span >L</span>udo <span>V</span>erse is a member of the Open Gaming Store Alliance (OGSA) and
              the Open Gaming Store is natively integrated into the experience.
              The user in addition is able to upload games they would like to
              play if they are not available via the Open Gaming Store.
            </p>
            <p className="about_para">
              Unlike traditional services, the <span >L</span>udo <span>V</span>erse portal and website is
              completely built by UGC and AI. The game recommendation system,
              like the home page, automatically selects games which users are
              playing on the platform.
            </p>
          </div>
          <video className="video" autoPlay muted loop>
            <source src="../../public/aboutUs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="about_para">
          The system automatically creates community pages for gamers on the
          platform around the game they are playing. The ability to see each
          other's gameplay by default is coming soon to these community pages
        </p>

        <p className="about_para">
        <span >L</span>udo <span>V</span>erse Inc. is headquartered in the Silicon Valley and its 500+
          employees are distributed over 20 countries. It is backed by leading
          venture capital firms in the US, Japan, Korea and India.
        </p>
        <h1 className="about_heading">Contact Us</h1>
        <p className="about_para">
        <span >L</span>udo <span>V</span>erse Inc is headquartered in Kolkata,India with offices in
          London, Delhi, Tokyo, Seoul and Beijing 2105 South Bascom Ave, Suite
          #380, Campbell, CA 95008, USA
        </p>
      </div>
    </>
  );
};
