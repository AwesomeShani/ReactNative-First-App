import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessages from "./ErrorMessages";

function AppFormPicker({
  items,
  name,
  width,
  ItemPickerComponent,
  numberOfColumns,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        onSelectedItem={values[name]}
        width={width}
        ItemPickerComponent={ItemPickerComponent}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
