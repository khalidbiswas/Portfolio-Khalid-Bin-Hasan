import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1574df32-8965-45c5-8bfc-36acd6083ddf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold text-green-500 mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-8">
            Feel free to reach out for collaboration or projects.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-500 text-xl" />
              <span>khalidbinhasan.kbh@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <span>+880 1793881803</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={onSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-gray-900 text-gray-200 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold"
            >
              Send Message
            </button>

            {result && <p className="text-center text-green-400">{result}</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
