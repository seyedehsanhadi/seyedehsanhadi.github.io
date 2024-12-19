<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi CV</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        
        :root {
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --primary-color: #bb86fc;
            --secondary-color: #03dac6;
            --dark-bg: #1e1e1e;
        }
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: all 0.3s ease;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 2px solid var(--primary-color);
        }
        
        .header-left, .header-right {
            flex: 1;
            min-width: 300px;
        }
        
        .photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--primary-color);
            transition: transform 0.3s ease;
        }
        
        .photo:hover {
            transform: scale(1.05);
        }
        
        .name {
            font-size: 2.5em;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .title {
            font-size: 1.5em;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }
        
        .contact-item {
            margin: 10px 0;
            display: flex;
            align-items: center;
        }
        
        .contact-item i {
            margin-right: 10px;
            color: var(--primary-color);
        }
        
        .tab {
            display: flex;
            justify-content: space-around;
            background-color: var(--dark-bg);
            padding: 10px 0;
            margin-top: 20px;
        }
        
        .tab button {
            background-color: transparent;
            border: none;
            color: var(--text-color);
            cursor: pointer;
            font-size: 1.1em;
            padding: 10px 20px;
            transition: all 0.3s ease;
        }
        
        .tab button:hover, .tab button.active {
            background-color: var(--primary-color);
            color: var(--bg-color);
        }
        
        .tabcontent {
            display: none;
            padding: 20px;
            background-color: var(--dark-bg);
            margin-top: 20px;
            border-radius: 5px;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .skill-category {
            font-weight: bold;
            color: var(--secondary-color);
            margin-top: 15px;
        }
        
        .skill-items {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        
        .skill-item {
            background-color: var(--primary-color);
            color: var(--bg-color);
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.9em;
            transition: transform 0.3s ease;
        }
        
        .skill-item:hover {
            transform: translateY(-3px);
        }
        
        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        a:hover {
            color: var(--secondary-color);
        }
        
        .impact-highlights {
            margin-top: 20px;
        }
        
        .impact-item {
            margin: 10px 0;
            position: relative;
            padding-left: 20px;
        }
        
        .impact-item:before {
            content: "•";
            color: var(--secondary-color);
            position: absolute;
            left: 0;
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
