import * as Cesium from "cesium";
import React, { useEffect, useState } from "react";
import Entity from "../Entity";
import ModelColor from "../ModelColor";
import SelectorEntity from "../Selector";

function Viewer() {
  const [viewer, setViewer] = useState(null);
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      infoBox: false,
      selectionIndicator: false,
      shadows: true,
      shouldAnimate: true,
    });
    setViewer(viewer);
  }, []);
  
  return (
    <div id="cesiumContainer">
      {viewer ? <Entity viewer={viewer} ></Entity> : true}
      <SelectorEntity></SelectorEntity>
      <ModelColor ></ModelColor>
    </div>
  );
}

export default Viewer;
