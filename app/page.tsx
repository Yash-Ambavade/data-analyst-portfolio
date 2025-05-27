import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <Image
          src="/profile.jpg"
          alt="Yash Ambavade"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-md"
        />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-2">Yash Ambavade</h1>
        <p className="text-lg text-gray-600 mb-6">
          Data Analyst | Automation Enthusiast | Real-Time Monitoring & Pipeline Builder
        </p>

        {/* Bio */}
        <p className="text-md text-gray-500 mb-10 max-w-xl mx-auto">
          Experienced in developing and optimizing automated data systems using Python and SQL. Adept in cloud analytics, real-time monitoring, and dashboarding with Snowflake, Prometheus, Tableau, and Streamlit. Passionate about solving business problems through clean, scalable data solutions.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <ProjectCard
            href="/dashboard"
            emoji="📊"
            title="Real-Time Monitoring Dashboard"
            desc="Live Linux server monitoring built using Prometheus, Streamlit, and Node Exporter."
          />
          <ProjectCard
            href="/pam"
            emoji="✅"
            title="PAM Automation System"
            desc="Automated Neiman Marcus's promotional audit process using Python + Excel."
          />
          <ProjectCard
            href="/gift-card"
            emoji="🎁"
            title="Gift Card Awarding Pipeline"
            desc="SQL + Python automation pipeline for Bergdorf Goodman gift card distribution."
          />
        </div>

        {/* Social Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="mailto:yashambavade@outlook.com" className="hover:underline">📧 yashambavade@outlook.com</a>
          <a href="https://linkedin.com/in/yash-ambavade-7a9627139" target="_blank" className="hover:underline">🔗 LinkedIn</a>
          <a href="https://github.com/Yash-Ambavade" target="_blank" className="hover:underline">💻 GitHub</a>
        </div>
      </div>
    </main>
  );
}

// ProjectCard component for cleaner markup
function ProjectCard({ href, emoji, title, desc }: { href: string; emoji: string; title: string; desc: string }) {
  return (
    <Link href={href}>
      <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300">
        <div className="text-3xl mb-2">{emoji}</div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </Link>
  );
}

