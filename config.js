/**
 * Website Configuration & Owner Profile
 * Easily update developer contact info, projects, technologies, and services here!
 */

const CONFIG = {
    // Owner Profile Information
    developer: {
        name: "Siddharam Kore",
        title: "Software Developer & Business Automation Specialist",
        tagline: "Building Complete Digital Systems for Local & SMB Businesses",
        email: "siddharamkore18@gmail.com",
        phone: "+91 7057453662",
        whatsapp: "917057453662", // Digits only with country code for wa.me links
        formattedPhone: "+91 7057453662",
        location: "Maharashtra, India",
        availableForWork: true,
        experienceYears: "5+",
        githubUrl: "https://github.com/siddhukore18",
        linkedinUrl: "https://linkedin.com/in/siddharamkore",
        avatarPath: "./assets/images/developer_profile.jpg"
    },

    // Default pre-filled message for WhatsApp inquiries
    whatsappDefaultMessage: "Hello Siddhram, I am interested in developing a digital solution for my business. I would like to discuss my requirements.",

    // Services Offered
    services: [
        {
            id: 1,
            icon: "fa-solid fa-globe",
            title: "Professional Business Websites",
            description: "High-performance, modern responsive websites designed to convert visitors into loyal clients for your business.",
            tags: ["Responsive", "SEO Ready", "Fast Loading"]
        },
        {
            id: 2,
            icon: "fa-solid fa-mobile-screen-button",
            title: "Android & iOS Mobile Applications",
            description: "Cross-platform mobile apps for iOS and Android built with Flutter for seamless customer and staff interaction.",
            tags: ["Flutter", "Cross-Platform", "User Friendly"]
        },
        {
            id: 3,
            icon: "fa-solid fa-users-gear",
            title: "Customer & Member Management",
            description: "Digital customer database systems to track client profiles, histories, memberships, and interaction logs effortlessly.",
            tags: ["CRM", "Profiles", "Data Centralization"]
        },
        {
            id: 4,
            icon: "fa-solid fa-credit-card",
            title: "Payment & Membership Management",
            description: "Automated subscription tracking, digital invoicing, recurring billing records, and online payment integrations.",
            tags: ["Invoicing", "Subscription", "Payment Gateways"]
        },
        {
            id: 5,
            icon: "fa-solid fa-calendar-check",
            title: "Online Booking & Appointments",
            description: "24/7 self-service slot booking engines for clinics, salons, gyms, and consultation services to eliminate scheduling conflict.",
            tags: ["Slot Booking", "Reminders", "Schedule Management"]
        },
        {
            id: 6,
            icon: "fa-solid fa-chart-line",
            title: "Admin Dashboards",
            description: "Centralized control panels giving you full visibility and real-time control over all operations, sales, and staff activity.",
            tags: ["Control Panel", "Real-Time Data", "Role Access"]
        },
        {
            id: 7,
            icon: "fa-solid fa-bell",
            title: "Renewal & Expiry Notifications",
            description: "Automated alert triggers for plan renewals, upcoming due dates, and membership expirations via SMS, Email, and WhatsApp.",
            tags: ["Automated Alerts", "Retention", "Zero Manual Followups"]
        },
        {
            id: 8,
            icon: "fa-brands fa-whatsapp",
            title: "WhatsApp / SMS / Email Automation",
            description: "Direct instant notification pipelines to automatically message customers for order confirmations, receipts, and offers.",
            tags: ["Instant Messaging", "Automated Triggers", "Workflows"]
        },
        {
            id: 9,
            icon: "fa-solid fa-qrcode",
            title: "Google Review QR / Scanner System",
            description: "Smart acrylic tabletop QR scanner displays making it frictionless for happy clients to leave Google reviews instantly.",
            tags: ["QR Code", "Google Reviews", "Reputation Growth"]
        },
        {
            id: 10,
            icon: "fa-solid fa-dumbbell",
            title: "Gym Management Solutions",
            description: "End-to-end gym platform: QR attendance scanner, member plans, personal workout guides, fee alerts & trainer assigning.",
            tags: ["Gym OS", "QR Attendance", "Fee Tracking"]
        },
        {
            id: 11,
            icon: "fa-solid fa-shop",
            title: "Retail / Shop Management",
            description: "Inventory barcode management, point-of-sale billing, low stock alerts, supplier ledger, and daily cash drawer accounting.",
            tags: ["POS Software", "Inventory Control", "Billing"]
        },
        {
            id: 12,
            icon: "fa-solid fa-chart-pie",
            title: "Reports & Business Analytics",
            description: "Visual financial, attendance, inventory, and sales analytics charts empowering smart data-backed decision making.",
            tags: ["Visual Graphs", "Revenue Insights", "Export PDF/Excel"]
        },
        {
            id: 13,
            icon: "fa-solid fa-shield-halved",
            title: "Secure Login & Data Management",
            description: "Enterprise-grade multi-role authentication (Admin, Staff, Manager, Client) with encrypted credentials and audit logs.",
            tags: ["Role Based Access", "Encrypted Data", "Security"]
        },
        {
            id: 14,
            icon: "fa-solid fa-cloud-arrow-up",
            title: "Cloud Database & Data Backup",
            description: "High-availability MySQL and Firebase cloud databases with automated daily backups protecting your core business records.",
            tags: ["Firebase & MySQL", "Cloud Storage", "Auto Backup"]
        }
    ],

    // Business Vertical Solutions
    solutions: [
        {
            category: "gym",
            title: "Gym & Fitness",
            icon: "fa-solid fa-dumbbell",
            summary: "Automate memberships, check-ins, payments, and member retention for fitness centers and studios.",
            features: [
                "Member Management & Digital ID Profiles",
                "Membership Plans & Recurring Payment Tracking",
                "QR Code Attendance & Desk Scanner",
                "Automated Expiry & Renewal WhatsApp Alerts",
                "Digital Workout & Diet Plan Distribution",
                "Comprehensive Admin & Financial Dashboard"
            ]
        },
        {
            category: "retail",
            title: "Retail & Shops",
            icon: "fa-solid fa-bag-shopping",
            summary: "Streamline inventory, counter sales, billing, customer ledger, and daily profit records.",
            features: [
                "Product & Category Management",
                "Customer Profiles & Credit Ledger (Udhar Book)",
                "Dynamic Pricing & Discount Rules",
                "Low Stock & Supplier Reorder Alerts",
                "Fast Point-of-Sale (POS) & Sales Records",
                "Daily & Monthly Profit / Sales Reports"
            ]
        },
        {
            category: "hotels",
            title: "Hotels & Restaurants",
            icon: "fa-solid fa-hotel",
            summary: "Elevate guest experience with direct booking engines, digital menus, offers, and review generation.",
            features: [
                "Modern Brand Website & Room/Table Booking Engine",
                "Online Reservation Management System",
                "Guest Profiles & Loyalty History",
                "Special Promotional Offers & Festive Broadcasts",
                "Automated Feedback & Review Request Triggers",
                "Google Review QR Counter Display System"
            ]
        },
        {
            category: "clinics",
            title: "Clinics & Healthcare",
            icon: "fa-solid fa-user-doctor",
            summary: "Organize patient records, online appointment scheduling, and automated SMS appointment reminders.",
            features: [
                "Patient Profile & Digital Treatment Records",
                "Online Slot Booking Engine for Patients",
                "Automated Appointment Reminder Notifications",
                "Doctor Schedule & Prescription Notes",
                "Billing & Consultation Ledger",
                "Centralized Clinic Admin Control Dashboard"
            ]
        }
    ],

    // Technologies Used
    technologies: [
        { name: "Flutter", category: "Mobile Apps", icon: "fa-brands fa-flutter", color: "#38bdf8" },
        { name: "Dart", category: "Programming", icon: "fa-solid fa-code", color: "#60a5fa" },
        { name: "Java", category: "Backend", icon: "fa-brands fa-java", color: "#f87171" },
        { name: "Spring Boot", category: "Enterprise Backend", icon: "fa-solid fa-leaf", color: "#4ade80" },
        { name: "Firebase", category: "Cloud & Auth", icon: "fa-solid fa-fire", color: "#fbbf24" },
        { name: "MySQL / SQL", category: "Databases", icon: "fa-solid fa-database", color: "#818cf8" },
        { name: "REST APIs", category: "Integrations", icon: "fa-solid fa-plug", color: "#a78bfa" },
        { name: "Git / GitHub", category: "DevOps & Code", icon: "fa-brands fa-github", color: "#9ca3af" },
        { name: "Python", category: "Automation & Scripts", icon: "fa-brands fa-python", color: "#38bdf8" },
        { name: "AI Integration", category: "Smart Workflows", icon: "fa-solid fa-brain", color: "#c084fc" }
    ],

    // Featured Projects Portfolio
    projects: [
        {
            id: "mk-store",
            name: "MK Store",
            subtitle: "Retail / Wholesale Product Management Application",
            category: "retail",
            image: "./assets/images/mk_store.jpg",
            problem: "Manual stock management, slow billing process, and unorganized customer credit records caused frequent inventory discrepancies and revenue leakage.",
            solution: "Developed a custom desktop & tablet management system that unifies stock tracking, fast POS counter billing, supplier credit ledger, and real-time sales reporting.",
            technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Modern Desktop UI"],
            keyFeatures: [
                "Barcode scan counter billing with thermal receipt printing",
                "Real-time stock depletion and low-inventory triggers",
                "Customer udhar (credit) ledger with payment history",
                "Profit margin & daily sales breakdown analytics dashboard",
                "Encrypted role-based access for store managers and cashiers"
            ],
            badge: "Retail Management"
        },
        {
            id: "gym-system",
            name: "Gym Management System",
            subtitle: "Member, Payment, Attendance & Membership Management",
            category: "gym",
            image: "./assets/images/gym_app.jpg",
            problem: "Gym owners struggled to follow up on expired memberships manually, leading to delayed payments, lost members, and crowded front-desk check-in bottlenecks.",
            solution: "Built an end-to-end gym platform combining a mobile app for members, front-desk QR attendance tablet scanner, and automated WhatsApp subscription reminder engine.",
            technologies: ["Flutter", "Dart", "Firebase", "WhatsApp API", "REST APIs"],
            keyFeatures: [
                "Member QR Code Check-in counter scanner (instant verification)",
                "Automated 3-day and 1-day membership expiry WhatsApp alerts",
                "Digital fee receipt generation & payment status tracking",
                "Member workout & diet chart assignment interface",
                "Monthly active members, revenue, and attendance analytics"
            ],
            badge: "Fitness Software"
        },
        {
            id: "mr-project",
            name: "MR Project",
            subtitle: "Business Operations & Workflow Management System",
            category: "management",
            image: "./assets/images/mr_project.jpg",
            problem: "Inter-departmental tasks, client project deliverables, and invoicing were scattered across spreadsheets and messaging groups without central accountability.",
            solution: "Engineered a unified business management hub featuring automated workflow stages, client portal, automated status notifications, and executive financial reports.",
            technologies: ["Spring Boot", "MySQL", "Flutter Web", "REST APIs", "Python Scripts"],
            keyFeatures: [
                "Multi-tenant project & task breakdown tracking board",
                "Client billing, milestone invoicing & payment logging",
                "Automated Email & SMS status update triggers for clients",
                "Staff task assignment, time tracking, and productivity logs",
                "Exportable PDF/Excel executive summary performance reports"
            ],
            badge: "Enterprise Automation"
        }
    ]
};
