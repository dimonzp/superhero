import { takeEvery, put, call, all } from "redux-saga/effects";
import { heroAPI } from "../api/api";
import {
  ADD_NEW_HERO,
  DELETE_HERO,
  LOAD_HEROES_BY_PAGE,
  LOAD_HERO_PROFILE,
  setHeroes,
  setHeroProfile,
} from "./heroes/actions";

//Loading array of superhero
function* workerLoadHeroes(action) {
  const heroes = yield call(heroAPI.getHeroes, action.page);

  yield put(setHeroes(heroes));
}

export function* watchLoadHeroes() {
  yield takeEvery(LOAD_HEROES_BY_PAGE, workerLoadHeroes);
}
//Loading HeroProfile by id
function* workerLoadHeroProfile(action) {
  const heroProfile = yield call(heroAPI.getHeroById, action.id);

  yield put(setHeroProfile(heroProfile));
}
export function* watchLoadHeroProfile() {
  yield takeEvery(LOAD_HERO_PROFILE, workerLoadHeroProfile);
}

//Add new hero and set new heroes to state
function* workerAddNewHero(action) {
  const allHeroes = yield call(heroAPI.setHero, action.hero);

  yield put(setHeroes(allHeroes));
}

export function* watchAddNewHero() {
  yield takeEvery(ADD_NEW_HERO, workerAddNewHero);
}

//Delete hero and set new heroes to state
function* workerDeleteHero(action) {
  const allHeroes = yield call(heroAPI.deleteHero, action.id);

  yield put(setHeroes(allHeroes));
}

export function* watchDeleteHero() {
  yield takeEvery(DELETE_HERO, workerDeleteHero);
}

export default function* rootSaga() {
  yield all([
    watchLoadHeroProfile(),
    watchLoadHeroes(),
    watchAddNewHero(),
    watchDeleteHero(),
  ]);
}
