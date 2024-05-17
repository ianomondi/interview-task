import React from "react";

const Reminders = () => {
  return (
    <div className="reminders-con">
      <div className="d-flex align-items-center justify-content-between">
        <div className="fs-19 fw-bold">Reminders</div>
        <button className="view-btn">View all</button>
      </div>
      <div className="fs-12 reminders-date">Today</div>
      <ReminderComponent reminderData={reminderData} />
    </div>
  );
};

export default Reminders;

const ReminderComponent = ({ reminderData }) => {
  return (
    <div className="reminder-content">
      {reminderData.map((reminder) => (
        <div
          key={reminder.id}
          className={`reminder-item ${reminder.title[1]?.subTitle}`}
        >
          <div>
            <div className="fs-14 fw-semibold">
              {reminder.title[0]?.titleText}{" "}
              <span>{reminder.title[1]?.subTitle}</span>
            </div>
            <div className="fs-10">{reminder.titleDesc}</div>
            <div className="fs-12">
              {typeof reminder.desc === "string"
                ? reminder.desc
                : reminder.desc.map((item) => item.descText).join(" ")}{" "}
              <span>{reminder.desc[1]?.descComp}</span>
            </div>
            <div className="d-flex align-items-center review-btn">
              <button>Review</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const reminderData = [
  {
    id: 1,
    title: [{ titleText: "Broken Pump Valve" }, { subTitle: "New" }],
    titleDesc: "Rubis Langata Road",
    desc: "Pump A valve disintegrated and needs replacement",
  },
  {
    id: 2,
    title: [{ titleText: "Leaking Pipe" }, { subTitle: "Completed" }],
    titleDesc: "Rubis Capital Centre",
    desc: [{ descText: "Job marked as" }, { descComp: "Complete" }],
  },
  {
    id: 3,
    title: [{ titleText: "Tank Maintenance" }, { subTitle: "Ongoing" }],
    titleDesc: "Rubis Karen",
    desc: "Technician requested for Metal Screws Grade 1...",
  },
  {
    id: 1,
    title: [{ titleText: "Broken Pump Valve" }, { subTitle: "New" }],
    titleDesc: "Rubis Langata Road",
    desc: "Pump A valve disintegrated and needs replacement",
  },
  {
    id: 2,
    title: [{ titleText: "Leaking Pipe" }, { subTitle: "Completed" }],
    titleDesc: "Rubis Capital Centre",
    desc: [{ descText: "Job marked as" }, { descComp: "Complete" }],
  },
  {
    id: 3,
    title: [{ titleText: "Tank Maintenance" }, { subTitle: "Ongoing" }],
    titleDesc: "Rubis Karen",
    desc: "Technician requested for Metal Screws Grade 1...",
  },
];
