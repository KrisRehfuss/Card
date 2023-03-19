import Skill from "./Skill";
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
    <div className="md:h-fit md:w-fit  flex flex-wrap space-x-2">
      <Skill name="React" logo={Reacts} />
      <Skill name="Tailwind" logo={Tailwind} />
      <Skill name="JavaScript" logo={JS} />
      <Skill name="OpenAI" logo={OpenAI} />
      <Skill name="Git" logo={Git} />
      <Skill name="Express" logo={Express} />
      <Skill name="Angular" logo={Angular} />
      <Skill name="JQuery" logo={JQuery} />

      <Skill name="Node" logo={Node} />
      <Skill name="Github" logo={Github} />
      {/* <Skill name="JQuery" logo={JQuery} /> */}
      <Skill name="Cloning" logo={Clone} />
      <Skill name="Drinking Coffee" logo={Coffee} />
    </div>
  );
}

export default SkillTree