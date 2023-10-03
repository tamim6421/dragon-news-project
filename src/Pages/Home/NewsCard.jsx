import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const{title, image_url, details, _id} = news
    // console.log(news)
    return (
        <div>
            <h1 className="text-xl font-semibold">{}</h1>
            <div className="card bg-base-100">
  <div className="card-body">
  <figure><img src={image_url} alt="Shoes" /></figure>
    <h2 className="card-title">{title}</h2>
        {
            details.length > 200 
            ? <p>{details.slice(0, 200)} <Link 
            to = {`/news/${_id}`}
            className="text-blue-500 font-semibold"> Read more .......</Link> </p> :
            <p>{details} </p>
        } 
        
  </div>
</div>
        </div>
    );
};

export default NewsCard;