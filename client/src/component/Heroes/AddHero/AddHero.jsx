import React from "react";
import { useState } from "react";
import LoadImage from "./LoadImage";
import AddHeroForm from "./AddHeroForm";
import { Redirect } from "react-router-dom";

const AddHero = (props) => {
  const [images, setImages] = useState([]);
  let [isRedirect, setIsRedirect] = useState(false);

  const submit = (formData) => {
    const allData = { ...formData, images };

    props.addNewHero(allData);
    setTimeout(setIsRedirect, 1000, true);
  };
  const onFileUpload = (event) => {
    event.preventDefault();
    let id = event.target.id;
    let file_reader = new FileReader();
    let file = event.target.files[0];
    file_reader.onload = () => {
      setImages([
        ...images,
        { image_id: id, uploaded_file: file_reader.result },
      ]);
    };
    file_reader.readAsDataURL(file);
  };

  return (
    <div>
      {isRedirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          <LoadImage onFileUpload={onFileUpload} />
          <AddHeroForm onSubmit={submit} />
        </div>
      )}
    </div>
  );
};

export default AddHero;
