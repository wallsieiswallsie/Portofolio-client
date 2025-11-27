export default function Project_1() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 font-sans text-gray-900">
      <h1 className="text-3xl font-bold text-maroon mb-6">
        GEx Internal Operations System
      </h1>

      {/* STAR Method */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          STAR Method
        </h2>

        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-maroon">Situation</strong> <br></br>
            At the Main Warehouse in Tangerang, incoming packages were initially
            recorded using a form powered by Google App Script. However, as the data volume grew, 
            the free-tier App Script became slow and insufficient. The team migrated 
            to Airtable because it offered a more user-friendly GUI for non-IT staff. 
            But Airtable soon introduced new problems—its pricing was too high for a 
            system used mainly as a “database,” and it was not integrated with Looker, 
            the platform used by customers to check their package status. 
            This caused a “non-realtime” issue, as granting Airtable access to everyone 
            was not feasible, and purchasing additional user roles would further increase costs.
          </li>

          <li>
            <strong className="text-maroon">Task</strong> <br></br>  
            The objective was to integrate the entire operational workflow—from 
            package arrival at the Main Warehouse, sorting at destination warehouses, 
            up to delivery confirmation by the customer—into a single, synchronized, fully 
            realtime system. Every step needed to be traceable instantly so both staff and 
            customers could verify status updates without delays.
          </li>

          <li>
            <strong className="text-maroon">Action</strong> <br></br>  
            I implemented PostgreSQL as the primary database and used Google Cloud Storage 
            to handle physical image files. The backend was built with JavaScript (Node.js), 
            fully tailored to fit the business logic of GEx’s operational flow. 
            The frontend was developed using React due to its rich ecosystem and flexibility. 
            Since most employees work using mobile devices, the entire system was designed to be 
            responsive and mobile-friendly to ensure accessibility and efficiency.
          </li>

          <li>
            <strong className="text-maroon">Result</strong> <br></br>  
            The new system successfully integrated all business processes, enabling customers 
            to track their packages in true realtime as soon as any staff or manager performed an action. 
            It eliminated reliance on costly third-party tools like Airtable, replacing them with 
            services like Railway, Google Cloud, and Vercel—resulting in an overall cost 
            reduction of up to 200×. It also removed redundant workloads such as manually 
            duplicating Airtable data into external tracking platforms. The saved time and costs 
            can now be allocated to developing new business strategies and enhancing services
            for both customers and internal GEx teams.
          </li>
        </ul>
      </section>

      {/* Peran */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">My Role</h2>
        <p className="text-gray-700 leading-relaxed">
          As both the client representing GEx’s business operations and the full developer 
          of the application, I had a unique advantage in understanding the problem from both 
          perspectives. I clearly understood the workflow challenges faced by the team, 
          and I translated these needs into a fully functional system by designing the architecture, 
          developing the backend and frontend, and ensuring the solution aligned directly with real 
          operational requirements. This dual role allowed me to bridge business goals with technical 
          execution efficiently and accurately.
        </p>
      </section>

      {/* Dokumen */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          Related Documents
        </h2>

        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li>
            <a
              href="https://drive.google.com/file/d/1pGZaiGezkGi3U_tjvtGZFZYb3fC9bnC3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              Software Requirements Specification (SRS)
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1OEEMT7swkRjAtIwkaHYXZ-GW4CQTPyXY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              Entity Relationship Diagram (ERD)
            </a>
          </li>
        </ul>
      </section>

      {/* Repository */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          GitHub Repository
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <a
              href="https://github.com/wallsieiswallsie/Gex-client.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              GEx-client
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wallsieiswallsie/Gex-server.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              GEx-server
            </a>
          </li>
        </ul>
      </section>

      {/* Deploy */}
      <section>
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          Live Deployment
        </h2>

        <a
          href="https://gexindonesia.com/lacak_paket"
          target="_blank"
          rel="noopener noreferrer"
          className="text-maroon hover:underline"
        >
          gexindonesia.com
        </a>
      </section>
    </div>
  );
}