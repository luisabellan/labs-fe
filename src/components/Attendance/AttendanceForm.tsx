import React, { useState } from "react";
import moment from "moment";
import {
  Button, Select, Space, DatePicker, Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const FormLayoutDemo = (): JSX.Element => {
  const [meetingType, selectMeetingType] = useState("");
  const [date, selectDate] = useState(moment(new Date()));

  const meetingTypeSelect = (val: string) => {
    selectMeetingType(val);
  };

  const handleDateChange = (dateObj: moment.Moment) => {
    selectDate(dateObj);
  };

  const onSubmitAttendance = () => {
    // logging the obj we'll send across the webs for now
    // eslint-disable-next-line no-console
    console.log({ date: date.format(), meetingType });
  };

  return (
    <>
      <Space direction="vertical">
        <div>Meeting Type</div>
        <Select placeholder="Select one" style={{ width: "200px" }} onSelect={meetingTypeSelect}>
          <Option value="stakeholder_meeting">Stakeholder Meeting</Option>
          <Option value="product_review">Product Review</Option>
        </Select>
        <div>Select Date</div>
        <DatePicker defaultValue={date} onChange={() => handleDateChange} />
        <div>Upload Attendance CSV</div>
        {/* this uploader might not be necessary based on app requirements */}
        <Upload
          accept=".txt, .csv"
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Button onClick={onSubmitAttendance} type="primary">Submit</Button>
      </Space>
    </>
  );
};

export default FormLayoutDemo;
