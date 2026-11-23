
import React, { useState } from 'react';

function SkillsDemo() {

  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "MySQL"
  ]);

  const [newSkill, setNewSkill] = useState("");

  function addSkill() {
    if (newSkill.trim() === "") {
      return;
    }

    setSkills([...skills, newSkill]);
    setNewSkill("");
  }

  return (
    <div>
      <h1>My Technical Skills</h1>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <input
        type="text"
        placeholder="Enter a new skill"
        value={newSkill}
        onChange={(event) => setNewSkill(event.target.value)}
      />

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}

export default SkillsDemo;
