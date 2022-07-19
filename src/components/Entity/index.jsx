import * as Cesium from "cesium";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  entitiesRemainingSelector,
  viewModelRemainingSelector,
} from "../../redux/selector";
import { createEntity } from "./createEntity";
import { viewModel } from "./viewModel";
function Entity(props) {
  const { viewer } = props;
  const entity = useSelector(entitiesRemainingSelector);
  const model = useSelector(viewModelRemainingSelector);
  const [modelEntity, setModelEntity] = useState(null);
  useEffect(() => {
    if (!modelEntity || !model) return;
    viewModel(model, modelEntity);
  }, [modelEntity, model]);
  useEffect(() => {
    (async () => {
      try {
        const resource = await Cesium.IonResource.fromAssetId(entity.id);
        createEntity(resource, viewer, entity);
        setModelEntity(createEntity(resource, viewer, entity));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [entity, viewer]);
  return <></>;
}
export default Entity;
