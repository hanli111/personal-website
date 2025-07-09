"use client";
import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";

const ProjectsSection = () => (
  <section id="projects" className="max-w-2xl mx-auto py-16 px-4">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <Projects />
    </motion.div>
  </section>
);

export default ProjectsSection; 