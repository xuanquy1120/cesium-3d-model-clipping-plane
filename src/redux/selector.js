import { createSelector } from "@reduxjs/toolkit";

export const entitySelector = (state) => state.entities.entity;
export const filterSelector = (state) => state.idEntity.id;
export const viewModelEntity = (state) => state.entities.model;

export const entitiesRemainingSelector = createSelector(
  entitySelector,
  filterSelector,
  (entity, id) => {
    return entity.filter((entity) => {
      return entity.id === id;
    })[0];
  }
);
export const chooseEntity = createSelector(entitySelector, (entity) => {
  return entity;
});
export const viewModelRemainingSelector= createSelector(
  viewModelEntity,
  (model) => {
    return model;
  }
);
