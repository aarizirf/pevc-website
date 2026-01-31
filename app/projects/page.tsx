import Link from "next/link";

interface Project {
  title: string;
  client: string;
  industry: string;
  status: "completed" | "ongoing";
  description: string;
  objective: string;
  deliverables: string[];
  impact: string;
  duration: string;
  teamSize: number;
}

const projects: Project[] = [
  {
    title: "Strategic Exit Planning for Manufacturing Company",
    client: "Philadelphia-based Manufacturing Firm",
    industry: "Manufacturing & Industrial",
    status: "completed",
    description: "Comprehensive strategic advisory project to help a family-owned manufacturing company prepare for a potential sale within the next 2-3 years.",
    objective: "Identify value creation opportunities and optimize business operations to maximize enterprise value for exit.",
    deliverables: [
      "Business valuation and comparable company analysis",
      "Operational improvement recommendations",
      "Financial modeling and projections",
      "Strategic exit timeline and preparation checklist"
    ],
    impact: "Identified $2.5M in potential value creation opportunities through operational improvements and strategic positioning.",
    duration: "4 months",
    teamSize: 6
  },
  {
    title: "Market Entry Strategy for Tech Startup",
    client: "SaaS Technology Startup",
    industry: "Software & Technology",
    status: "completed",
    description: "Market research and go-to-market strategy development for a B2B SaaS platform targeting mid-market companies.",
    objective: "Develop a comprehensive market entry strategy and competitive positioning framework.",
    deliverables: [
      "Market size analysis and opportunity assessment",
      "Competitive landscape analysis",
      "Customer segmentation and persona development",
      "Go-to-market strategy and pricing recommendations"
    ],
    impact: "Strategy led to successful Series A funding round of $3.2M and 150% growth in customer acquisition.",
    duration: "3 months",
    teamSize: 4
  },
  {
    title: "Financial Restructuring for Healthcare Services",
    client: "Regional Healthcare Provider",
    industry: "Healthcare & Life Sciences",
    status: "ongoing",
    description: "Financial analysis and restructuring recommendations for a healthcare services provider looking to optimize capital structure.",
    objective: "Analyze current financial structure and recommend optimal capital allocation and financing strategies.",
    deliverables: [
      "Financial statement analysis and benchmarking",
      "Debt capacity analysis and financing options",
      "Cash flow optimization recommendations",
      "Capital structure optimization plan"
    ],
    impact: "Project in progress - preliminary analysis shows potential for 20% improvement in debt service coverage.",
    duration: "5 months",
    teamSize: 5
  },
  {
    title: "Acquisition Target Screening",
    client: "Private Equity-backed Portfolio Company",
    industry: "Consumer Services",
    status: "completed",
    description: "Comprehensive market research and target identification for buy-and-build growth strategy in the consumer services sector.",
    objective: "Identify and evaluate potential acquisition targets to support aggressive growth strategy.",
    deliverables: [
      "Target universe mapping and screening criteria",
      "Detailed target company profiles and analysis",
      "Industry dynamics and consolidation opportunities",
      "Transaction structure and valuation framework"
    ],
    impact: "Identified 12 high-priority targets, leading to 3 active negotiations and 1 completed acquisition.",
    duration: "6 months", 
    teamSize: 7
  },
  {
    title: "E-commerce Business Valuation",
    client: "Direct-to-Consumer Brand",
    industry: "E-commerce & Retail",
    status: "completed",
    description: "Independent business valuation for an e-commerce company seeking to understand fair market value for potential investor discussions.",
    objective: "Provide comprehensive business valuation using multiple methodologies to support fundraising efforts.",
    deliverables: [
      "DCF valuation model with scenario analysis",
      "Comparable company and transaction analysis",
      "Asset-based valuation approach",
      "Comprehensive valuation report and executive summary"
    ],
    impact: "Valuation supported successful $1.8M seed funding round at premium valuation to initial estimates.",
    duration: "2 months",
    teamSize: 3
  },
  {
    title: "Digital Transformation Strategy",
    client: "Traditional Retail Chain",
    industry: "Retail & Consumer",
    status: "ongoing",
    description: "Strategic analysis and roadmap development for digital transformation initiative to compete with online retailers.",
    objective: "Develop comprehensive digital transformation strategy to improve competitiveness and customer experience.",
    deliverables: [
      "Digital maturity assessment",
      "Technology implementation roadmap",
      "Investment requirements and ROI analysis",
      "Change management and implementation plan"
    ],
    impact: "Project in progress - initial recommendations being implemented with positive early results.",
    duration: "4 months",
    teamSize: 6
  }
];

