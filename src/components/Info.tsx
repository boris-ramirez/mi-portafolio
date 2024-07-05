import React from 'react';

const Info: React.FC = () => {
  return (
    <section className="p-6 self-end text-white overflow-y-auto">
      <h2 className="text-2xl md:text-3xl font-semibold">Info</h2>
      <p className="mt-4 flex-col">
        <strong>Academic Formation:</strong><br />
        <span>BA in Mechatronics Engineering,</span>
        <span> Tecnológico de Monterrey,</span>
         <span> Campus Toluca, 2018 - 2023</span>

      </p>
      <div className="mt-4">
        <strong>Technical Skills:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Languages and Frameworks:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Python (Django)</li>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, GraphQL, React Hooks, Redux</li>
              <li>TypeScript, Node.js (including Express.js)</li>
            </ul>
          </li>
          <li>
            <strong>Tools and Technologies:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>GitHub</li>
              <li>3D model design</li>
              <li>Remix.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
          <li>
            <strong>Databases and Cloud Services:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Microsoft SQL Server, PostgreSQL (including Prisma ORM)</li>
              <li>MySQL</li>
              <li>AWS (S3, EC2, Lambda, EC2 Image Builder, IAM)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
