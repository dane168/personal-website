import Header from "@/components/Header";
import { promises as fs } from 'fs';
import WorkSection from "@/components/work";
import { EducationData, WorkData } from "../../../data/types";
import Footer from "@/components/Footer";
import EducationSection from "@/components/education";


export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col text-sm md:text-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="grow flex flex-col">
        <div className="md:max-w-[1200px] mx-6 md:mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/30 dark:border-slate-600/30 shadow-2xl md:my-6">
          <Header />
          <div className="px-6 md:px-8 pb-8">
            <div className="py-2 flex flex-col items-center justify-center">
              <h1 className="text-5xl font-semibold">Daniel Evans</h1>
              <p className="text-lg my-2">Data engineer | danieljevans168@gmail.com</p>
              <p className="text-base my-2 text-center mx-10">
                Data engineer with 3+ years’ experience building and maintaining enterprise-scale data pipelines, dashboards, and automation at Bank of America. Skilled in Python, SQL, ETL, Tableau, AWS, and DevOps practices, with experience turning business requirements into practical, scalable data solutions.
              </p>
            </div>
            {/* Skills section */}
            <h2 className="text-3xl font-bold mt-8 mb-4">Key Skills & Technologies</h2>
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border border-none rounded-lg text-left text-base">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Languages</th>
                    <td className="py-2 px-4">Python, SQL, C, JavaScript/TypeScript</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Frameworks & Libraries</th>
                    <td className="py-2 px-4">Django, FastAPI, Pandas, React, Tailwind CSS</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Data Engineering & ETL</th>
                    <td className="py-2 px-4">Kafka, AutoSys, ETL Framework Design</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Databases & Storage</th>
                    <td className="py-2 px-4">MS SQL Server, PostgreSQL, AWS S3</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Cloud & Infrastructure</th>
                    <td className="py-2 px-4">AWS (ECS Fargate/EC2, Terraform, S3), Linux Administration, Apache HTTP Server, Prometheus, Grafana</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="py-2 px-4 font-semibold align-top">Visualisation & Analytics</th>
                    <td className="py-2 px-4">Tableau, Custom Dashboards (React/Next.js)</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 font-semibold align-top">Collaboration & Version Control</th>
                    <td className="py-2 px-4">Git, Bitbucket, Jira</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-3xl font-bold mt-8 mb-4">Professional Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Bank of America – Data Engineer</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-1">Jul 2022 – Present</div>
              <ul className="list-disc list-inside text-left mx-8">
                <li className="my-2">Modernised data pipelines: Migrated numerous SSIS/SQL workflows to Python/Pandas with AutoSys scheduling and Kafka logging, transforming multi-stage legacy processes into modular, maintainable scripts and significantly reducing operational overhead.</li>
                <li className="my-2">Built an internal ETL framework: Designed Python class templates to standardise each stage of the ETL process, enabling new pipelines to be developed rapidly and consistently.</li>
                <li className="my-2">Database stewardship: Administered and optimised 200+ SQL views and stored procedures across MS SQL Server and PostgreSQL; led data migrations between platforms to improve performance and reliability.</li>
                <li className="my-2">Advanced data visualisation: Designed and maintained 20+ Tableau dashboards for enterprise vulnerability tracking; applied UI/UX best practices to improve stakeholder engagement.</li>
                <li className="my-2">Full-stack tool development: Delivered a Django-based internal application with a custom JavaScript/Tailwind front-end, using Kafka as a message queue for emails, downloads and monitoring. Deployed on the bank’s private cloud with Apache HTTP Server, including a server-maintenance scheduling tool and custom pipeline monitoring.</li>
                <li className="my-2">End-to-end delivery: Managed full project lifecycle from planning and development to testing and deployment using Git, Bitbucket and Jira, working directly with stakeholders to capture requirements and present solutions.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tesco - Customer Assistant and Shift Leader</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-1">Apr 2020 – Jun 2022</div>
              <ul className="list-disc list-inside text-left mx-8">
                <li className="my-2">Worked part-time while studying full-time. Trained and promoted to shift leader to cover schedules, demonstrating reliability, adaptability and a proactive approach to learning.</li>
                <li className="my-2">Delivered customer service and store operations during busy periods.</li>
                <li className="my-2">Trained as shift leader and supervised daily tasks, staff rotas and opening/closing procedures when required.</li>
                <li className="my-2">Developed leadership, time-management and communication skills while balancing work with university studies.</li>
              </ul>
            </div>
            {/* Projects section */}
            <h2 className="text-3xl font-bold mt-8 mb-4">Technical Projects</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Option Trade Analysis Tool</h3>
              <ul className="list-disc list-inside text-left mx-8">
                <li className="my-2">Designed and built a high-performance stock market screening platform featuring a full end-to-end data pipeline, analytics dashboard, and cloud-native deployment.</li>
                <li className="my-2">Real-time data ingestion: Architected and implemented a Kafka-based streaming pipeline ingesting the full flow of U.S. stock-option trades in real time, transforming and persisting data into an S3-backed data lake for scalable storage and analytics.</li>
                <li className="my-2">API and frontend delivery: Developed a robust REST API with FastAPI to expose processed data to client applications; built a responsive, real-time dashboard in Next.js/React for visualisation and analytics.</li>
                <li className="my-2">Cloud deployment & observability: Containerised the entire stack and deployed to AWS ECS with Fargate using Terraform for infrastructure-as-code. Implemented comprehensive monitoring and alerting using Prometheus and Grafana.</li>
                <li className="my-2">Technology depth: Demonstrated expertise in real-time data pipelines, Python, JavaScript/TypeScript, React, and cloud infrastructure, with hands-on orchestration and automation across the full stack.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Home “Cloud” Network</h3>
              <ul className="list-disc list-inside text-left mx-8">
                <li className="my-2">Built a personal virtual environment on Proxmox hosting multiple VMs (PostgreSQL database, Plex server, custom DNS), configuring and managing Linux servers and network settings to deepen expertise in virtualisation, system administration and infrastructure setup.</li>
              </ul>
            </div>
            {/* Education section */}
            <h2 className="text-3xl font-bold mt-8 mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">University of Leicester - MPhys Physics with Space Science</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-1">Sep 2018 – Jun 2022 | Grade: First class</div>
              <div className="mb-2">Key modules: Statistical Physics, Statistical Data Inference, Computational Physics, Core Physics, Experimental Physics. Optional courses and end-of-year projects focused heavily on computational physics, including applying machine-learning algorithms to physical data sets.</div>
              <ul className="list-disc list-inside text-left mx-8">
                <li className="my-2">Predicting star classification using Gaussian Processes – Modelled time-series data with Python and R, applying Gaussian processes and Fourier transforms to develop predictive scientific models on the classification of stars.</li>
                <li className="my-2">Dynamics of Circumbinary Planets – Simulated three-body orbital dynamics on a supercomputer using C and batch processing to identify stable orbits.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">King Edward VI Sixth Form College</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-1">Sep 2016 – Aug 2018</div>
              <div>3 A-Levels (A* A A) in Maths, Physics, and Computer Science</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
