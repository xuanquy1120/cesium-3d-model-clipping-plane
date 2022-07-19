import * as Cesium from "cesium";
export const createEntity = (url, viewer, entity) => {
  viewer.entities.removeAll();

  const position = Cesium.Cartesian3.fromDegrees(
    entity.position.x,
    entity.position.y,
    entity.position.z
  );
  const heading = Cesium.Math.toRadians(entity.orientation.heading);
  const pitch = entity.orientation.pitch;
  const roll = entity.orientation.roll;
  const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    hpr
  );
  
  const entityModel = viewer.entities.add({
    name: entity.name,
    position: position,
    orientation: orientation,
    model: {
      uri: url,
    },  
  });
  
  viewer.trackedEntity = entityModel;
  return entityModel;
};
