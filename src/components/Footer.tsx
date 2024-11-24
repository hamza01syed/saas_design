import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-10 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section: Description and Social Links */}
        <div className="space-y-6">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, hendrerit omittam mel, es vidit animal iracundia. Lus te altera essent incorrup.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-500">
              <TiSocialFacebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <RiTwitterXFill />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaPinterestP />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm font-medium">© CodexThemes</p>
        </div>

        {/* Center Sections: Services, About, Help */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Email marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                IT consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Campaigns
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Our store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Purchase
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Campaigns
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
