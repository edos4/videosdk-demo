// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import HelloWorld from "./components/HelloWorld";
import VideoSdkMeeting from "./components/VideoSdkMeeting";

document.addEventListener("DOMContentLoaded", () => {
  // Hello World
  const helloWorldDiv = document.getElementById("helloWorld");
  if (helloWorldDiv) {
    createRoot(helloWorldDiv).render(<HelloWorld />);
  }

  // VideoSDK
  const videoSdkMeetingDiv = document.getElementById("videoSdkMeetingDiv");
  if (videoSdkMeetingDiv) {
    createRoot(videoSdkMeetingDiv).render(<VideoSdkMeeting />);
  }
});
