import React from 'react';
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const projectData = [
        {
            title: "The Dragon News",
            description: "A frontend Project ",
            tech: ["React", "fireBase", "Tailwind"],
            image: "https://i.postimg.cc/6pFGfh75/tdn.png",
            github: "https://github.com/khalidbiswas/The-Dragon-News",
            live: "https://the-dragon-news0.netlify.app/category/0"
        },
        {
            title: "English Janala",
            description: "An Education Website",
            tech: ["React", "fireBase", "Tailwind"],
            image: "https://i.postimg.cc/xT4k9P3m/english-is-easy.png",
            github: "#",
            live: "https://phass-6-milestone-6.netlify.app/"
        },
       
    ];

    return (
        <section className="bg-slate-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-white text-3xl font-bold">Featured Projects</h2>
                    <div className="h-px bg-slate-800 grow max-w-md hidden sm:block"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono py-1 px-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 text-slate-300">
                                    <a href={project.github} className="hover:text-emerald-400 transition-colors text-xl">
                                        <FiGithub />
                                    </a>
                                    <a href={project.live} className="hover:text-emerald-400 transition-colors text-xl">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;