export const personalInfo = {
  name: "Prisha Bansal",
  title: "Embedded & Drone Security",
  taglines: [
    "Embedded & IoT Security",
    "Drone & UAV Security",
    "Applied AI Security",
  ],
  heroBio:
    "Cybersecurity undergraduate at NFSU, working on telemetry anomaly detection, UAV communication security and threat-surface analysis for connected systems.",
  profileImage: "/assets/profile.jpg",
  resumePath: "/assets/resume.pdf",
  socials: {
    github: "https://github.com/prishab11",
    linkedin: "https://linkedin.com/in/prisha-bansal-b88643318",
    email: "prishabansal11@gmail.com",
  },
  techStrip: ["ROS 2", "PX4", "Gazebo", "MAVSDK", "Python", "C/C++"],
  footer: "Prisha Bansal, 2026",
};

export const aboutData = {
  title: "About Me",
  bio: "Cybersecurity undergraduate interested in IoT, embedded, and autonomous robotic and drone systems security. Has worked on real-time telemetry anomaly detection, UAV communication security (ROS 2/PX4, DDS) and threat-surface analysis, and on high-reliability detection pipelines, alongside research into emerging threat vectors in connected systems and applied AI architectures. Wants to work on counter-UAV and drone security.",
  skillsGroups: [
    {
      category: "IoT & Embedded Security",
      skills: [
        "Telemetry Spoofing & Anomaly Detection",
        "Protocol Analysis (ROS 2, DDS/Micro XRCE-DDS, MAVLink)",
        "Firmware & Attack Emulation Basics",
        "Network Anomaly Detection",
      ],
    },
    {
      category: "Autonomous Systems & Robotics",
      skills: [
        "PX4 Autopilot",
        "Gazebo SITL",
        "MAVSDK",
        "ROS 2",
        "OpenCV",
      ],
    },
    {
      category: "Languages",
      skills: ["Python", "C/C++", "C#", "SQL", "Java", "HTML/CSS"],
    },
    {
      category: "Security & Tools",
      skills: [
        "C2 Architecture",
        "Network Breach Analysis",
        "MITRE CALDERA",
        "RAG Indirect Prompt Injection",
        "Linux (Ubuntu/Kali)",
        "Git",
        "Docker",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Wireshark",
      ],
    },
  ],
};

export const experienceData = {
  title: "Experience",
  items: [
    {
      role: "Research Intern",
      organization: "Helicopter Lab, IIT Kanpur",
      period: "May 2026 to June 2026",
      location: "Kanpur, India",
      mentor: "Prof. Abhishek",
      description:
        "Created a simulation on autonomous UAV systems and telemetry integrity under Prof. Abhishek. Built an autonomous vision-guided tracking system integrating PX4 SITL, ROS 2 and Gazebo, validating camera-bridge telemetry streams and MAVSDK offboard command execution.",
      highlights: [
        "PX4 SITL + ROS 2 + Gazebo autonomous tracking pipeline",
        "Camera-bridge telemetry stream validation",
        "MAVSDK offboard command execution",
      ],
    },
    {
      role: "Security Engineering Intern",
      organization: "Treacle Technologies (IIT Kanpur)",
      period: "February 2026 to May 2026",
      location: "Remote",
      mentor: "Mr. Raj Kumar",
      description:
        "Analyzed embedded network and infrastructure threat surfaces under Mr. Raj Kumar. Assisted in assessing defensive security controls, testing automated monitoring workflows, and performing vulnerability analysis across connected endpoints.",
      highlights: [
        "Embedded network & infrastructure threat-surface analysis",
        "Defensive security controls & automated monitoring workflows",
        "Vulnerability analysis across connected endpoints",
      ],
    },
  ],
};

