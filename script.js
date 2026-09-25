/**
 * Developer Agency Website - Interactive Script
 * Author: Siddharam Kore
 */

document.addEventListener('DOMContentLoaded', () => {
    initConfiguration();
    initNavbar();
    initFlowSystem();
    initServices();
    initSolutions();
    initProjects();
    initTechnologies();
    initQRGenerator();
    initROICalculator();
    initModals();
    initContactForm();
    initFloatingWhatsApp();
    initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Dynamic Configuration Binding
   -------------------------------------------------------------------------- */
function initConfiguration() {
    if (typeof CONFIG === 'undefined') return;

    const dev = CONFIG.developer;

    // Developer Profile elements
    document.querySelectorAll('.dev-name').forEach(el => el.textContent = dev.name);
    document.querySelectorAll('.dev-title').forEach(el => el.textContent = dev.title);
    document.querySelectorAll('.dev-email').forEach(el => {
        el.textContent = dev.email;
        if (el.tagName === 'A') el.href = `mailto:${dev.email}`;
    });
    document.querySelectorAll('.dev-phone').forEach(el => {
        el.textContent = dev.formattedPhone;
        if (el.tagName === 'A') el.href = `tel:${dev.whatsapp}`;
    });

    // Profile Image
    const profileImg = document.getElementById('aboutProfileImg');
    if (profileImg && dev.avatarPath) {
        profileImg.src = dev.avatarPath;
        profileImg.alt = `${dev.name} - Software Developer`;
    }

    // Social Links
    const ghLink = document.getElementById('githubLink');
    if (ghLink) ghLink.href = dev.githubUrl;

    const liLink = document.getElementById('linkedinLink');
    if (liLink) liLink.href = dev.linkedinUrl;
}

/* --------------------------------------------------------------------------
   2. Sticky Navbar & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveSection();
    });

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });

        if (mobileClose) {
            mobileClose.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

/* --------------------------------------------------------------------------
   3. "More Than Just a Website" System Flow Diagram Interaction
   -------------------------------------------------------------------------- */
const flowDetails = {
    business: "Your Business Workflow: Physical operations, customer inquiries, counter payments, manual record keeping, and day-to-day staff tasks.",
    website: "Brand Website: The primary digital front door designed to convert prospective local clients and rank high on search engines.",
    mobile: "Mobile App: Native iOS/Android app allowing customers to book slots, view plans, get push alerts, and scan check-in QR codes.",
    dashboard: "Admin Dashboard: Central web application for business owners to view revenue, track active members, control staff permissions & inventory.",
    automation: "Automation Engine: Background system that automatically dispatches WhatsApp receipts, renewal alerts, and review requests without human effort.",
    reports: "Business Analytics & Reports: Clear visual graphs showing cash flow, peak hours, customer retention, and automated financial breakdowns."
};

function initFlowSystem() {
    const nodes = document.querySelectorAll('.flow-node');
    const detailBox = document.getElementById('flowDetailBox');

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const step = node.getAttribute('data-flow');
            if (detailBox && flowDetails[step]) {
                detailBox.style.opacity = '0';
                setTimeout(() => {
                    detailBox.innerHTML = `<strong>${node.querySelector('.flow-title').innerText}:</strong> ${flowDetails[step]}`;
                    detailBox.style.opacity = '1';
                }, 150);
            }
        });
    });
}

/* --------------------------------------------------------------------------
   4. Services Grid (Render 14 Services from CONFIG)
   -------------------------------------------------------------------------- */
