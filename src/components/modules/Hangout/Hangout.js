import React from "react";
import PageBody from "../../../components/common/PageBody";

import style from "./Hangout.module.css";

import Building from "./Building";

export default function Hangout() {
  return (
    <PageBody>
      <br />
      <h1>
        Hangout With Us Virtually!
        <span style={{ fontSize: "1rem" }}> (build apps and games)</span>
      </h1>
      <div style={{ marginBottom: "2%" }}>
        We hold virtual sessions <b>every Saturday from 12-5pm CDT</b> for
        students age 13-18. Wanna join?? Sign up{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeHOcc3_-CKxkGIlCRZ7myiAe3lBbQnAim5Zv5gZqvsuH-90w/viewform"
          target="_blank"
          style={{ color: "blue", fontWeight: "bold" }}
        >
          HERE!
        </a>{" "}
        It's <b>free!</b>
      </div>
      <div>
        Click one of the rooms below to open up a <u>Google Hangouts</u> video
        chat or <u>Mozilla Hubs</u> virtual room! Our sessions begin in the{" "}
        <b>Common Area</b>, and then team and individual help happens in the
        side rooms
      </div>
      <Building />
      <div className="infoArea">
        <h3>Session Checklist</h3>
        For students participating in virtual sessions, you'll need to have a
        few different tabs open:
        <ul>
          <li>
            <b>This Page</b>
          </li>
          <li>
            One of the corresponding{" "}
            <a
              href="https://hangouts.google.com/u/4/call/TfM6_-fimy6ymBD11ENLAEEE?no_rd"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Google Hangout</b>
            </a>{" "}
            conference rooms
          </li>
          <li>
            <a
              href="https://devlaunchers-students.slack.com"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Slack</b>
            </a>
          </li>
        </ul>
        And you'll probably end up with a few extra tabs open, like:
        <ul>
          <li>
            The Dev Launchers{" "}
            <a
              href="https://devlaunchers.com/#/create"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Create</b>
            </a>{" "}
            or{"  "}
            <a
              href="https://devlaunchers.com/#/learn"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Learn</b>
            </a>{" "}
            pages
          </li>
          <li>
            <a
              href="https://codesandbox.io"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>CodeSandbox</b>
            </a>{" "}
            or{" "}
            <a
              href="https://www.pixilart.com/"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>PixilArt</b>
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>GitHub</b>
            </a>
          </li>
        </ul>
      </div>
    </PageBody>
  );
}

function Room({ className, roomData, roomKey, setRoomActive }) {
  const openHangout = url => {
    // Do open
    setRoomActive(roomKey, true);
    window.open(url, "_blank");
  };

  return (
    <div
      className={[className, roomData.isActive ? style.activeRoom : ""].join(
        " "
      )}
      onClick={() => openHangout(roomData.url)}
    >
      {roomData.name}
      <div
        className={style.colorMarker}
        style={{ backgroundColor: roomData.color }}
      />
    </div>
  );
}
