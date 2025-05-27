'use client';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PAMProject() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Promotional Audit Management (PAM) Review
      </motion.h1>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p>
            I participated in the review of PAM (Promotional Audit Management), a system used to audit promotional campaigns. My role focused on evaluating current procedures, identifying inefficiencies, and preparing documentation for handoff to the production team.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
          <ul className="list-disc list-inside">
            <li>Tableau (data visualization)</li>
            <li>Excel (data analysis and transformation)</li>
            <li>Documentation Tools (Word, Confluence)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Impact</h2>
          <p>
            The project helped streamline the promotional audit process and ensured a clean, well-documented transition to production. It improved compliance tracking and reduced miscommunication across teams.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p>
            I developed MOP (Method of Procedure) documents that detailed every step of the audit process for technical and non-technical stakeholders.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
