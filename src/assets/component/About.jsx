const About = () => {
  return (
    <section id="about" className="px-6 py-20 mx-auto scroll-mt-24 max-w-7xl">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-bold">About.</h2>
          <div className="w-16 h-1 bg-blue-500 rounded"></div>
        </div>
        <div>
          <p className="mb-8 leading-8 text-gray-300">
            I am an ICT undergraduate with a strong passion for building
            scalable, high-performance web applications. I focus on frontend
            development, backend systems, and modern software architecture.
          </p>

          <div className="grid gap-6 sm:grid-cols-2"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
