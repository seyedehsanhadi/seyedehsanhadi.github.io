<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi CV</title>
<style>
    :root {
        --bg-primary: #0a0a0f;
        --bg-secondary: #151520;
        --bg-tertiary: #1e1e2a;
        --accent-primary: #7B68EE;    /* Soft Purple */
        --accent-secondary: #00CED1;   /* Turquoise */
        --accent-tertiary: #FF6B6B;    /* Coral */
        --text-primary: #ffffff;
        --text-secondary: #b3b3cc;
        --text-muted: #666680;
        --gradient: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    }

    body {
        font-family: 'Inter', 'Roboto', sans-serif;
        margin: 0;
        padding: 20px;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        background: linear-gradient(135deg, #0a0a0f 0%, #151520 100%);
        min-height: 100vh;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background-color: var(--bg-secondary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header {
        display: flex;
        background: var(--bg-tertiary);
        padding: 40px;
        position: relative;
        overflow: hidden;
    }

    .header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--gradient);
    }

    .photo {
        width: 180px;
        height: 180px;
        border-radius: 15px;
        border: 2px solid var(--accent-primary);
        transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(123, 104, 238, 0.2);
    }

    .photo:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 30px rgba(123, 104, 238, 0.4);
    }

    .name {
        font-size: 2.5em;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
    }

    .tab {
        background: var(--bg-tertiary);
        padding: 10px;
        display: flex;
        gap: 5px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tab button {
        background: transparent;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        color: var(--text-secondary);
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .tab button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    .tab button:hover::before {
        opacity: 0.1;
    }

    .tab button.active {
        color: var(--text-primary);
        background: var(--gradient);
    }

    .skill-item {
        background: var(--bg-tertiary);
        color: var(--text-primary);
        padding: 8px 16px;
        border-radius: 20px;
        margin: 5px;
        display: inline-block;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .skill-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(123, 104, 238, 0.2);
        border-color: var(--accent-primary);
    }

    .contact-item {
        background: var(--bg-tertiary);
        padding: 12px;
        border-radius: 8px;
        margin: 8px 0;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-item:hover {
        transform: translateX(5px);
        border-color: var(--accent-secondary);
    }

    .tabcontent {
        padding: 30px;
        animation: slideIn 0.5s ease;
        background: var(--bg-secondary);
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--accent-primary);
        border-radius: 4px;
    }

    /* Neon Glow Effects */
    .highlight {
        position: relative;
    }

    .highlight::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 20px var(--accent-primary);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .highlight:hover::after {
        opacity: 0.5;
    }

    /* Glass Effect Cards */
    .card {
        background: rgba(30, 30, 42, 0.6);
        backdrop-filter: blur(12px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px;
        margin: 10px 0;
    }

    /* Progress Bars */
    .progress-bar {
        height: 4px;
        background: var(--bg-tertiary);
        border-radius: 2px;
        overflow: hidden;
    }

    .progress-bar-fill {
        height: 100%;
        background: var(--gradient);
        transition: width 0.3s ease;
    }
</style>

<script>
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add tab functionality with animations
    function openTab(evt, tabName) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        const tablinks = document.getElementsByClassName("tablinks");

        // Hide all tabs
        Array.from(tabcontent).forEach(tab => {
            tab.style.display = "none";
        });

        // Remove active class
        Array.from(tablinks).forEach(link => {
            link.className = link.className.replace(" active", "");
        });

        // Show current tab with animation
        const currentTab = document.getElementById(tabName);
        currentTab.style.display = "block";
        currentTab.style.animation = "slideIn 0.5s ease";
        evt.currentTarget.className += " active";
    }

    // Add hover effects for skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
</script>


</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-left">
                <img src="photo.png" alt="Seyed Ehsan Hadi" class="photo">
            </div>
            <div class="header-right">
                <div class="name">Seyed Ehsan Hadi, PhD</div>
                <div class="title">Materials Chemist | Project Manager</div>
                <div class="contact">
                    <div class="contact-item"><i class="fas fa-phone"></i> +46</div>
                    <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:s.com">sy..com</a></div>
                    <div class="contact-item"><i class="fas fa-map-marker-alt"></i> 4, 183 59 Stockholm, Sweden</div>
                    <div class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/seyed-ehsan-hadi">seyed-ehsan-hadi</a></div>
                    <div class="contact-item"><i class="fas fa-globe"></i> <a href="https://scholar.google.com/citations?hl=en&user=aqsQc48AAAAJ">Google Scholar</a></div>
                    <div class="contact-item"><i class="fas fa-check"></i> <span style="color: var(--secondary-color);">Swedish Resident</span></div>
                </div>
            </div>
        </div>

        <div class="tab">
            <button class="tablinks" onclick="openTab(event, 'Summary')">Summary</button>
            <button class="tablinks" onclick="openTab(event, 'Experience')">Experience</button>
            <button class="tablinks" onclick="openTab(event, 'Skills')">Skills</button>
            <button class="tablinks" onclick="openTab(event, 'Education')">Education</button>
            <button class="tablinks" onclick="openTab(event, 'Publications')">Publications</button>
        </div>

        <div id="Summary" class="tabcontent">
            <p>Multidisciplinary leader with 7+ years in materials science, driving R&D and optimizing processes for innovative materials.</p>
            <div class="impact-highlights">
                <div class="impact-item">Wallenberg Wood Science Center PhD Grant (2019-2023)</div>
                <div class="impact-item">Stockholm University PhD Grant (2019-2024)</div>
                <div class="impact-item">UNAM Fellowship and Bilkent University Scholarship (2017-2019)</div>
                <div class="impact-item">TÜBİTAK Fellowship (2018-2019)</div>
                <div class="impact-item">Published in peer-reviewed journals, including research on nanocellulose composites and magnetic foams.</div>
                <div class="impact-item">Led multiple projects and mentored students, contributing to the development of future scientific talent.</div>
                <div class="impact-item">Developed high-performance nanocomposite solutions for industrial applications.</div>
            </div>
        </div>

        <div id="Experience" class="tabcontent">
            <h3>Professional Experience</h3>
            <p>Content for experience...</p>
        </div>

        <div id="Skills" class="tabcontent">
            <div class="skill-category">Technical Skills</div>
            <div class="skill-items">
                <span class="skill-item">Materials Characterization</span>
                <span class="skill-item">Process Optimization</span>
                <span class="skill-item">Data Analysis</span>
            </div>
            <div class="skill-category">Soft Skills</div>
            <div class="skill-items">
                <span class="skill-item">Project Management</span>
                <span class="skill-item">Team Leadership</span>
                <span class="skill-item">Scientific Writing</span>
            </div>
        </div>

        <div id="Education" class="tabcontent">
            <h3>Education</h3>
            <p>Content for education...</p>
        </div>

        <div id="Publications" class="tabcontent">
            <h3>Publications</h3>
            <p>Content for publications...</p>
        </div>
    </div>

    <script>
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        // Open the Summary tab by default
        document.getElementsByClassName("tablinks")[0].click();
    </script>
</body>
</html>
