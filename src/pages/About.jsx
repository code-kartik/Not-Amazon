import React, { useEffect } from "react";

export const About = () => {
  const changeTitle = () => {
    document.title = "About";
  };

  useEffect(() => {
    changeTitle();
  }, []);
  return <div>About</div>;
};

export default About;
