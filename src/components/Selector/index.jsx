import React, { useState } from "react";
import { useDispatch } from "react-redux";
import selectorSlice from "./selectorSlice";
import { useSelector } from "react-redux";
import { chooseEntity } from "../../redux/selector";
function SelectorEntity() {
  const entities = useSelector(chooseEntity);
  const [entity, setEntity] = useState("Plane");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    setEntity(value);
    dispatch(selectorSlice.actions.chooseEntity(value));
  };

  return (
    <>
      <select
        className="select-entity"
        onChange={handleChange}
        defaultValue={entity}
      >
        {entities.map((entity) => (
          <option key={entity.id} value={entity.id}>
            {entity.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectorEntity;
