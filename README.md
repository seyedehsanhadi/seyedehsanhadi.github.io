<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #1E3A8A;
            --accent-color: #3B82F6;
            --bg-color: #121212;
            --text-color: #E0E0E0;
            --section-bg: #1E1E1E;
            --hover-color: #2563EB;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        h1, h2, h3, h4 {
            color: var(--accent-color);
            margin-top: 30px;
            font-weight: 700;
        }

        h1 { 
            font-size: clamp(2.5rem, 5vw, 4rem);
            text-align: center;
            margin-bottom: 50px;
        }

        h2 { 
            font-size: 2em;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 10px;
        }

        .section {
            background-color: var(--section-bg);
            border-radius: 8px;
            padding: 30px;
            margin: 40px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .skill-tag {
            background-color: var(--primary-color);
            color: var(--text-color);
            border-radius: 20px;
            padding: 8px 20px;
            font-size: 0.9em;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background-color: var(--accent-color);
            transform: scale(1.05);
        }

        .tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
        }

        .tab {
            background-color: var(--section-bg);
            color: var(--text-color);
            border: none;
            padding: 10px 20px;
            margin: 0 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .tab.active {
            background-color: var(--accent-color);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid var(--accent-color);
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: var(--primary-color);
            color: var(--text-color);
        }

        .chart {
            width: 100%;
            height: 300px;
            background-color: var(--section-bg);
            border-radius: 8px;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            padding: 20px;
            box-sizing: border-box;
        }

        .bar {
            width: 40px;
            background-color: var(--accent-color);
            transition: height 0.5s ease;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data Scientist Portfolio</h1>

        <div class="tabs">
            <button class="tab active" onclick="openTab(event, 'skills')">Skills</button>
            <button class="tab" onclick="openTab(event, 'projects')">Projects</button>
            <button class="tab" onclick="openTab(event, 'publications')">Publications</button>
        </div>

        <div id="skills" class="tab-content active">
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
                    <span class="skill-tag">TensorFlow</span>
                    <span class="skill-tag">PyTorch</span>
                </div>
            </div>
            <div class="section">
                <h2>Skill Proficiency</h2>
                <div class="chart">
                    <div class="bar" style="height: 90%;"></div>
                    <div class="bar" style="height: 75%;"></div>
                    <div class="bar" style="height: 85%;"></div>
                    <div class="bar" style="height: 70%;"></div>
                    <div class="bar" style="height: 80%;"></div>
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
                        <td>Predictive Maintenance Model</td>
                        <td>Developed a machine learning model to predict equipment failures</td>
                        <td>Python, Scikit-learn, TensorFlow</td>
                    </tr>
                    <tr>
                        <td>Customer Churn Analysis</td>
                        <td>Analyzed customer data to predict and reduce churn rates</td>
                        <td>R, ggplot2, Random Forest</td>
                    </tr>
                    <tr>
                        <td>Real-time Fraud Detection</td>
                        <td>Implemented a real-time fraud detection system for financial transactions</td>
                        <td>Python, Spark, Kafka</td>
                    </tr>
                </table>
            </div>
        </div>

        <div id="publications" class="tab-content">
            <div class="section">
                <h2>Research Publications</h2>
                <ul>
                    <li>"Novel Approaches in Time Series Forecasting Using Deep Learning" - Journal of Data Science, 2023</li>
                    <li>"Optimizing Large-Scale Recommendation Systems" - International Conference on Machine Learning, 2022</li>
                    <li>"Ethical Considerations in AI-Driven Decision Making" - AI Ethics Symposium, 2021</li>
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
