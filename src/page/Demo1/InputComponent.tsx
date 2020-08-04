import React from "react";
import { FormItem, IFormActions } from "@formily/next";
import { Input } from "@alifd/next";
const App = (props: { actions: IFormActions }) => {
  const { actions } = props;
  //   actions.setFieldValue("name", "x");
  return (
    <FormItem
      name="name"
      label="Name"
      placeholder="Input Name"
      component={Input}
    />
  );
};

export default App;
