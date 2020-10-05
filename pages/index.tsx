import { useState, useEffect } from "react";
import { Events } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";
import { Layout } from "../components/layout";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Portfolio } from "../components/sections/portfolio";
import { Contact } from "../components/sections/contact";

const menuItems = {
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  contact: Contact,
};

export default () => {
  const [currentSection, setSection] = useState("home");
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    return function cleanup() {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const onChange = (isVisible: boolean, tab: string) => {
    /* console.log(
      `PREVSECTION: ${currentSection}, NEXTSECTION: ${tab}, NEXT-VISIBLE: ${isVisible}, INDEX: ${index}`
    ); */
    if (isVisible) {
      setSection(tab);
    }
  };

  return (
    <Layout
      onVisChange={onChange}
      menuItems={Object.keys(menuItems)}
      currentSection={currentSection}
    >
      <main className="et-main">
        <div className="body-theme">
          {Object.keys(menuItems).map((item) => {
            const Section = menuItems[item];
            return (
              <VisibilitySensor
                key={item}
                onChange={(isVisible) => onChange(isVisible, item)}
                offset={{ bottom: -115 }}
              >
                <Section />
              </VisibilitySensor>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};
