import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 mb-8">
            Feel free to reach out for collaboration, projects, or just to say
            hello.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-500 text-xl" />
              <span>khalid@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <span>+880 1XXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <span>Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
