import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import HeroProfile from "./HeroProfile";
import { loadProfileById } from "../../../store/heroes/actions";

class HeroProfileContainer extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      loadProfileById,
    } = this.props;
    loadProfileById(id);
  }

  render() {
    return <HeroProfile {...this.props}  />;
  }
}

const mapStateToProps = (state) => {
 
  const {nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images, _id } = state.heroesPage
    
  return{nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,_id }
};

export default compose(
  connect(mapStateToProps, { loadProfileById }),
  withRouter
)(HeroProfileContainer);
