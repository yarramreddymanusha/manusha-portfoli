import { useState, type ReactNode } from "react";

const CategoryIcons: Record<string, ReactNode> = {
  "Software & AI Engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" />
    </svg>
  ),
  "Data Analytics & Machine Learning": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="2" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  ),
  "Database Architecture & Security": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
      <rect width="8" height="6" x="8" y="14" rx="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>("Software & AI Engineering");

  const skills: Record<string, string[]> = {
    "Software & AI Engineering": [
      "Object-Oriented Programming (OOP) in Python, Java, and C",
      "Data Structures & Algorithms (DSA) problem solving",
      "AI-driven automated routing & intelligent categorization",
      "RESTful API design and full-stack operational workflows",
    ],
    "Data Analytics & Machine Learning": [
      "End-to-end ETL (Extract, Transform, Load) pipelines",
      "Predictive analytics & multi-variable ML models (telemetry/weather/events)",
      "Financial data analytics with 50-30-20 budget optimization",
      "Data processing & visualization using Pandas and Matplotlib",
    ],
    "Database Architecture & Security": [
      "Relational database design and queries with MySQL",
      "Role-Based Access Control (RBAC) multi-tiered permissions",
      "Two-Factor Authentication (2FA) and AES data encryption",
      "Administrative analytics dashboards for trend & grievance tracking",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-6 w-full lg:max-w-md">
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--sec)]">Core Competencies</span>
        <h3 className="text-[var(--text-primary)] text-3xl md:text-4xl font-semibold mt-1">
          What I Do
        </h3>
      </div>
      <ul className="space-y-3.5 mt-4 text-base">
        {Object.entries(skills).map(([category, items], catIndex) => {
          const isOpen = openItem === category;
          const panelId = `skill-panel-${catIndex}`;
          const headerId = `skill-header-${catIndex}`;
          return (
            <li key={category} className="w-full">
              <div
                className={`w-full bg-[var(--surface)] rounded-2xl text-left transition-all duration-300 border overflow-hidden shadow-sm ${
                  isOpen ? "border-[var(--sec)] bg-[var(--surface-muted)] shadow-lg shadow-[var(--sec)]/5" : "border-[var(--border-subtle)] hover:border-[var(--border-hover)]"
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(category)}
                  className="w-full flex items-center gap-3 p-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sec)] focus-visible:ring-inset rounded-2xl transition-colors"
                >
                  {CategoryIcons[category]}
                  <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                    <span className="truncate text-[var(--text-primary)] font-medium text-base md:text-lg">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className={`w-5 h-5 text-[var(--text-primary)] transform transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[var(--sec)]" : "text-[var(--white-icon)]"
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`transition-all duration-300 px-4 ${
                    isOpen ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--text-secondary)] text-sm pt-1 border-t border-[var(--border-subtle)]">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-[var(--sec)] leading-5 text-sm">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
