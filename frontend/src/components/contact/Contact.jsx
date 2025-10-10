import { useContext } from "react";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { MyContext } from "../../Context/Context";
import { addressData } from "../../utils/constants";

const Contact = () => {
  const { theme } = useContext(MyContext);

  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className={`content p-4 md:p-10 lg:p-22 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)] ${
          theme === 'light' ? 'bg-white' : 'bg-gray-700'
        }`}
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className={`text-[35px] max-lg:hidden font-semibold text-nowrap ${
                theme === 'light' ? 'text-[#132238]' : 'text-white'
              }`}>
                Contact Me
              </p>
              <p className={`text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal ${
                theme === 'light' ? 'text-soft-dark' : 'text-gray-300'
              }`}>
                I'd love to hear from you. Whether it's about my work, potential collaborations, or simply connecting, don't hesitate to get in touch.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia position="left" />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className={`text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold lg:hidden text-center ${
              theme === 'light' ? 'text-[#132238]' : 'text-white'
            }`}>
              Contact Me
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;