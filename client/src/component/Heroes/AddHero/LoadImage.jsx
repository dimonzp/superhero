import React from "react";
import style from "./AddHero.module.sass";

const LoadImage = (props) => {
  return (
    <div className={style.form}>
      <div></div>
      <form>
        <h5>Загрузить фото:</h5>
        <div>
          <input
            id={1}
            accept=".jpeg, .jpg"
            type="file"
            onChange={props.onFileUpload}
          />
        </div>
        <div>
          <input
            id={2}
            accept=".jpeg, .jpg"
            type="file"
            onChange={props.onFileUpload}
          />
        </div>
        <div>
          <input
            id={3}
            accept=".jpeg, .jpg"
            type="file"
            onChange={props.onFileUpload}
          />
        </div>
      </form>
      <div></div>
      <div></div>
      <div>Загружать фото 16:9</div>
    </div>
  );
};

export default LoadImage;
