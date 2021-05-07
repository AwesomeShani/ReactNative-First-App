import React from "react";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessages from "./ErrorMessages";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, imageUris, uri);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <React.Fragment>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default FormImagePicker;
