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
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        h1 {
            color: var(--primary-color);
            font-size: 2.8rem;
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
        </div>

        <div id="about" class="tab-content active">
            <div class="section">
                <h2>About Me</h2>
                <p>
                    I am a passionate Data Scientist with expertise in leveraging data to drive impactful solutions.
                    With a strong background in machine learning, statistics, and programming, I aim to solve 
                    complex problems through innovative methodologies and tools.
                </p>
            </div>
        </div>

        <div id="skills" class="tab-content">
            <div class="section">
                <h2>Technical Skills</h2>
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
                <h2>Recent Projects</h2>
                <table>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Technologies Used</th>
                    </tr>
                    <tr>
                        <td>Predictive Maintenance</td>
                        <td>Developed a machine learning model to predict failures</td>
                        <td>Python, Scikit-learn</td>
                    </tr>
                    <tr>
                        <td>Fraud Detection</td>
                        <td>Implemented a system for fraud detection</td>
                        <td>Spark, Kafka</td>
                    </tr>
                </table>
            </div>
        </div>

        <div id="publications" class="tab-content">
            <div class="section">
                <h2>Publications</h2>
                <ul>
                    <li>"Deep Learning in Time Series" - Journal of AI, 2023</li>
                    <li>"Ethics in AI" - AI Symposium, 2021</li>
                </ul>
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
    </script>
</body>
</html>
