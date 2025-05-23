'use client';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function GiftCardProject() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Gift Card Awarding Automation
      </motion.h1>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p>
            This project automated the awarding of gift cards to Neiman Marcus and Bergdorf Goodman customers. I developed Python scripts to extract and transform data from Snowflake, verified promotion rules, and distributed award lists to stakeholders.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
          <ul className="list-disc list-inside">
            <li>Python (Jupyter Notebooks)</li>
            <li>Snowflake SQL</li>
            <li>Excel for transformation</li>
            <li>Tableau for presentations</li>
            <li>JIRA, Teams for governance</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Impact</h2>
          <p>
            Reduced manual intervention, ensured accurate and timely promotions, and improved transparency for the finance-credit management team.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Presentation</h2>
          <p>
            I presented insights from the project using Tableau dashboards to senior leadership overseeing the Gift Card program.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
