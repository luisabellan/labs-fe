import React, { useState } from "react";
import { Button, Select } from "antd";

const { Option } = Select;

const FormLayoutDemo = (): JSX.Element => {
  const [eventType, selectEventType] = useState("");

  const eventTypeSelect = (val: string) => {
    selectEventType(val);
  };

  return (
    <>
      <div>Event Type</div>
      <Select placeholder="Select one" style={{ width: "400px" }} onSelect={eventTypeSelect}>
        <Option value="stakeholder_meeting">Stakeholder Meeting</Option>
        <Option value="product_review">Product Review</Option>
      </Select>
      <Button type="primary">Submit</Button>
    </>
  );
};

export default FormLayoutDemo;