export const projectsData = {
  title: "Selected Projects",
  items: [
    {
      title: "UAV Telemetry Security Monitor",
      featured: true,
      tags: ["ROS 2", "PX4 SITL", "Gazebo", "Python"],
      description:
        "Real-time ROS 2 telemetry anomaly detection pipeline for connected UAVs in PX4/Gazebo SITL. Baseline flight profiles modeled across 5 multi-phase missions using 99th-percentile velocity (6.59 m/s) and climb-rate thresholds. Detected 100% of telemetry spoofing attacks (5/5 runs) with sub-second latency and 0.25% false positive rate across 18,140+ data points.",
      metrics: [
        { label: "Attack Detection", value: "100% (5/5 runs)" },
        { label: "Latency", value: "< 1.0s sub-second" },
        { label: "False Positive Rate", value: "0.25%" },
        { label: "Dataset Analyzed", value: "18,140+ points" },
      ],
      github: "https://github.com/prishab11",
    },
    {
      title: "Vision-Based Autonomous Drone Tracking System",
      featured: false,
      tags: ["ROS 2", "PX4", "Gazebo", "MAVSDK", "OpenCV"],
      description:
        "Vision-based target tracking pipeline using PX4 SITL, Gazebo, ROS 2 and MAVSDK offboard control. Real-time OpenCV HSV color segmentation and ROS 2 camera-bridge telemetry nodes regulate yaw alignment and closed-loop distance control.",
      metrics: [
        { label: "Control", value: "MAVSDK Offboard" },
        { label: "Computer Vision", value: "HSV Segmentation" },
      ],
      github: "https://github.com/prishab11",
    },
    {
      title: "Network Breach Analyzer",
      featured: false,
      tags: ["Python", "Scikit-learn", "Pandas"],
      description:
        "Anomaly detection tool using statistical and machine learning classifiers to monitor network streams, evaluate packet metrics, and flag suspicious intrusion attempts across connected endpoints.",
      metrics: [
        { label: "Detection Engine", value: "Statistical & ML" },
        { label: "Traffic Scope", value: "Network Streams" },
      ],
      github: "https://github.com/prishab11",
    },
    {
      title: "C2 Server Framework",
      featured: false,
      tags: ["C#", "Python", "API Security"],
      description:
        "Modular Command & Control proof-of-concept featuring authenticated API-key handshakes, encrypted communication, and resilient client-server channel coordination.",
      metrics: [
        { label: "Architecture", value: "Modular C2 PoC" },
        { label: "Authentication", value: "API-key Handshakes" },
      ],
      github: "https://github.com/prishab11",
    },
  ],
};

export const researchData = {
  title: "Research",
  status: "In Progress",
  paperTitle:
    "Security Analysis of Indirect Prompt Injection in RAG Architectures",
  description:
    "Evaluated multi-layer prompt injection defenses under RAG pipelines using the BIPIA benchmark, isolating a 56% detection-rate drop caused by whole-document scoring dilution. Identifying granularity mismatch as a primary failure mode in RAG defense architectures.",
  keyFindings: [
    "Evaluated multi-layer prompt injection defenses under RAG pipelines using the BIPIA benchmark",
    "Isolated a 56% detection-rate drop caused by whole-document scoring dilution",
    "Identified granularity mismatch as a primary architectural failure mode in RAG defense systems",
  ],
};

export const educationData = {
  title: "Education",
  items: [
    {
      institution: "National Forensic Sciences University, Delhi",
      degree:
        "B.Tech in Computer Science & Engineering (Specialization: Cybersecurity)",
      period: "2024 to 2028",
      details:
        "Coursework: Network Security, Digital Forensics, DSA, Cryptography, Operating Systems, IoT.",
      badge: "Undergraduate",
    },
    {
      institution: "Hope Hall Foundation School, New Delhi",
      degree: "CBSE Senior Secondary Education (Class XII)",
      period: "2024",
      details: "CBSE Class XII - 92.8%. Subjects: Physics, Chemistry, Maths and Physical Education (PE).",
      badge: "High Distinction (92.8%)",
    },
    {
      institution: "The Mother's International School, New Delhi",
      degree: "CBSE Secondary Education (Class X)",
      period: "2022",
      details: "CBSE Class X - 94.6%.",
      badge: "High Distinction (94.6%)",
    },
  ],
};

export const achievementsData = {
  title: "Achievements & Certifications",
  subtitle: "Recognitions and specialized engineering credentials",
  items: [
    {
      title: "Top 25 Rank, Hackster CTF",
      organization: "College-level CTF competition",
      type: "Competition",
      year: "2025",
      description:
        "Secured top-25 ranking in high-intensity collegiate capture-the-flag tournament solving binary exploitation, network forensics and reverse engineering challenges.",
    },
    {
      title: "Aeromechanics of Unmanned Aerial Vehicles",
      organization: "SWAYAM NPTEL Certification (IIT Kanpur)",
      instructor: "Prof. Abhishek, IIT Kanpur",
      type: "Certification",
      year: "2025",
      description:
        "Comprehensive certification in aerodynamic principles, multi-rotor flight dynamics, equations of motion, rotor blade element theory and UAV control mechanics.",
    },
    {
      title: "Finalist, Thinker's Quest Ideathon",
      organization: "NSUT Delhi",
      type: "Ideathon",
      year: "2025",
      description:
        "Selected as finalist for proposing secure connected cyber-physical architectures against emerging IoT signal interception and telemetry spoofing attacks.",
    },
  ],
};

export const contactData = {
  heading: "Let's connect",
  subheading:
    "Open to international research internships, UAV security collaborations, and cyber-physical security research.",
  email: "prishabansal11@gmail.com",
  github: "https://github.com/prishab11",
  linkedin: "https://linkedin.com/in/prisha-bansal-b88643318",
};