function initServices() {
    const container = document.getElementById('servicesGrid');
    if (!container || typeof CONFIG === 'undefined') return;

    container.innerHTML = CONFIG.services.map((s, idx) => `
        <div class="service-card" data-aos="fade-up">
            <div>
                <div class="service-header">
                    <div class="service-icon">
                        <i class="${s.icon}"></i>
                    </div>
                    <span class="service-num">0${idx + 1}</span>
                </div>
                <h3 class="service-title">${s.title}</h3>
                <p class="service-desc">${s.description}</p>
            </div>
            <div class="service-tags">
                ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   5. Business Solutions Tabs & Content
   -------------------------------------------------------------------------- */
function initSolutions() {
    const tabs = document.querySelectorAll('.solution-tab');
    const cards = document.querySelectorAll('.solution-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const cat = tab.getAttribute('data-cat');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            cards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   6. Projects Section & Modal System
   -------------------------------------------------------------------------- */
function initProjects() {
    const container = document.getElementById('projectsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!container || typeof CONFIG === 'undefined') return;

    renderProjects(CONFIG.projects);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (filter === 'all') {
                renderProjects(CONFIG.projects);
            } else {
                const filtered = CONFIG.projects.filter(p => p.category === filter);
                renderProjects(filtered);
            }
        });
    });
}

function renderProjects(projectsList) {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = projectsList.map(p => `
        <div class="project-card">
            <div class="project-img-wrapper">
                <span class="project-badge">${p.badge}</span>
                <img src="${p.image}" alt="${p.name}" class="project-img">
            </div>
            <div class="project-body">
                <h3 class="project-title">${p.name}</h3>
                <div class="project-subtitle">${p.subtitle}</div>
                
                <div class="project-problem-box">
                    <strong>Challenge:</strong> ${p.problem.substring(0, 110)}...
                </div>

                <div class="project-techs">
                    ${p.technologies.map(t => `<span class="project-tech-pill">${t}</span>`).join('')}
                </div>

                <div class="project-footer">
                    <button class="btn btn-outline btn-sm" style="width:100%" onclick="openProjectModal('${p.id}')">
                        View Project Details <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openProjectModal(projectId) {
    if (typeof CONFIG === 'undefined') return;
    const p = CONFIG.projects.find(proj => proj.id === projectId);
    if (!p) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');

    if (modal && modalBody) {
        modalBody.innerHTML = `
            <div style="margin-bottom:20px">
                <span class="section-tag">${p.badge}</span>
                <h2 style="font-size:2rem; margin-top:8px;">${p.name}</h2>
                <p style="color:var(--accent-cyan); font-weight:600;">${p.subtitle}</p>
            </div>

            <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:var(--radius-lg); margin-bottom:24px; border:1px solid var(--border-color);">

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">
                <div style="background:rgba(244,63,94,0.06); border:1px solid rgba(244,63,94,0.2); padding:18px; border-radius:var(--radius-md);">
                    <h4 style="color:#f43f5e; margin-bottom:8px;"><i class="fa-solid fa-circle-exclamation"></i> Business Challenge</h4>
                    <p style="font-size:0.92rem; color:var(--text-secondary);">${p.problem}</p>
                </div>
                <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.2); padding:18px; border-radius:var(--radius-md);">
                    <h4 style="color:#10b981; margin-bottom:8px;"><i class="fa-solid fa-circle-check"></i> Software Solution</h4>
                    <p style="font-size:0.92rem; color:var(--text-secondary);">${p.solution}</p>
                </div>
            </div>

            <h4 style="margin-bottom:12px;">Key System Features</h4>
            <ul style="margin-bottom:24px; display:flex; flex-direction:column; gap:10px;">
                ${p.keyFeatures.map(f => `<li style="font-size:0.95rem; color:var(--text-primary); display:flex; gap:10px;"><i class="fa-solid fa-check" style="color:var(--accent-cyan);"></i> ${f}</li>`).join('')}
            </ul>

            <h4 style="margin-bottom:12px;">Technologies Used</h4>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:32px;">
                ${p.technologies.map(t => `<span class="service-tag" style="padding:6px 14px; background:rgba(56,189,248,0.1); color:var(--accent-cyan); font-weight:600;">${t}</span>`).join('')}
            </div>

            <a href="#contact" onclick="closeModal('projectModal')" class="btn btn-primary btn-lg" style="width:100%">
                Inquire About A Similar System <i class="fa-solid fa-paper-plane"></i>
            </a>
        `;
        modal.classList.add('open');
    }
}

/* --------------------------------------------------------------------------
   7. Technology Cards Render
   -------------------------------------------------------------------------- */
function initTechnologies() {
    const container = document.getElementById('techGrid');
    if (!container || typeof CONFIG === 'undefined') return;

    container.innerHTML = CONFIG.technologies.map(t => `
        <div class="tech-card">
            <div class="tech-icon" style="color:${t.color}">
                <i class="${t.icon}"></i>
            </div>
            <div class="tech-name">${t.name}</div>
            <div class="tech-category">${t.category}</div>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   8. Google Review QR Simulator Tool
   -------------------------------------------------------------------------- */
function initQRGenerator() {
    const nameInput = document.getElementById('qrBusinessName');
    const qrImg = document.getElementById('qrImageDisplay');
    const generateBtn = document.getElementById('qrGenerateBtn');

    if (!qrImg) return;

    function updateQR() {
        const busName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "My Local Business";
        const dummyReviewUrl = `https://search.google.com/local/writereview?placeid=${encodeURIComponent(busName)}`;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(dummyReviewUrl)}&color=060913&format=png`;
    }

    if (generateBtn) generateBtn.addEventListener('click', updateQR);
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') updateQR();
        });
    }
}

