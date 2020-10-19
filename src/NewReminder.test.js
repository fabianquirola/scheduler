import React from "react";
import { shallow, configure } from "enzyme";
import ReminderPage from "./components/Reminder/ReminderPage";
import Adapter from "enzyme-adapter-react-16";
import uuid from "uuid";
import moment from "moment";
configure({ adapter: new Adapter() });

describe("Reminders", () => {
  const title = "Test Reminder",
    city = "Guayaquil",
    date = "2020-10-22",
    time = "10:10",
    datetime = moment(date + " " + time),
    color = "blue",
    country = "EC";

  //object literal
  const newReminder = {
    id: uuid(),
    title,
    date,
    time,
    datetime,
    city,
    country,
    color,
  };

  let reminders = [];

  reminders.push(newReminder);

  it("New Reminder", () => {
    const wrapper = shallow(<ReminderPage />);
    const instance = wrapper.instance();
    wrapper.setProps({ setReminder: () => {} });
    expect(wrapper.state("reminders")).toStrictEqual([]);
    instance.createReminder(newReminder);
    expect(wrapper.state("reminders")).toStrictEqual(reminders);
  });
});
