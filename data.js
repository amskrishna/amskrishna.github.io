// ============================================================
//  SITE CONTENT — edit here, or use admin.html for a visual editor
// ============================================================
window.SITE = {

  theme: "indigo",   // indigo | forest | plum | slate | ember | teal

  profile: {
    name: "Dr. Ambairam Muthu Sivakrishna",
    title: "Assistant Professor",
    dept: "School of Advanced Computing",
    org: "Alliance University, Bengaluru",
    photo: "",   // paste an image URL, or upload via admin.html
    headline: "Detecting the threats that already have credentials.",
    bio: "I work on insider threat detection — identifying malicious behaviour from users who are already trusted, already authenticated, and already inside. My doctoral work at NIT Tiruchirappalli approached this through multi-granular behavioural analysis with neural networks. My current research extends it toward causal reasoning, quantum-inspired models, and verifiable guarantees.",
    email: "amskrishna240@gmail.com",
    phone: "+91 97915 41949",
    orcid: "0000-0002-0984-9890",
    cv: "Dr_Ambairam_CV.pdf",
    scholar: "",
    linkedin: "",
    github: ""
  },

  stats: [
    { n: "10", label: "Publications" },
    { n: "13", label: "Reviewer roles" },
    { n: "9", label: "Courses taught" },
    { n: "3", label: "Gold medals" }
  ],

  interests: [
    "Confidential Computing",
    "Trustworthy AI",
    "Theoretical Analysis of Neural Networks",
    "Robust & Causality-Driven AI",
    "Formal Specification & Verification of AI",
    "Neuro-Symbolic & Quantum-Inspired Learning"
  ],

  // ---- ANNOUNCEMENTS: calls for proposals, internships, openings ----
  announcements: [
    {
      kind: "Internship",          // Internship | Call for proposals | Opening | Notice
      title: "Summer research internship — Insider Threat Analytics",
      date: "2026-09-01",
      deadline: "2026-10-15",
      open: true,
      body: "Two positions for final-year B.Tech or M.Tech students to work on behavioural anomaly detection over the CERT insider threat dataset. Expect hands-on PyTorch work, a literature review component, and a target of one conference submission. Prior exposure to sequence models is helpful but not required.",
      link: ""                     // application form URL — see README
    },
    {
      kind: "Call for proposals",
      title: "Student project proposals — Quantum-inspired security models",
      date: "2026-08-20",
      deadline: "2026-09-30",
      open: true,
      body: "Inviting one-page proposals from students interested in quantum embeddings for security analytics, building on the QUANT-IT line of work. Send a short problem statement, your intended approach, and a rough timeline.",
      link: ""
    }
  ],

  // ---- BLOG POSTS ----
  posts: [
    {
      title: "Why insider threat detection resists the usual anomaly playbook",
      date: "2026-08-12",
      tags: ["Security", "Research notes"],
      summary: "Standard anomaly detection assumes outliers are rare and structurally different. Insider behaviour is neither — it looks exactly like normal work until it doesn't.",
      body: "Most anomaly detection literature assumes a clean separation: normal data occupies a dense region, anomalies sit outside it. Insider threats break this assumption in a specific way.\n\nAn insider's malicious session is assembled almost entirely from legitimate actions. Logging in, opening a file share, copying documents, connecting a USB device — every one of these appears thousands of times in benign logs. What distinguishes the malicious session is the composition and timing, not the constituent events.\n\nThis is why per-event scoring performs poorly and why the granularity of your representation matters more than the sophistication of your classifier. In our work we found that aggregating behaviour into day-level and user-level views, then comparing each against that specific user's own history, recovers far more signal than treating the population as a single distribution.\n\nThe practical consequence: before reaching for a larger model, spend the effort on how you window and normalise the behaviour."
    },
    {
      title: "Reading a paper properly: a method for research students",
      date: "2026-07-28",
      tags: ["Teaching", "Advice"],
      summary: "A three-pass approach I give every new student, and the questions to hold in mind during each pass.",
      body: "New research students usually read papers linearly, front to back, and come away exhausted with little retained. A structured approach works better.\n\nFirst pass, five minutes. Title, abstract, section headings, figures, conclusion. The only question is whether this paper is worth your time. Most are not.\n\nSecond pass, one hour. Read for the claim and the evidence. What exactly do the authors assert? What experiment supports it? Note every place you don't follow the reasoning, but do not stop to resolve them.\n\nThird pass, several hours, and only for papers you intend to build on. Reconstruct the work. Assume you are the author and ask how you would have designed the same experiment. Where your design differs, you have found either a gap in your understanding or a limitation in theirs. Both are useful.\n\nKeep a one-paragraph summary of every paper you finish. In two years you will not remember which paper had which result, but you will remember your own words."
    }
  ],

  // ---- COURSE MATERIALS ----
  courses: [
    {
      code: "CS-CNS",
      name: "Cryptography and Network Security",
      term: "Alliance University · 2026",
      note: "Classical and modern ciphers, public key infrastructure, protocol analysis.",
      materials: [
        { label: "Course outline", url: "" },
        { label: "Unit 1 — Classical cryptography", url: "" },
        { label: "Unit 2 — Symmetric key ciphers", url: "" }
      ]
    },
    {
      code: "CS-DM",
      name: "Discrete Mathematics",
      term: "Alliance University · 2026",
      note: "Logic, proof techniques, combinatorics, graph theory.",
      materials: [
        { label: "Course outline", url: "" },
        { label: "Problem set 1", url: "" }
      ]
    },
    {
      code: "CS-GAI",
      name: "Generative AI",
      term: "Alliance University · 2026",
      note: "Generative modelling foundations through to current architectures.",
      materials: [
        { label: "Course outline", url: "" }
      ]
    }
  ],

  journals: [
    { id: "J1", title: "An Adaptive Insider Threat Detection Framework Using Causal Analysis and Liquid Neural Networks", venue: "Security and Privacy, 9(1), 2026", meta: "ESCI · IF 2.9", doi: "10.1002/spy2.70157" },
    { id: "J2", title: "An Efficient Insider Threat Detection Framework Using Bayesian-Optimized XGBoost", venue: "Security and Privacy, 8(6), 2025", meta: "ESCI · IF 2.9", doi: "10.1002/spy2.70122" },
    { id: "J3", title: "Cyber Insights: Exploring Image-Based and Vector-Based Feature Representations in Insider Threat Detection", venue: "International Journal of Data Science and Analytics, Vol. 21, Article 13, 2025", meta: "ESCI & Scopus · IF 2.9 · Q1", doi: "10.1007/s41060-025-00960-3" },
    { id: "J4", title: "An Efficient Pattern-Based Approach for Insider Threat Classification Using Image-Based Feature Representation", venue: "Journal of Information Security and Applications, 73, 103434, 2023", meta: "SCIE · IF 4.4 · Q1", doi: "10.1016/j.jisa.2023.103434" }
  ],
  journalsNote: "Six further manuscripts under review at Q1/Q2 SCIE and ESCI indexed journals.",

  conferences: [
    { id: "C1", title: "TRUST-IT: Trustworthy User-Level Security Learning for Insider Threat Detection", venue: "QASC 2026 — Chicago State University & Grambling State University, USA · Springer", meta: "Accepted", doi: "" },
    { id: "C2", title: "Insider Threat Detection: A Comprehensive Review of Evolving Detection Techniques, Datasets, and Challenges", venue: "AITA 2026 — IBS Bangalore", meta: "Accepted & presented", doi: "" },
    { id: "C3", title: "QUANT-IT: Quantum Embeddings with NGBoost for Insider Threat Detection", venue: "IEEE CICT 2025 — IIITDM Kancheepuram", meta: "Published", doi: "" },
    { id: "C4", title: "Temporal Quantum Neural Networks for Insider Threat Detection", venue: "RAIT 2025 — IIT Dhanbad", meta: "Published", doi: "" },
    { id: "C5", title: "Insider Threat Detection on CERT Data Using Pre-trained ResNet", venue: "GCITC 2024 — REVA University", meta: "Published", doi: "" },
    { id: "C6", title: "AUBIT: An Adaptive User Behaviour Based Insider Threat Detection Technique Using LSTM-Autoencoder", venue: "ICRTITA 2022 — Vel Tech University", meta: "Published · Best Paper Award", doi: "" }
  ],
  conferencesNote: "Five further manuscripts under review at Scopus indexed international conferences.",

  teaching: [
    { role: "Assistant Professor", org: "School of Advanced Computing, Alliance University, Bengaluru", when: "June 2026 —", detail: "Cryptography and Network Security · Discrete Mathematics · Generative AI" },
    { role: "HTRA-MHRD", org: "Computer Science & Engineering, NIT Tiruchirappalli", when: "2022–2025", detail: "Artificial Intelligence · Software Engineering · Software Project Management" },
    { role: "Temporary Faculty", org: "Computer Science & Engineering, IIIT Tiruchirappalli", when: "2017–2019", detail: "Programming with C · Software Engineering · Software Project Management · Randomized Algorithms · Cloud Computing" }
  ],

  admin: [
    "UG dissertation supervisor, IIIT Tiruchirappalli — guided three undergraduate dissertation projects in Computer Science.",
    "Hostel Warden, IIIT Tiruchirappalli — hostel administration, student welfare and residential discipline.",
    "CPWD Coordinator, IIIT Tiruchirappalli — coordination of campus construction activities.",
    "Faculty in-charge, Sports & Photography Clubs, IIIT Tiruchirappalli — sports activities, tournaments, team logistics, event photography and media archives."
  ],

  education: [
    { deg: "Ph.D., Computer Science & Engineering", inst: "NIT Tiruchirappalli", score: "9.5", year: "Mar 2026" },
    { deg: "M.Tech., Software Engineering", inst: "IIIT Tiruchirappalli", score: "9.24", year: "2017" },
    { deg: "B.Tech., Information Technology", inst: "MITS Madanapalle, JNTU Anantapur", score: "79.92%", year: "2015" },
    { deg: "Class XII (MPC)", inst: "Narayana Junior College", score: "93.8%", year: "2008" },
    { deg: "Class X", inst: "Royal English Medium High School", score: "89.16%", year: "2006" }
  ],

  theses: [
    { title: "Insider Threat Detection Through Multi-Granular Behavioral Analysis: A Comprehensive Neural Network Approach", sub: "Ph.D., Confidential Computing — defended", when: "2020–2026" },
    { title: "Refining metamorphic relations for reliability and fault detection in software testing", sub: "M.Tech., Software Engineering", when: "2015–2017" },
    { title: "Android application for the Government of Andhra Pradesh to monitor maternal health", sub: "B.Tech., Information Technology", when: "2011–2015" }
  ],

  reviewJournals: [
    { name: "Engineering Applications of Artificial Intelligence", meta: "Elsevier · SCIE · Q1 · IF 9.0" },
    { name: "BioData Mining", meta: "Springer Nature · SCIE · Q1 · IF 6.5" },
    { name: "Scientific Reports", meta: "Springer Nature · SCIE · Q1 · IF 3.9" },
    { name: "International Journal of Machine Learning and Cybernetics", meta: "Springer Nature · SCIE · Q2 · IF 3.4" },
    { name: "Discover Computing", meta: "Springer Nature · SCIE · Q2 · IF 1.9" },
    { name: "Discover Artificial Intelligence", meta: "Springer Nature · Scopus" },
    { name: "Multimedia Tools and Applications", meta: "Springer Nature · Scopus" },
    { name: "Journal of Umm Al-Qura University for Engineering and Architecture", meta: "Springer Nature · Scopus" }
  ],

  reviewConfs: [
    { name: "ICAIMS 2026", meta: "IEEE Adaptive Intelligence, Modeling and Simulation · Universiti Malaysia Sabah" },
    { name: "RECCAP 2026", meta: "Electronics, Communication, Computing, Automation and Power · IIT Palakkad" },
    { name: "CICT 2025", meta: "Information and Communication Technology · IIITDM Kancheepuram" },
    { name: "SPELL 2025", meta: "Speech and Language Technologies for Low-Resource Languages · IIIT Kottayam · technical committee member" },
    { name: "ICETCS 2024", meta: "Emerging Technologies in Computer Science · IEEE Bangalore Section" }
  ],

  memberships: [
    { name: "IEEE", meta: "ID 98196084 · PAMI, Quantum Technical Community, Security & Privacy, Software Engineering societies" },
    { name: "ACM", meta: "ID 3333784" },
    { name: "Computer Society of India", meta: "ID 7111250006" }
  ],

  skills: [
    { k: "Programming", v: "C, C++, Java, Python" },
    { k: "Machine & deep learning", v: "PyTorch, TensorFlow, Scikit-learn, DoWhy, PennyLane" },
    { k: "Cybersecurity", v: "Anomaly detection, insider threat analytics" },
    { k: "Tools", v: "Anaconda, Git, Jupyter, LaTeX" },
    { k: "Platforms", v: "Linux, Windows" },
    { k: "Languages", v: "English, Telugu, Tamil, Hindi" }
  ],

  fdpDelivered: [
    { name: "ML & DL Demystified: A Hands-on, Theory-Driven Workshop", meta: "NIT Tiruchirappalli, April 2024 · organizer and resource person" },
    { name: "Winter Seminar Series on Deep Learning Algorithms and Implementation", meta: "SRM Institute of Science & Technology, December 2023 · resource person" },
    { name: "Deep Learning Principles and Applications for DRDO Scientists", meta: "NIT Tiruchirappalli, December 2022 · organizer and resource person" }
  ],

  fdpAttended: [
    { name: "Programming with Java", meta: "Amazon via Coursera, July 2026 · 97%" },
    { name: "QT-10 Solid State Physics for Quantum Technologies", meta: "Electronics & ICT Academies, May 2026 · 40 hours · excellent" },
    { name: "QT-09 Engineering Foundations of Quantum Technologies", meta: "Electronics & ICT Academies, April–May 2026 · 44 hours · excellent" },
    { name: "AI, ML and Blockchain for FinTech Cyber Security", meta: "IIT Ropar, March 2026" },
    { name: "Generative AI", meta: "IBM SkillsBuild, December 2025" },
    { name: "Quantum Computing with Machine Learning & AI", meta: "IIT Madras, April 2025" },
    { name: "Bio-inspired Optimization Algorithms using MATLAB", meta: "IEEE Computer Society, NIT Tiruchirappalli, January 2022" },
    { name: "Detecting Deceit Information from Brain Activity", meta: "IEEE Computer Society, NIT Tiruchirappalli, June 2021" }
  ],

  awards: [
    { name: "Institute Gold Medal", meta: "M.Tech Software Engineering, IIIT Tiruchirappalli" },
    { name: "University Gold Medal", meta: "First rank in B.Tech IT, JNTU Anantapur" },
    { name: "Pratibha Award", meta: "Government of Andhra Pradesh, for academic excellence" },
    { name: "Best Paper Award", meta: "ICRTITA 2022, for AUBIT" },
    { name: "GATE qualified", meta: "Computer Science & IT, 2015" },
    { name: "UGC-NET qualified", meta: "Computer Science & Applications, 2018 and 2020" },
    { name: "Silver medallist, volleyball", meta: "All India Inter-NIT Sports Meet, NIT Warangal, 2025" },
    { name: "Bronze medallist, volleyball", meta: "Sportsfete, NIT Tiruchirappalli, 2023 and 2024" },
    { name: "Captain", meta: "UG and PG institute volleyball teams" }
  ],

  references: [
    { name: "Dr. C. Mala", meta: "Professor (HAG), CSE, NIT Tiruchirappalli", email: "mala@nitt.edu" },
    { name: "Dr. R. Mohan", meta: "Associate Professor, CSE, NIT Tiruchirappalli", email: "rmohan@nitt.edu" },
    { name: "Dr. R. Preeth", meta: "Assistant Professor, CSE, IIITDM Kancheepuram", email: "preeth@iiitdm.ac.in" }
  ]
};
