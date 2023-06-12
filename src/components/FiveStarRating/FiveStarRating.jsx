import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
    
    const starList = [];

    const fullStars = Math.floor(rating);

    const halfStars = (rating - fullStars) >= 0.5;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
    
    for (let i = 0; i < fullStars; i++) {
        starList.push(<StarFill key={"star-fill" + i} />);
    }

    if (halfStars) {
        starList.push(<StarHalf key={"star-half"} />);
    }

    for (let i = 0; i < emptyStars; i++) {  
        starList.push(<StarEmpty key={"star-empty" + i} />);
    }

    return (
        <div>
            {starList}
        </div>
    );
}