<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi CV</title>
    <style>
        body {
            font-family: 'Roboto', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #121212;
            color: #e0e0e0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #1e1e1e;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
        }
        .header {
            display: flex;
            background-color: #2c2c2c;
            color: #ffffff;
            padding: 30px;
        }
        .header-left { width: 30%; padding-right: 30px; }
        .header-right { width: 70%; }
        .photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #bb86fc;
        }
        .contact { margin-top: 20px; }
        .contact-item {
            margin: 10px 0;
            display: flex;
            align-items: center;
        }
        .contact-item i {
            margin-right: 10px;
            color: #bb86fc;
        }
        .name {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #bb86fc;
        }
        .title {
            font-size: 24px;
            font-style: italic;
            color: #03dac6;
            margin-bottom: 20px;
        }
        .summary {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .impact-highlights {
            background-color: #2c2c2c;
            padding: 20px;
            border-radius: 8px;
        }
        .impact-item {
            margin: 10px 0;
            position: relative;
            padding-left: 20px;
        }
        .impact-item:before {
            content: "•";
            color: #03dac6;
            position: absolute;
            left: 0;
        }
        .tab {
            overflow: hidden;
            background-color: #2c2c2c;
            border-radius: 8px 8px 0 0;
        }
        .tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
            color: #e0e0e0;
        }
        .tab button:hover { background-color: #3c3c3c; }
        .tab button.active {
            background-color: #bb86fc;
            color: #121212;
        }
        .tabcontent {
            display: none;
            padding: 20px;
            border: 1px solid #3c3c3c;
            border-top: none;
            border-radius: 0 0 8px 8px;
            animation: fadeEffect 1s;
        }
        @keyframes fadeEffect {
            from {opacity: 0;}
            to {opacity: 1;}
        }
        .skill-category {
            font-weight: bold;
            color: #03dac6;
            margin-top: 15px;
        }
        .skill-items { margin-left: 20px; }
        a { color: #bb86fc; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-left">
                <img src="image_cv.png" alt="Photo" class="photo">
                <div class="contact">
                    <div class="contact-item"><i class="fas fa-phone"></i> +46</div>
                    <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:s.com">sy..com</a></div>
                    <div class="contact-item"><i class="fas fa-map-marker-alt"></i> 4, 183 59 Stockholm, Sweden</div>
                    <div class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/seyed-ehsan-hadi">seyed-ehsan-hadi</a></div>
                    <div class="contact-item"><i class="fas fa-globe"></i> <a href="https://scholar.google.com/citations?hl=en&user=aqsQc48AAAAJ">Google Scholar</a></div>
                    <div class="contact-item"><i class="fas fa-check"></i> <span style="color: #03dac6;">Swedish Resident</span></div>
                </div>
            </div>
            <div class="header-right">
                <div class="name">Seyed Ehsan Hadi, PhD</div>
                <div class="title">Materials Chemist | Project Manager</div>
                <div class="summary">Multidisciplinary leader with 7+ years in materials science, driving R&D and optimizing processes for innovative materials.</div>
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
        </div>

        <div class="tab">
            <button class="tablinks" onclick="openTab(event, 'Experience')">Experience</button>
            <button class="tablinks" onclick="openTab(event, 'Skills')">Skills</button>
            <button class="tablinks" onclick="openTab(event, 'Education')">Education</button>
            <button class="tablinks" onclick="openTab(event, 'Publications')">Publications</button>
        </div>

        <div id="Experience" class="tabcontent">
            <h3>Experience</h3>
            <p>Content for experience...</p>
        </div>

        <div id="Skills" class="tabcontent">
            <h3>Skills</h3>
            <div class="skill-category">Technical Skills</div>
            <div class="skill-items">
                <ul>
                    <li>Materials Characterization</li>
                    <li>Process Optimization</li>
                    <li>Data Analysis</li>
                </ul>
            </div>
            <div class="skill-category">Soft Skills</div>
            <div class="skill-items">
                <ul>
                    <li>Project Management</li>
                    <li>Team Leadership</li>
                    <li>Scientific Writing</li>
                </ul>
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
        // Open the first tab by default
        document.getElementsByClassName("tablinks")[0].click();
    </script>
</body>
</html>
