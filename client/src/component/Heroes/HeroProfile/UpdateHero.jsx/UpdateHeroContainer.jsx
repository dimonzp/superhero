import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addNewHero,
  deleteHero,
  loadProfileById,
} from "../../../../store/heroes/actions";
import UpdateHero from "./UpdateHero";

class UpdateHeroContainer extends React.Component {
  render() {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
      _id,
      addNewHero,
      deleteHero,
    } = this.props;
    return (
      <UpdateHero
        {...this.props}
        nickname={nickname}
        real_name={real_name}
        origin_description={origin_description}
        superpowers={superpowers}
        catch_phrase={catch_phrase}
        images={images}
        _id={_id}
        addNewHero={addNewHero}
        deleteHero={deleteHero}
      />
    );
  }
}

let mapStateToProps = (state) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
    _id,
  } = state.heroesPage;
  return {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
    _id,
  };
};

export default compose(
  connect(mapStateToProps, { addNewHero, loadProfileById, deleteHero })
)(UpdateHeroContainer);
