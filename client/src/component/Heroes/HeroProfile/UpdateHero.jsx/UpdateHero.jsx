import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import deleteImage from "../../../../assets/deleteImage.png";
import style from "./UpdateHero.module.sass";
import UpdateHeroForm from "./UpdateHeroForm";

const UpdateHero = (props) => {
  const [images, setImages] = useState([]);
  let [count, setCount] = useState(0);
  let [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setImages(props.images);
      setCount(1);
    }
  });
  const delImg = (id) => {
    const cutImages = images.filter((i) => i._id !== id);

    setImages(cutImages);
  };

  const submit = (formData) => {
    const allData = {
      ...formData,
      images,
    };
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

  const deleteHero = (id) => {
    props.deleteHero(id);
  };
  return (
    <div>
      {isRedirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          <div className={style.oneHero}>
            <div></div>
            {images && images[0] && images[0].filepath ? (
              <div className={style.photo}>
                <img src={images[0].filepath}></img>{" "}
                <img
                  src={deleteImage}
                  onClick={() => delImg(images[0]._id)}
                  className={style.del}
                ></img>
              </div>
            ) : (
              <input
                id={1}
                accept=".jpeg, .jpg"
                type="file"
                onChange={onFileUpload}
              />
            )}
          </div>

          <div className={style.oneHero}>
            <div></div>
            {images && images[1] && images[1].filepath ? (
              <div className={style.photo}>
                <img src={images[1].filepath}></img>{" "}
                <img
                  src={deleteImage}
                  onClick={() => delImg(images[1]._id)}
                  className={style.del}
                ></img>
              </div>
            ) : (
              <input
                id={2}
                accept=".jpeg, .jpg"
                type="file"
                onChange={onFileUpload}
              />
            )}
          </div>

          <div className={style.oneHero}>
            <div></div>
            {images && images[2] && images[2].filepath ? (
              <div className={style.photo}>
                <img src={images[2].filepath}></img>{" "}
                <img
                  src={deleteImage}
                  onClick={() => delImg(images[2]._id)}
                  className={style.del}
                ></img>
              </div>
            ) : (
              <input
                id={3}
                accept=".jpeg, .jpg"
                type="file"
                onChange={onFileUpload}
              />
            )}
          </div>
          <div className={style.oneHero}>
              <div></div>
              <div>Загружать фото 16:9</div>
              <div></div>
          </div>
          <UpdateHeroForm
            nickname={props.nickname}
            real_name={props.real_name}
            origin_description={props.origin_description}
            superpowers={props.superpowers}
            catch_phrase={props.catch_phrase}
            images={props.images}
            onSubmit={submit}
          />
          <div className={style.deleteButton}>
            <button className={style.but} onClick={() => deleteHero(props._id)}>
              Удалить героя
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateHero;
