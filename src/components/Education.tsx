import React from "react";

const Education = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2">Education</h2>
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div>
        <h3 className="font-bold text-lg">University of Michigan</h3>
        <p className="italic">Bachelor of Science in Computer Science</p>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li><span className="font-semibold">Coursework:</span> Data Structures and Algorithms, Discrete Mathematics, Computer Organization</li>
          <li><span className="font-semibold">Organizations:</span> CodePath, Michigan Hackers, VOID Tech</li>
        </ul>
      </div>
      <div className="text-right sm:text-left mt-2 sm:mt-0">
        <div>Ann Arbor, MI</div>
        <div className="italic">December 2027</div>
      </div>
    </div>
  </section>
);

export default Education; 