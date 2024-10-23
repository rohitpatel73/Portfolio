import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CardActions,
  Link,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LanguageIcon from "@mui/icons-material/Language";
import useIntersectionObserver from "../hooks/intersectionObserver";

export default function ProjectCard({ project, delay = 0 }) {
  const { title, description, image, github, video, youtube, website } =
    project;
  const [isOpen, setIsOpen] = useState(false);
  const ytLink = `https://www.youtube.com/embed/${youtube}`;
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);

  const handleImageClick = () => setIsOpen(true);
  const handleLightboxClose = () => setIsOpen(false);
  const handleLightboxOpen = () => setIsOpen(true);

  return (
    <div
      ref={ref}
      className={
        isVisible ? "show" : `hide move-${delay % 2 ? "left" : "right"}`
      }
      style={{ "--animation-delay": `${1500 + delay * 120}ms` }}
    >
      <Card sx={{ maxWidth: 350, minWidth: 350 }}>
        <CardMedia
          component="img"
          image={image.src}
          alt={image.alt}
          onClick={handleImageClick}
          sx={{ cursor: "pointer", height: 200, objectFit: "cover" }}
          loading="lazy"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "text.light" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {github && (
            <Link
              variant="button"
              href={github}
              target="_blank"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GitHubIcon
                fontSize="large"
                sx={{ color: "white", "&:hover": { color: "text.light" } }}
              />
            </Link>
          )}
          {youtube && (
            <Button
              onClick={handleLightboxOpen}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OndemandVideoIcon
                fontSize="large"
                sx={{
                  color: "white",
                  "&:hover": { color: "text.light" },
                }}
              />
            </Button>
          )}
          {website && (
            <Link
              variant="button"
              href={website}
              target="_blank"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LanguageIcon
                fontSize="large"
                sx={{ color: "white", "&:hover": { color: "text.light" } }}
              />
            </Link>
          )}
        </CardActions>
      </Card>

      <Dialog
        open={isOpen}
        onClose={handleLightboxClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{"Demonstartion Video"}</DialogTitle>
        <DialogContent
          style={{
            width: "100%",
            height: "35rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            width="100%"
            height="100%" /* Base height for tablet/laptop */
            src={ytLink}
            frameborder="0"
            allowFullScreen
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLightboxClose} sx={{ color: "text.light" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




// import React, { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { SiLinkerd } from "react-icons/si";


// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import useIntersectionObserver from "../hooks/intersectionObserver";

// export default function ProjectCard({ project, delay = 0 }) {
//   const { title, description, image } = project;
//   const ref = useRef(null);
//   const { isVisible } = useIntersectionObserver(ref);

//   return (
//     <div
//       ref={ref}
//       className={isVisible ? "show" : `hide move-${delay % 2 ? "left" : "right"}`}
//       style={{ "--animation-delay": `${1500 + delay * 120}ms` }}
//     >
//       <Card sx={{ maxWidth: 350, minWidth: 350 }}>
//         {/* Image Section */}
//         <CardMedia
//           component="img"
//           image={image.src}
//           alt={image.alt}
//           sx={{ cursor: "pointer", height: 200, objectFit: "cover" }}
//           loading="lazy"
//         />
//         {/* Description Section */}
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h5"
//             component="div"
//             sx={{ color: "text.light" }}
//           >
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {description.slice(0, 170) + "..." }
//           </Typography>
//           <div className="flex gap-2 ">
//             <button className="text-4xl py-1 px-2 bg-none text-zinc-950"><FaGithub /></button>
//             <button className="text-4xl py-1 px-2 bg-none text-zinc-950"><SiLinkerd /></button>
//           </div>
//         </CardContent>
        
//       </Card>
//     </div>
//   );
// }