/* --------------------------------------------------------------------------
   9. Business ROI & Automation Savings Calculator
   -------------------------------------------------------------------------- */
function initROICalculator() {
    const hoursSlider = document.getElementById('roiHoursSlider');
    const staffSlider = document.getElementById('roiStaffSlider');
    const hoursVal = document.getElementById('roiHoursVal');
    const staffVal = document.getElementById('roiStaffVal');
    const savedHoursDisplay = document.getElementById('roiSavedHours');
    const savedMoneyDisplay = document.getElementById('roiSavedMoney');

    if (!hoursSlider || !staffSlider) return;

    function calculateROI() {
        const hours = parseInt(hoursSlider.value);
        const staff = parseInt(staffSlider.value);

        if (hoursVal) hoursVal.textContent = hours;
        if (staffVal) staffVal.textContent = staff;

        // Estimated 75% savings on manual routine tasks (invoicing, calls, bookings)
        const savedHoursPerMonth = Math.round(hours * staff * 4.33 * 0.75);
        // Assuming avg hourly cost rate of ~ ₹250/hr for local operations
        const estimatedAnnualSavings = Math.round(savedHoursPerMonth * 12 * 250);

        if (savedHoursDisplay) savedHoursDisplay.textContent = `${savedHoursPerMonth} hrs/mo`;
        if (savedMoneyDisplay) savedMoneyDisplay.textContent = `₹${estimatedAnnualSavings.toLocaleString('en-IN')}/yr`;
    }

    hoursSlider.addEventListener('input', calculateROI);
    staffSlider.addEventListener('input', calculateROI);
    calculateROI();
}

/* --------------------------------------------------------------------------
   10. Modal Control Functions
   -------------------------------------------------------------------------- */
function initModals() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('open');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('open');
}

/* --------------------------------------------------------------------------
   11. Contact Form Handler (Direct WhatsApp / Email Dispatch)
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('businessContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const bName = document.getElementById('formBusinessName').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const bType = document.getElementById('formBusinessType').value;
        const msg = document.getElementById('formMessage').value.trim();

        const selectedServices = Array.from(document.querySelectorAll('input[name="neededService"]:checked'))
            .map(cb => cb.value)
            .join(', ');

        const formattedMsg = `*New Business Inquiry*%0A%0A*Name:* ${name}%0A*Business:* ${bName} (${bType})%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Required Solutions:* ${selectedServices || 'General Inquiry'}%0A*Message:* ${msg}`;

        const waNumber = CONFIG ? CONFIG.developer.whatsapp : "917057453662";
        const waUrl = `https://wa.me/${waNumber}?text=${formattedMsg}`;

        window.open(waUrl, '_blank');
        form.reset();
        alert('Thank you! Redirecting to WhatsApp to start direct discussion with Siddhram Kore.');
    });
}

/* --------------------------------------------------------------------------
   12. Floating WhatsApp Widget
   -------------------------------------------------------------------------- */
function initFloatingWhatsApp() {
    const waBtn = document.getElementById('floatingWaBtn');
    if (!waBtn) return;

    const waNumber = CONFIG ? CONFIG.developer.whatsapp : "917057453662";
    const defaultMsg = CONFIG ? encodeURIComponent(CONFIG.whatsappDefaultMessage) : "Hello, I am interested in developing a digital solution for my business.";

    waBtn.href = `https://wa.me/${waNumber}?text=${defaultMsg}`;
}

/* --------------------------------------------------------------------------
   13. Simple Intersection Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .solution-card, .process-card, .project-card, .tech-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
}
