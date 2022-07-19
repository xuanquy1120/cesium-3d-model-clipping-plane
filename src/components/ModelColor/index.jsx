import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewModelRemainingSelector } from "../../redux/selector";
import entitySlice from "../Entity/entitySlice";

function ModelColor() {
  const dispatch = useDispatch();
  const viewModel = useSelector(viewModelRemainingSelector);
  const [viewModelEntity, setViewModelEntity] = useState(viewModel);
  useEffect(() => {
    setViewModelEntity(viewModel);
  }, [viewModel]);

  const handleAlphaChange = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeAlpha(value));
  };
  const handleChangeColor = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeColor(value));
  };
  const handleChangeColorBlendMode = (e) => {
    const value = e.target.value;
    if (value === "Mix") {
      dispatch(entitySlice.actions.ChangeColorBlendAmountEnabled(false));
    } else {
      dispatch(entitySlice.actions.ChangeColorBlendAmountEnabled(true));
    }
    dispatch(entitySlice.actions.ChangeColorBlendMode(value));
  };
  const handleChangeColorMix = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeChangeColorMix(value));
  };
  const handleChangeSilhouetteColor = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeSilhouetteColor(value));
  };
  const handleChangeSilhouetteAlpha = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeSilhouetteAlpha(value));
  };
  const handleChangeSilhouetteSize = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeSilhouetteSize(value));
  };
  const handleChangeClippingPlanesX = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeClippingPlanesX(value));
  };
  const handleChangeClippingPlanesY = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.ChangeClippingPlanesY(value));
  };
  const handleChangeClippingDistance = (e) => {
    const value = e.target.value;
    dispatch(entitySlice.actions.handleChangeClippingDistance(value));
  };
  const handleChangeEnableEdge = () => {
    if (viewModel.enableEdge) {
      // setEnableEdge(false);
      dispatch(entitySlice.actions.ChangeEnableEdge(false));
    } else {
      // setEnableEdge(true);
      dispatch(entitySlice.actions.ChangeEnableEdge(true));
    }
  };
  return (
    <>
      <div id="toolbar">
        <table>
          <tbody>
            <tr>
              <td className="header">Model Color</td>
            </tr>
            {/* Model */}
            <tr>
              <td>Mode</td>
              <td>
                <select
                  defaultValue={viewModel.colorBlendMode}
                  onChange={handleChangeColorBlendMode}
                >
                  {viewModel.colorBlendModes.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Color */}
            <tr>
              <td>Color</td>
              <td>
                <select
                  defaultValue={viewModel.color}
                  onChange={handleChangeColor}
                >
                  {viewModel.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Alpha */}
            <tr>
              <td>Alpha</td>
              <td>
                <input
                  type="range"
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  value={viewModelEntity.alpha}
                  onChange={handleAlphaChange}
                />
                <input
                  type="number"
                  size="5"
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  value={viewModelEntity.alpha}
                  className="input-number"
                  onChange={handleAlphaChange}
                />
              </td>
            </tr>
            {/* MIX */}
            <tr>
              <td>Mix</td>
              <td>
                <input
                  type="range"
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.colorBlendAmount}
                  disabled={viewModel.colorBlendAmountEnabled}
                  onChange={handleChangeColorMix}
                />
                <input
                  type="number"
                  size="5"
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.colorBlendAmount}
                  className="input-number"
                  disabled={viewModel.colorBlendAmountEnabled}
                  onChange={handleChangeColorMix}
                />
              </td>
            </tr>
            <tr>
              <td className="header">Model Silhouette</td>
            </tr>
            {/* Silhouette Color */}
            <tr>
              <td>Color</td>
              <td>
                <select
                  defaultValue={viewModel.silhouetteColor}
                  onChange={handleChangeSilhouetteColor}
                >
                  {viewModel.silhouetteColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Silhouette Alpha */}
            <tr>
              <td>Alpha</td>
              <td>
                <input
                  type="range"
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.silhouetteAlpha}
                  onChange={handleChangeSilhouetteAlpha}
                />
                <input
                  type="number"
                  size="5"
                  className="input-number"
                  value={viewModel.silhouetteAlpha}
                  onChange={handleChangeSilhouetteAlpha}
                />
              </td>
            </tr>
            {/* Silhouette Size*/}
            <tr>
              <td>Size</td>
              <td>
                <input
                  type="range"
                  min={0.0}
                  max={10.0}
                  step={0.01}
                  value={viewModel.silhouetteSize}
                  onChange={handleChangeSilhouetteSize}
                />
                <input
                  className="input-number"
                  type="number"
                  size="5"
                  min={0.0}
                  max={10.0}
                  step={0.01}
                  value={viewModel.silhouetteSize}
                  onChange={handleChangeSilhouetteSize}
                />
              </td>
            </tr>
            <tr>
              <td className="header">Model SlippingPlanes</td>
              <td>
                {" "}
                <input
                  type="checkBox"
                  checked={viewModel.enableEdge}
                  onChange={handleChangeEnableEdge}
                />
                Enable edge styling
              </td>
            </tr>
            {/* planes x */}
            <tr>
              <td>X</td>
              <td>
                <input
                  type="range"
                  min={-1.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.clippingPlanes.x}
                  onChange={handleChangeClippingPlanesX}
                />
                <input
                  className="input-number"
                  type="number"
                  size="5"
                  min={-1.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.clippingPlanes.x}
                  onChange={handleChangeClippingPlanesX}
                />
              </td>
            </tr>
            {/* planes y */}
            <tr>
              <td>Y</td>
              <td>
                <input
                  type="range"
                  min={-1.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.clippingPlanes.y}
                  onChange={handleChangeClippingPlanesY}
                />
                <input
                  className="input-number"
                  type="number"
                  size="5"
                  min={-1.0}
                  max={1.0}
                  step={0.01}
                  value={viewModel.clippingPlanes.y}
                  onChange={handleChangeClippingPlanesY}
                />
              </td>
            </tr>
            {/* planes distance */}
            <tr>
              <td>Distance</td>
              <td>
                <input
                  type="range"
                  min={-3.0}
                  max={3.0}
                  step={0.01}
                  value={viewModel.distance}
                  onChange={handleChangeClippingDistance}
                />
                <input
                  className="input-number"
                  type="number"
                  size="5"
                  min={-3.0}
                  max={3.0}
                  step={0.01}
                  value={viewModel.distance}
                  onChange={handleChangeClippingDistance}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ModelColor;
