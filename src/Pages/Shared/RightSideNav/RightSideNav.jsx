import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone1 from '../../../assets/qZone1.png';
import Qzone2 from '../../../assets/qZone2.png';
import Qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-3 space-y-3 mb-5">
        <h2 className="font-semibold text-xl"> Login With</h2>

        <button className="btn btn-outline w-full">
          <FaGoogle className="text-2xl "></FaGoogle>
          LOgin with google
        </button>

        <button className="btn btn-outline w-full">
          <FaGithub className="text-2xl "></FaGithub>
          LOgin with github
        </button>
    
      </div>


      <div className="p-3  mb-5">
        <h2 className="font-semibold text-xl"> Follow Us On</h2>

            <a className="flex p-3 items-center gap-2 text-xl border rounded-t-lg " href="">
                <FaFacebook className="text-2xl"></FaFacebook>
                Facebook
            </a>
            <a className="flex p-3 items-center gap-2 text-xl border-x  " href="">
                <FaTwitter className="text-2xl"></FaTwitter>
                Twitter
            </a>
            <a className="flex p-3 items-center gap-2 text-xl border rounded-b-lg" href="">
                <FaInstagram className="text-2xl"></FaInstagram>
                Instagram
            </a>

      </div>

        {/* Q zone */}
        <div className="p-3 space-y-3 mb-5 bg-gray-100">
        <h2 className="font-semibold text-xl"> Q-Zone</h2>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
        
    
      </div>

    </div>
  );
};

export default RightSideNav;
