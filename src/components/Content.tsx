import React from 'react';

const Content: React.FC = () => {
  return (
    <div className="p-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Academic Formation</h2>
        <p className="text-lg text-gray-300">BA in Mechatronics Engineering<br />Tecnológico de Monterrey, Campus Toluca<br />2018 - 2023</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Aptitudes</h2>
        <p className="text-lg text-gray-300">
          Leadership, Problem-solving, Creativity, Teamwork<br />
          PLC (KOP, S7 - SCL), Festo Software<br />
          C and assembly programming, Analog and digital electronics...
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
        <p className="text-lg text-gray-300">
          NX, SolidWorks, AutoCAD, ADAMS<br />
          Microsoft SQL Server, PostgreSQL (including Prisma ORM)<br />
          Python (Django), HTML, CSS, JavaScript (React.js, GraphQL, React Hooks, Redux)...
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Professional Experience</h2>
        <p className="text-lg text-gray-300">
          At Adora Foundation, I managed AWS infrastructure using S3, EC2, Lambda...
        </p>
      </section>
    </div>
  );
};

export default Content;
