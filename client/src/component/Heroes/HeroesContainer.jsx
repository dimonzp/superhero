import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadHeroesByPage, setCurrentPage } from "../../store/heroes/actions";
import Heroes from "./Heroes";

class HeroesContainer extends React.Component {
  componentDidMount() {
    this.props.loadHeroesByPage(this.props.page);
  }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
    this.props.loadHeroesByPage(p);
  };

  render() {
    const { heroes, page, allHeroesCount} = this.props;
    return (
      <Heroes
        {...this.props}
        allHeroesCount={allHeroesCount}
        heroes={heroes}
        page={page}
        onPageChange={this.onPageChange}
      />
    );
  }
}

let mapStateToProps = (state) => {
  const { heroes, page, allHeroesCount } = state.heroesPage;
  return { heroes, page, allHeroesCount };
};

export default compose(
  connect(mapStateToProps, { loadHeroesByPage, setCurrentPage })
)(HeroesContainer);
