'use client';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function MonitoringDashboardProject() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Real-Time Monitoring Dashboard
      </motion.h1>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p>
            Built a real-time server monitoring dashboard using Prometheus, Node Exporter, and Streamlit. The dashboard collected and visualized key system metrics and integrated Agentic AI for anomaly detection.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
          <ul className="list-disc list-inside">
            <li>Prometheus & Node Exporter (metrics collection)</li>
            <li>Python (backend logic, anomaly detection)</li>
            <li>Streamlit (dashboard visualization)</li>
            <li>Agentic AI (anomaly monitoring via PCAP/TCP analysis)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4 mb-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Impact</h2>
          <p>
            Enabled proactive monitoring of system health and performance, reducing troubleshooting time and increasing uptime. Provided contextual visualizations to support rapid anomaly detection and response.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg p-4">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <p>
            Integrated time-series visualizations, live metric updates, and anomaly flags to offer a comprehensive view of system behavior.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
