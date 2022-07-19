import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "entity",
  initialState: {
    entity: [
      {
        id: "1186785",
        name: "Plane",
        position: { x: -123.0744619, y: 44.0503706, z: 5000 },
        orientation: { heading: 135, pitch: 0, roll: 0 },
      },
      {
        id: "1186629",
        name: "Duck",
        position: { x: -123.0744619, y: 44.0503706, z: 5000 },
        orientation: { heading: 135, pitch: 0, roll: 0 },
      },
      {
        id: "1205885",
        name: "Dragon",
        position: { x: -123.0744619, y: 44.0503706, z: 5000 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205887",
        name: "DamagedHelmet",
        position: { x: -123.0744619, y: 44.0503706, z: 5000 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205891",
        name: "Fox",
        position: { x: -123.0744619, y: 44.0503706, z: 0 },
        orientation: { heading: 135, pitch: 0, roll: 0 },
      },
      {
        id: "1205896",
        name: "LightsPunctualLamp",
        position: { x: -123.0744619, y: 44.0503706, z: 10 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205901",
        name: "VertexColorTest",
        position: { x: -123.0744619, y: 44.0503706, z: 10 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205902",
        name: "AnimatedMorphSphere",
        position: { x: -123.0744619, y: 44.0503706, z: 10 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205913",
        name: "AnimatedTriangle",
        position: { x: -123.0744619, y: 44.0503706, z: 1000 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
      {
        id: "1205914",
        name: "Buggy",
        position: { x: 100, y: 44.0503706, z: 50000 },
        orientation: { heading: 90, pitch: 0, roll: 0 },
      },
    ],
    model: {
      color: "Red",
      colors: ["White", "Red", "Green", "Blue", "Yellow", "Gray"],
      alpha: 1.0,
      colorBlendMode: "Mix",
      colorBlendModes: ["Highlight", "Replace", "Mix"],
      colorBlendAmount: 0,
      colorBlendAmountEnabled: false,
      silhouetteColor: "Red",
      silhouetteColors: ["Red", "Green", "Blue", "Yellow", "Gray"],
      silhouetteAlpha: 0,
      silhouetteSize: 2.0,
      minimumPixelSize: 128,
      maximumScale: 20000,
      clippingPlanes:{x:0.0,y:0.0},
      enableEdge:true,
      distance:3
    },
  },
  reducers: {
    ChangeAlpha: (state, action) => {
      state.model.alpha = action.payload;
    },
    ChangeColor: (state, action) => {
      state.model.color = action.payload;
    },
    ChangeColorBlendMode: (state, action) => {
      state.model.colorBlendMode = action.payload;
    },
    ChangeColorBlendAmountEnabled: (state, action) => {
      state.model.colorBlendAmountEnabled = action.payload;
    },
    ChangeChangeColorMix: (state, action) => {
      state.model.colorBlendAmount = action.payload;
    },
    ChangeSilhouetteColor: (state, action) => {
      state.model.silhouetteColor = action.payload;
    },
    ChangeSilhouetteAlpha: (state, action) => {
      state.model.silhouetteAlpha = action.payload;
    },
    ChangeSilhouetteSize: (state, action) => {
      state.model.silhouetteSize = action.payload;
    },
    ChangeClippingPlanesX: (state, action) => {
      state.model.clippingPlanes.x = action.payload;
    },
    ChangeClippingPlanesY: (state, action) => {
      state.model.clippingPlanes.y = action.payload;
    },
    handleChangeClippingDistance: (state, action) => {
      state.model.distance = parseFloat(action.payload);
    },
    ChangeEnableEdge: (state, action) => {
      state.model.enableEdge = action.payload;
    },
  },
});
