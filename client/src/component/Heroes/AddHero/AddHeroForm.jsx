import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { Input} from "../../common/FormControls/FormControls";
import style from "./AddHero.module.sass";

const maxLength30 = maxLength(30);

let AddHeroForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div className={style.form}>
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h5>Никнейм</h5>
          </div>
          <div className={style.formCenter}>
            <Field
              name={"nickname"}
              component={Input}
              placeholder={"NickName"}
              validate={[maxLength30, required]}
            />
          </div>

          <div>
            <h5>Настоящее имя</h5>
          </div>
          <div className={style.formCenter}>
            <Field
              name={"real_name"}
              component={Input}
              placeholder={"Настоящее имя"}
              validate={[maxLength30, required]}
            />
          </div>

          <div>
            <h5>Крылатая фраза</h5>
          </div>
          <div className={style.formCenter}>
            <Field
              name={"catch_phrase"}
              component={Input}
              placeholder={"Фраза"}
              validate={[maxLength30]}
            />
          </div>

          <div>
            <h5>Описание происхождения</h5>
          </div>
          <div className={style.formCenter}>
            <Field
              name={"origin_description"}
              component={"textarea"}
              type={"text"}
              placeholder={"Происхождение"}
            />
          </div>

          <div>
            <h5>Супер Силы</h5>
          </div>

          <div className={style.formCenter}>
            <Field
              name={"superpowers"}
              component={"textarea"}
              placeholder={"Суперсилы"}
            />
          </div>
          <div>
            <button className={style.but}>Создать героя</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddHeroForm = reduxForm({
  form: "addHero",
})(AddHeroForm);

export default AddHeroForm;
