"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

interface Project {
  id: number;
  name: string;
  description: string;
  stars: number;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const featured = projects.slice(0, 2);
  const others = projects.slice(2, 5);

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Stuff We&apos;re Building
          </h2>
          <p className="text-xl text-gray-300">
            Real projects by real people. Some have bugs, most need contributors. 
            All are open source because gatekeeping is boring.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                  <CodeBracketIcon className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-1.5 text-yellow-500">
                  <StarIconSolid className="h-5 w-5" />
                  <span className="text-lg font-bold text-gray-300">
                    {project.stars}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  View Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-primary-400 hover:bg-primary-900/20 font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    Try it
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="space-y-4">
            {others.map((project, index) => (
              <motion.article
                key={project.id}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-white">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIconSolid className="h-4 w-4" />
                        <span className="text-sm font-semibold text-gray-400">
                          {project.stars}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded bg-gray-700 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:flex-col md:items-end">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-300 hover:text-primary-400 transition-colors whitespace-nowrap"
                    >
                      Code →
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary-400 hover:underline whitespace-nowrap"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

