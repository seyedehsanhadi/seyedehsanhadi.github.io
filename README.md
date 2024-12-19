<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi CV</title>
<style>
    :root {
        --primary-color: #8A9A5B;     /* Moss Green */
        --secondary-color: #9BE0FC;    /* Sky Blue */
        --accent-color: #FFDAB9;       /* Peach */
        --dark-bg: #2c2c2c;
        --text-color: #e0e0e0;
        --highlight: #BEC496;          /* Pastel Green */
    }

    body {
        font-family: 'Roboto', Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f0f4f8;
        color: #333;
        background: linear-gradient(135deg, #f4f7f6, #e7f7f4);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .header {
        display: flex;
        background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
        padding: 40px;
        color: #fff;
    }

    .photo {
        width: 180px;
        height: 180px;
        border-radius: 15px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .photo:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .tab {
        background: var(--highlight);
        padding: 10px;
        border-radius: 10px 10px 0 0;
        display: flex;
        gap: 5px;
    }

    .tab button {
        background: transparent;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        color: #2c2c2c;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .tab button:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .tab button.active {
        background: var(--accent-color);
        color: #333;
    }

    .skill-item {
        background: linear-gradient(120deg, var(--primary-color), var(--highlight));
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        margin: 5px;
        display: inline-block;
        transition: transform 0.2s ease;
    }

    .skill-item:hover {
        transform: scale(1.05);
    }

    .contact-item {
        background: rgba(255, 255, 255, 0.1);
        padding: 10px;
        border-radius: 8px;
        margin: 8px 0;
        transition: background-color 0.3s ease;
    }

    .contact-item:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .tabcontent {
        padding: 30px;
        animation: fadeIn 0.5s ease;
        background: linear-gradient(135deg, #ffffff, #f9f9f9);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>

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
