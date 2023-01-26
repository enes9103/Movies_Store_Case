// Material-UI card imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// No image import
import noImage from "../assets/no-image-available.png";

// Font Awesome heart icon imports
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CardComponent = ({
  image,
  title,
  year,
  addFavorite,
  isFavorite,
  type,
}) => {
  return (
    <Card className="flex flex-col relative m-3 rounded-lg max-w-40 shadow-lg p-2">
      <CardActionArea>
        <div className="absolute top-0 right-0 p-1" onClick={addFavorite}>
          {isFavorite ? (
            <FaHeart size={26} className="bg-gray-100 rounded-full p-1 text-blue-600" />
          ) : (
            <FaRegHeart size={26} className="bg-gray-100 rounded-full p-1 text-blue-700"/>
          )}
        </div>

        {image === "N/A" ? (
          <img
            src={noImage}
            alt={title}
            className="max-h-80 w-full rounded-md"
          />
        ) : (
          <img src={image} alt={title} className="max-h-80 w-full rounded-md" />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type ? type : 'Movie'} / {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
