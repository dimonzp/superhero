import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addNewHero } from "../../../store/heroes/actions";
import AddHero from "./AddHero";

class AddHeroContainer extends React.Component {
  render() {
    const { profile, addNewHero } = this.props;
    return (
      <AddHero {...this.props} profile={profile} addNewHero={addNewHero} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.heroesPage.profile,
  };
};

export default compose(connect(mapStateToProps, { addNewHero }))(
  AddHeroContainer
);
