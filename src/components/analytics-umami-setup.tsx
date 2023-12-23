"use client";
import { useEffect } from "react";

const AnalyticsUmamiSetup = () => {
  useEffect(() => {
    // Check if the page is running on localhost
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      // Set umami.disabled in localStorage
      localStorage.setItem("umami.disabled", "true");
    } else {
      return;
    }
  }, []);

  return null;
};

export default AnalyticsUmamiSetup;
