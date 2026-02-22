export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="block">Hi, I&apos;m Hassan</span>
            <span className="block text-blue-600">Front-End Web Developer</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            I design and build user-focused web products with clean interfaces,
            scalable architecture, and strong attention to detail.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-700 font-medium">
              Public & Private Projects
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-purple-100 text-purple-700 font-medium">
              Responsive UI/UX
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform duration-500"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              Explore Projects
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl transform rotate-3 scale-105 hover:scale-100 transition-transform duration-500">
            <img
              src="https://res.cloudinary.com/deyjkjbl9/image/upload/v1756126758/Person-1_s3ahei.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
