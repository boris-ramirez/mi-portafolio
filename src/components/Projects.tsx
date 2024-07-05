import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="p-6 self-end  text-white">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-4">Here you can find some of the projects I've worked on.</p>
      <ul className="mt-4 space-y-2">
        <li>Project 1: Description of project 1</li>
        <li>Project 2: Description of project 2</li>
        <li>Project 3: Description of project 3</li>
      </ul>
    </section>
  );
};

export default Projects;
