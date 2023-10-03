import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center space-y-3 my-5'>
                <img className="mx-auto" src={logo} alt="" />
                <p className='text-lg'>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;