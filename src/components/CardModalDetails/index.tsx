import { Box, Button, IconButton, Typography } from "@mui/material";

interface CarModalDetailsProps {
  imageSrc: string;
  title: string;
  description: string;
  onClose: () => void;
}

export const CardModalDetails: React.FC<CarModalDetailsProps> = ({
  imageSrc,
  title,
  description,
  onClose,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 300,
        height: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: 2,
        display: "grid",
        gridTemplateColumns: "1fr",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 8 }}
      >
        x
      </IconButton>
      <div>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "60%",
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      </div>
      <div
        style={{
          margin: 10,
          gap: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography id="card-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="card-description" sx={{ mt: 1, fontSize: 12 }}>
          {description}
        </Typography>
        <Button sx={{ mt: 2 }}>Ver mais</Button>
      </div>
    </Box>
  );
};
