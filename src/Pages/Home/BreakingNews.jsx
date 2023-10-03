import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex shadow-md bg-gray-50 text-xl">
            <div className="btn btn-secondary"> latest</div>
            <Marquee pauseOnHover={true} speed={100}>
           <Link className="mr-10" to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           <Link className="mr-10" to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;