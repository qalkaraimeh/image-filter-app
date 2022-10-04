import { useRef, useState, useContext } from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography, Button } from "@mui/material";
import { FilterContext } from "../context/FilterContext";
import "../styles/instagram.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
const ImageField = () => {
  const [imageFile, setImageFile] = useState(null);
  const { filter, customFilter } = useContext(FilterContext);

  const uploadImageRef = useRef(null);
  const imageResultRef = useRef(null);
  //handle Image input
  const handleImageInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  //handle Download Image
  const handleDownloadImage = () => {
    domtoimage
      .toBlob(imageResultRef.current)
      .then(function (blob) {
        saveAs(blob, "filteredImage.png");
      })
      .catch(function (error) {
        alert("ooops, something went wrong!", error.message);
      });
  };

  const renderImage = () => (
    <figure style={{ width: "100%", height: "100%" }}>
      <StyledImg
        customFilter={!filter && customFilter}
        className={filter}
        src={imageFile}
        ref={imageResultRef}
      ></StyledImg>
    </figure>
  );
  return (
    <Grid item xs={12} md={7}>
      <ImageBoxStyled
        onClick={() => {
          uploadImageRef.current && uploadImageRef.current.click();
        }}
      >
        {imageFile ? (
          renderImage()
        ) : (
          <Typography variant="p" component="p">
            Upload Image
          </Typography>
        )}
      </ImageBoxStyled>
      <input
        onChange={handleImageInput}
        ref={uploadImageRef}
        type="file"
        accept="image/*"
        hidden
      />
      <Button
        onClick={handleDownloadImage}
        variant="contained"
        disabled={!imageFile}
        fullWidth
      >
        Download Image
      </Button>
    </Grid>
  );
};

export default ImageField;

const ImageBoxStyled = styled(Box)({
  background: "#ddd",
  minHeight: "20em",
  maxHeight: "100vh",
  marginBottom: "1em",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const StyledImg = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
}));
