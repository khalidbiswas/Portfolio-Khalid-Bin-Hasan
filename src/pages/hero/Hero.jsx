import React from 'react';
import profileImg from "../../assets/profile.jpeg";
const Hero = () => {
    const scrollTo = () => {
        const section = document.getElementById('contact');
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id='hero' className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:justify-between gap-10">

                {/* Left Section: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                        Full-Stack <br /> Developer
                    </h1>
                    <p className="text-gray-300 mb-2">
                        Building digital experiences that merge creativity with technology
                    </p>
                    <p className="text-gray-300 mb-6">
                        Specializing in modern web development and cyber systems
                    </p>
                    <button onClick={scrollTo} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">
                        Let's Connect
                    </button>
                </div>

                {/* Right Section: Profile Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-[0_0_50px_#22c55e]">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;