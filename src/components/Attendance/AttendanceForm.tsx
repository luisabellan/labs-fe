import React, { useState } from "react";
import {
  Button, Select, Space, DatePicker,
} from "antd";
import moment from "moment";

const { Option } = Select;

const FormLayoutDemo = (): JSX.Element => {
  const [eventType, selectEventType] = useState("");
  const [date, selectDate] = useState(moment(new Date()));

  const eventTypeSelect = (val: string) => {
    selectEventType(val);
  };

  const handleDateChange = (dateObj: moment.Moment) => {
    selectDate(dateObj);
  };

  const onSubmitAttendance = () => {
    // logging the obj we'll send across the webs for now
    console.log({ date: date.format(), eventType });
  };

  return (
    <>
      <Space direction="vertical">
        <div>Event Type</div>
        <Select placeholder="Select one" style={{ width: "400px" }} onSelect={eventTypeSelect}>
          <Option value="stakeholder_meeting">Stakeholder Meeting</Option>
          <Option value="product_review">Product Review</Option>
        </Select>
        {/* this is working but it's not satisfying the compiler
         after a lot of research this morning I've come to the conclusion
         this is simply 💀. We'll have to consider a refactor */}
        <DatePicker defaultValue={date} onChange={handleDateChange} />
        <Button onClick={onSubmitAttendance} type="primary">Submit</Button>
      </Space>
    </>
  );
};

export default FormLayoutDemo;
