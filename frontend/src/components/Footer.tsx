import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLink from './SocialLink';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-auto py-4 border-t-[1px] border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 text-gray-600 sm:justify-items-center ">
          <div>
            <h3 className="text-base font-semibold mb-2 text-gray-600">
              Contact Us
            </h3>
            <ul>
              <li className="text-sm mb-1">
                <a
                  href="tel:+1234567890"
                  className="block hover:underline space-x-2"
                >
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li className="text-sm mb-1">
                <a
                  href="mailto:info@medsearch.com"
                  className="block hover:underline space-x-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <span>info@medsearch.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Information</h3>
            <ul>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <SocialLink link="https://facebook.com" icon={faFacebook} />
              <SocialLink link="https://twitter.com" icon={faTwitter} />
              <SocialLink link="https://instagram.com" icon={faInstagram} />
            </div>
          </div>
        </div>

        <div className="mt-4  text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MedSearch. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
