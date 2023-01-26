// React Hooks imports
import { useState } from "react";

// Material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// Library imports
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TaskItem = ({ tasks, task, deleteTask, toggleTask, enterEditMode }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {tasks
        ?.sort((a, b) => b.imdb - a.imdb)
        .sort((a, b) => b.name - a.name)
        .map((movie) => (
          <Box
            xs={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            <Card
              key={movie.id}
              sx={{
                maxWidth: 345,
                minWidth: 345,
                m: 4,
                maxHeight: 500,
                minHeight: 450,
                padding: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="194px"
                  image={movie.image}
                  alt="movie"
                  sx={{
                    width: "60%",
                    maxHeight: "50%",
                    margin: "auto",
                    objectFit: "fill",
                  }}
                />
                <CardHeader
                  sx={{ height: 50, fontSize: "14px", marginTop: "10px" }}
                  title={truncateOverview(movie.name, 55)}
                  subheader={movie.actor}
                />
                <CardContent sx={{ paddingBottom: "0px" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "fantasy", fontSize: "12px" }}
                    component="p"
                  >
                    IMDB: {movie.imdb}
                  </Typography>
                  <Typography component="legend">
                    {truncateOverview(movie.description, 60)}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing>
                <IconButton
                  aria-label={`Update ${movie.name} Task`}
                  onClick={() => enterEditMode(movie)}
                >
                  <PencilSquareIcon width={24} height={24} />
                </IconButton>

                <IconButton
                  aria-label={`Delete ${movie.name} Task`}
                  // onClick={() => deleteTask(movie.id)}
                  onClick={handleOpen}
                >
                  <TrashIcon width={24} height={24} />
                </IconButton>
              </CardActions>
            </Card>

            {/* DELETE MODAL */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ opacity: 0.5 }}
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                  Are you sure you want to delete movie?
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{ marginRight: 2 }}
                >
                  Give Up
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    deleteTask(movie.id);
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Modal>
          </Box>
        ))}
    </div>
  );
};
export default TaskItem;
