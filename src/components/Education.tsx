export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Education Background</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-blue-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</span>
            <h3 className="text-xl font-semibold">Bachelor of Science in Physics</h3>
            <p className="text-gray-600 mt-1">Air Force Institute of Technology</p>
            <p className="text-gray-500 mt-2">2024 - Current</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>GPA: 3.8/4.0</li>
              <li>Relevant Coursework: Data Structures, Algorithms, Operating Systems, Machine Learning</li>
              <li>Graduated with Honors</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-purple-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2</span>
            <h3 className="text-xl font-semibold">Full Stack Web Development Bootcamp</h3>
            <p className="text-gray-600 mt-1">General Assembly</p>
            <p className="text-gray-500 mt-2">2019</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Capstone Project: Real-time Collaborative Code Editor</li>
              <li>Technologies: React, Node.js, Socket.io, MongoDB</li>
              <li>Awarded Best Final Project</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-green-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">3</span>
            <h3 className="text-xl font-semibold">Online Courses & Certifications</h3>
            <p className="text-gray-600 mt-1">Coursera, Udemy, Pluralsight</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Cloud Native Application Architecture</li>
              <li>Advanced React Patterns</li>
              <li>DevOps Engineering Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}