import React, { useState } from "react";
import { Form, FormItem, createFormActions } from "@formily/next"; // 或者 @formily/next
import { Input, Button, Select } from "@alifd/next";
import InputComponent from "./InputComponent";
const App = () => {
  const actions = createFormActions();
  const [state, setState] = useState({ x: 1 });
  const initValue = Object.assign(
    {},
    {
      name: "",
      selected: undefined,
    }
  );

  console.log("xuanran");
  return (
    <div>
      <Form actions={actions} value={initValue}>
        <InputComponent actions={actions} />
        <FormItem
          name="selected"
          label="Name"
          placeholder="Input Name"
          component={Select}
          dataSource={[
            { label: "option1", value: "option1" },
            { label: "option2", value: "option2" },
          ]}
        />
      </Form>
      <Button
        onClick={() => {
          setState({ x: 2 });
        }}
      >
        重新渲染组件
      </Button>
      <span>{state.x}</span>
    </div>
  );
};

export default App;
