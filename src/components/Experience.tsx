"use client";
import React from "react";
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";

const Experience = () => (
  <section id="experience" className="max-w-2xl mx-auto py-16 px-4">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
      <WorkExperience />
    </motion.div>
  </section>
);

export default Experience; 