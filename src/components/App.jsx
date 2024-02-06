import React, { useEffect, useState } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import Options from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";
const key = "12345";

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = ((feedback.good + feedback.neutral) / total) * 100;
  const addGood = () => setFeedback({ ...feedback, good: feedback.good + 1 });
  const addNeutral = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const addBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 });
  const resetAll = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.setItem(key, JSON.stringify({ good: 0, neutral: 0, bad: 0 }));
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key)) || {
      good: 0,
      bad: 0,
      neutral: 0,
    };
    setFeedback({ ...data });
  }, []);
  useEffect(() => {
    if (total > 0) localStorage.setItem(key, JSON.stringify(feedback));
  }, [feedback]);
  return (
    <div>
      <Description />
      <Options
        addGood={addGood}
        addNeutral={addNeutral}
        addBad={addBad}
        resetAll={resetAll}
        total={total}
      />
      {total !== 0 ? (
        <Feedback feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
