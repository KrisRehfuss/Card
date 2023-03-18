import Skills from "./Skills";
import React from 'react'
import TS from "../../public/TS.png";
import Tailwind from "../../public/tail.png";
import Git from "../../public/git.png";
import Reacts from "../../public/react.png";
import OpenAI from "../../public/openai.png";
import Next from "../../public/next-js.svg";
import JS from "../../public/JS.png";
import Express from "../../public/Express.png";
import Node from "../../public/Node.png";
import Angular from "../../public/Angular.png";
import JQuery from "../../public/JQuery.png";
import Github from "../../public/Github.png";
import Coffee from "../../public/Coffee.png";
import Clone from "../../public/Clone.png";


function SkillTree() {
  return (
    <div className="lg:h-fit lg:w-fit h-[240px] flex flex-wrap space-x-2">
      <Skills name="React" logo={Reacts} />
      <Skills name="Tailwind" logo={Tailwind} />
      <Skills name="JavaScript" logo={JS} />
      <Skills name="OpenAI" logo={OpenAI} />
      <Skills name="Git" logo={Git} />
      <Skills name="Express" logo={Express} />
      <Skills name="Angular" logo={Angular} />
      <Skills name="JQuery" logo={JQuery} />

      <Skills name="Node" logo={Node} />
      <Skills name="Github" logo={Github} />
      {/* <Skills name="JQuery" logo={JQuery} /> */}
      <Skills name="Cloning" logo={Clone} />
      <Skills name="Drinking Coffee" logo={Coffee} />
    </div>
  );
}

export default SkillTree