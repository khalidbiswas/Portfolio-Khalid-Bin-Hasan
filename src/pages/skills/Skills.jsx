import React from 'react';
import {  LuFileCode2 } from "react-icons/lu"; // Frontend icon
import { HiOutlineDatabase } from "react-icons/hi"; // Backend icon
import { FaPaintBrush } from "react-icons/fa"; // UI/UX icon

const Skills = () => {
    const skillData = [
        {
            title: "Frontend Development",
            description: "React, HTML5, CSS3,Tailwind, JavaScript",
            icon: <LuFileCode2 className="text-emerald-500 text-4xl" />,
        },
        {
            title: "Backend Development",
            description: "Node.js, Python,",
            icon: <HiOutlineDatabase className="text-emerald-500 text-4xl" />,
        },
        {
            title: "UI/UX Design",
            description: "Figma, User Testing",
            icon: <FaPaintBrush className="text-emerald-500 text-3xl" />,
        }
    ];

    return (
        <section id='skills' className="bg-slate-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-white text-3xl font-bold mb-12 ml-2">
                    Technical Expertise
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 border border-slate-800 p-10 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            <h3 className="text-white text-xl font-bold mb-3">
                                {skill.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;