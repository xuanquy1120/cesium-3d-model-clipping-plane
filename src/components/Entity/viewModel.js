import * as Cesium from "cesium";
function getColor(colorName, alpha) {
  const color = Cesium.Color[colorName.toUpperCase()];
  return Cesium.Color.fromAlpha(color, parseFloat(alpha));
}
function getColorBlendMode(colorBlendMode) {
  return Cesium.ColorBlendMode[colorBlendMode.toUpperCase()];
}
function clippingPlanes(model) {
  let clippingPlanes;
  const plane = model.clippingPlanes;
  // console.log(model.distance);
  clippingPlanes = new Cesium.ClippingPlaneCollection({
    planes: [
      new Cesium.ClippingPlane(
        new Cesium.Cartesian3(plane.x, plane.y, 1.0),
        model.distance
      ),
    ],
    edgeWidth: model.enableEdge ? 1.0 : 0.0,
  });
  return clippingPlanes;
}
function plane(model) {
  const normals = model.clippingPlanes
  const normal = new Cesium.Cartesian3(normals.x, normals.y, 1.0);
  const plane = {
    dimensions: new Cesium.Cartesian2(25, 25),
    material: Cesium.Color.WHITE.withAlpha(0.1),
    plane: new Cesium.ClippingPlane(normal, model.distance),
    outline: true,
    outlineColor: Cesium.Color.WHITE,
  };
  return plane;
}
export const viewModel = (model, modelEntity) => {
  modelEntity.model.color = getColor(model.color, model.alpha);
  modelEntity.model.colorBlendMode = getColorBlendMode(model.colorBlendMode);
  modelEntity.model.colorBlendAmount = parseFloat(model.colorBlendAmount);
  modelEntity.model.silhouetteColor = getColor(
    model.silhouetteColor,
    model.silhouetteAlpha
  );
  modelEntity.model.silhouetteSize = parseFloat(model.silhouetteSize);
  modelEntity.model.clippingPlanes = clippingPlanes(model);
  modelEntity.plane = plane(model);
};
