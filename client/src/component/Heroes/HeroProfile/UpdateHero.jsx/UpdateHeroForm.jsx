import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators";
import { Input } from "../../../common/FormControls/FormControls";
import style from "./UpdateHero.module.sass";

const maxLength50 = maxLength(50);

class UpdateHeroForm extends React.Component {
  componentDidMount() {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = this.props;
    const { initialize } = this.props;

    initialize({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });
  }

  render() {
    const { handleSubmit } = this.props;

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
                props={{ disabled: true }}
                placeholder={"NickName"}
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
                validate={[maxLength50, required]}
              />
            </div>

            <div>
              <h5>Крылатая фраза</h5>
            </div>
            <div className={style.formCenter}>
              <Field
                name={"catch_phrase"}
                component={Input}
                type={"text"}
                placeholder={"Фраза"}
                validate={[maxLength50]}
              />
            </div>

            <div>
              <h5>Описание происхождения</h5>
            </div>
            <div className={style.formCenter}>
              <Field
                name={"origin_description"}
                component={"textarea"}
                placeholder={"Происхождение"}
              />
            </div>

            <div>
              <h5>Супер Силы</h5>
            </div>

            <div className={style.formCenter}>
              <Field name={"superpowers"} component={"textarea"} />
            </div>
            <div>
              <button className={style.but}>Обновить данные героя</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

UpdateHeroForm = reduxForm({
  form: "updateForm",
})(UpdateHeroForm);

export default UpdateHeroForm;
