<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #2C3E50;
            --accent-color: #2980B9;
            --bg-color: #ECF0F1;
            --text-color: #2C3E50;
            --section-bg: #FFFFFF;
            --hover-color: #3498DB;
            --dark-bg: #2C3E50;
            --dark-text: #ECF0F1;
            --dark-section-bg: #34495E;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            overflow-x: hidden;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        h1 {
            color: var(--primary-color);
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .tabs {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 20px;
            background-color: var(--section-bg);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .tab {
            flex: 1;
            padding: 15px 20px;
            text-align: center;
            cursor: pointer;
            background-color: var(--section-bg);
            color: var(--text-color);
            font-weight: 600;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .tab:hover, .tab.active {
            background-color: var(--primary-color);
            color: white;
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease-in-out;
        }

        .tab-content.active {
            display: block;
        }

        .section {
            background-color: var(--section-bg);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .skills, .projects, .publications {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        .skill-tag, .project-tag, .publication-tag {
            background-color: var(--primary-color);
            color: white;
            border-radius: 20px;
            padding: 10px 15px;
            font-size: 0.9em;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .skill-tag:hover, .project-tag:hover, .publication-tag:hover {
            background-color: var(--hover-color);
            transform: scale(1.1);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        th, td {
            border: 1px solid var(--primary-color);
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: var(--primary-color);
            color: white;
        }

        .dark-mode {
            background-color: var(--dark-bg);
            color: var(--dark-text);
        }

        .dark-mode .section {
            background-color: var(--dark-section-bg);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        ul {
            list-style: none;
            padding: 0;
        }

        ul li {
            margin: 5px 0;
            font-size: 1rem;
        }

        .contact {
            text-align: center;
        }

        .contact form {
            max-width: 500px;
            margin: 0 auto;
        }

        .contact input, .contact textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid var(--primary-color);
            border-radius: 5px;
        }

        .contact button {
            padding: 10px 20px;
            background-color: var(--accent-color);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .contact button:hover {
            background-color: var(--hover-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data Scientist Portfolio</h1>

        <div class="tabs">
            <div class="tab active" onclick="openTab(event, 'about')">About Me</div>
            <div class="tab" onclick="openTab(event, 'skills')">Skills</div>
            <div class="tab" onclick="openTab(event, 'projects')">Projects</div>
            <div class="tab" onclick="openTab(event, 'publications')">Publications</div>
            <div class="tab" onclick="openTab(event, 'contact')">Contact</div>
        </div>

        <div id="about" class="tab-content active">
            <div class="section">
                <h2 style="font-size: 1.5rem;">About Me</h2>
                <p>I am a passionate Data Scientist with expertise in leveraging data to drive impactful solutions. With a strong background in machine learning, statistics, and programming, I aim to solve complex problems through innovative methodologies and tools.</p>
                <h3>Career Highlights</h3>
                <ul>
                    <li>5+ years in Data Science and Analytics.</li>
                    <li>Lead data-driven initiatives that increased revenue by 15%.</li>
                    <li>Developed end-to-end machine learning pipelines.</li>
                </ul>
            </div>
        </div>

        <div id="skills" class="tab-content">
            <div class="section">
                <h2 style="font-size: 1.5rem;">Technical Skills</h2>
                <div class="skills">
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">R</span>
                    <span class="skill-tag">SQL</span>
                    <span class="skill-tag">Machine Learning</span>
                    <span class="skill-tag">Deep Learning</span>
                    <span class="skill-tag">Data Visualization</span>
                    <span class="skill-tag">AWS</span>
                    <span class="skill-tag">Spark</span>
                </div>
            </div>
        </div>

        <div id="projects" class="tab-content">
            <div class="section">
                <h2 style="font-size: 1.5rem;">Recent Projects</h2>
                <table>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Technologies Used</th>
                        <th>Links</th>
                    </tr>
                    <tr>
                        <td>Predictive Maintenance</td>
                        <td>Developed a machine learning model to predict failures</td>
                        <td>Python, Scikit-learn</td>
                        <td><a href="#">GitHub</a></td>
                    </tr>
                    <tr>
                        <td>Fraud Detection</td>
                        <td>Implemented a system for fraud detection</td>
                        <td>Spark, Kafka</td>
                        <td><a href="#">GitHub</a></td>
                    </tr>
                </table>
            </div>
        </div>

        <div id="publications" class="tab-content">
            <div class="section">
                <h2 style="font-size: 1.5rem;">Publications</h2>
                <ul>
                    <li>"Deep Learning in Time Series" - Journal of AI, 2023</li>
                    <li>"Ethics in AI" - AI Symposium, 2021</li>
                </ul>
                <h3>Awards and Recognitions</h3>
                <ul>
                    <li>Best Data Scientist Award - TechCon, 2022</li>
                    <li>Top Paper Award - AI Journal, 2021</li>
                </ul>
            </div>
        </div>

        <div id="contact" class="tab-content">
            <div class="section contact">
                <h2 style="font-size: 1.5rem;">Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