const completedProjects = projects.filter(p => p.status === "completed");
const ongoingProjects = projects.filter(p => p.status === "ongoing");

export default function Projects() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-12 py-6 md:px-20 lg:px-32">
          {/* Logo */}
          <Link href="/" className="text-gray-900 font-semibold text-lg tracking-wide">
            Wharton PEVC
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/team" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Our Team
            </Link>
            <Link href="/sponsors" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Sponsors
            </Link>
            <Link href="/events" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Events
            </Link>
            <Link href="/projects" className="text-gray-900 text-sm font-medium">
              Industry Projects
            </Link>
            <Link href="/join" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-px bg-gray-300" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                Industry Projects
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-8">
              Real-world consulting experience with meaningful impact.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Our Industry Projects committee provides pro-bono consulting services to local entrepreneurs and businesses, giving students hands-on experience with valuation, strategic planning, and financial analysis while creating tangible value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Program Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                What We Do
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Strategic Advisory</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide strategic advisory services to help businesses optimize operations, plan for growth, and prepare for potential exits or capital raises.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Financial Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our teams conduct comprehensive financial analysis including business valuations, financial modeling, and investment analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Market Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We perform detailed market research and competitive analysis to inform strategic decision-making and growth opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Our Impact
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-light text-blue-900 mb-2">25+</div>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-blue-900 mb-2">$50M+</div>
                  <p className="text-gray-600 text-sm">Value Created</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-blue-900 mb-2">100+</div>
                  <p className="text-gray-600 text-sm">Students Involved</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-blue-900 mb-2">15+</div>
                  <p className="text-gray-600 text-sm">Industries Served</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Since inception, our Industry Projects committee has delivered significant value to local entrepreneurs while providing students with invaluable real-world experience in financial analysis and strategic consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      {ongoingProjects.length > 0 && (
        <section className="bg-white py-24 md:py-32 lg:py-40">
          <div className="px-12 md:px-20 lg:px-32">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Current Projects
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Our teams are currently working on these exciting projects with local businesses and entrepreneurs.
              </p>
            </div>

            <div className="space-y-8">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">{project.client}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{project.industry}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{project.duration}</span>
                      </div>
                    </div>
                    <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded text-xs font-semibold">
                      ONGOING
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Project Objective</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Expected Impact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Completed Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              A showcase of successful projects that have delivered meaningful impact for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">{project.client}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{project.industry}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-900 px-3 py-1 rounded text-xs font-semibold">
                    COMPLETED
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Project Impact</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.impact}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {project.deliverables.slice(0, 2).map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                    {project.deliverables.length > 2 && (
                      <li className="text-gray-500 text-sm ml-4">
                        +{project.deliverables.length - 2} more deliverables
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>Duration: {project.duration}</span>
                  <span>Team Size: {project.teamSize} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              How to Get Involved
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our Industry Projects committee to gain hands-on consulting experience while making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Apply to PEVC</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Submit your application to join PEVC during our recruitment periods in fall and spring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Choose Committee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Indicate Industry Projects as your preferred committee during the application process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Start Contributing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join project teams and begin making meaningful contributions to real business challenges.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Requirements & Prerequisites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Academic Requirements</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      Sophomore year or above
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      Completed introductory finance courses
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      Strong analytical and communication skills
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Commitment</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      10-15 hours per week during active projects
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      Semester-long project commitment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                      Professional client interaction skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Inquiry */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40">
        <div className="px-12 md:px-20 lg:px-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Need Business Advisory Services?
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              We work with local entrepreneurs and businesses looking for strategic advisory services. Our student teams provide high-quality analysis and recommendations under faculty supervision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center bg-blue-900 text-white px-8 py-4 text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Apply to Join Committee
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-gray-900 border border-gray-300 px-8 py-4 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Request Project Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Logo */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="text-white font-semibold text-xl tracking-wide">
                Wharton PEVC
              </Link>
            </div>

            {/* About */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">About</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Committees */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Committees</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Investment Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Industry Projects
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    PEVC Academy
                  </Link>
                </li>
                <li>
                  <Link href="/committees" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Corporate Outreach
                  </Link>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Events</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Speaker Series
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/sponsors" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Industry Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-gray-400 text-sm mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 <span className="text-gray-400">Wharton PEVC</span> All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}