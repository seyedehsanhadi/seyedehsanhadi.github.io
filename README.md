<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <style>
        :root {
            --bg-primary: #1a1b26;
            --bg-secondary: #24283b;
            --bg-tertiary: #2f334d;
            --accent-primary: #7aa2f7;
            --accent-secondary: #4682B4;
            --text-primary: #c0caf5;
            --text-secondary: #9aa5ce;
            --text-muted: #565f89;
            --border-color: #3b4261;
            --hover-color: #3d59a1;
        }

        body {
            font-family: 'Segoe UI', 'Roboto', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Headers */
        h1, h2, h3, h4 {
            color: var(--accent-primary);
            margin-top: 30px;
        }

        h1 { 
            font-size: 2.5em; 
            text-shadow: 0 0 10px rgba(122, 162, 247, 0.3);
        }

        h2 { 
            font-size: 2em;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 10px;
            margin-top: 40px;
        }

        h3 { font-size: 1.5em; }
        h4 { font-size: 1.2em; }

        /* Sections */
        .section {
            background-color: var(--bg-secondary);
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border-color);
            transition: transform 0.2s ease;
        }

        .section:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        /* Education & Experience */
        .education-item, .experience-item {
            background-color: var(--bg-tertiary);
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            border-left: 4px solid var(--accent-primary);
        }

        /* Skills */
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 15px 0;
        }

        .skill-tag {
            background-color: var(--bg-tertiary);
            color: var(--accent-primary);
            border: 1px solid var(--accent-primary);
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 0.9em;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background-color: var(--accent-primary);
            color: var(--bg-primary);
            transform: translateY(-2px);
        }

        /* Links */
        a {
            color: var(--accent-primary);
            text-decoration: none;
            transition: all 0.3s ease;
        }

        a:hover {
            color: var(--accent-secondary);
            text-decoration: underline;
        }

        /* Lists */
        ul {
            list-style-type: none;
            padding-left: 0;
        }

        li {
            margin: 12px 0;
            padding-left: 20px;
            position: relative;
        }

        li::before {
            content: "▸";
            color: var(--accent-primary);
            position: absolute;
            left: 0;
        }

        /* Publications */
        .publication {
            background-color: var(--bg-tertiary);
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            border-left: 4px solid var(--accent-secondary);
        }

        /* Projects */
        .project {
            background-color: var(--bg-tertiary);
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .project h3 {
            color: var(--accent-secondary);
            margin-top: 0;
        }

        /* Images */
        img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        /* Emphasis */
        em {
            color: var(--accent-secondary);
            font-style: normal;
        }

        strong {
            color: var(--accent-primary);
            font-weight: 600;
        }

        /* Dates and Timeline */
        .date {
            color: var(--text-secondary);
            font-size: 0.9em;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .section {
                padding: 15px;
            }

            .skills {
                gap: 8px;
            }

            .skill-tag {
                padding: 6px 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data Scientist</h1>

        <div class="section">
            <h4>Technical Skills</h4>
            <div class="skills">
                <span class="skill-tag">Python</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Snowflake</span>
                <span class="skill-tag">MATLAB</span>
            </div>
        </div>

        <div class="section">
            <h2>Education</h2>
            <div class="education-item">
                <strong>Ph.D., Physics</strong>
                <div class="date">The University of Texas at Dallas (May 2022)</div>
            </div>
            <!-- Add other education items similarly -->
        </div>

        <div class="section">
            <h2>Work Experience</h2>
            <div class="experience-item">
                <strong>Data Scientist @ Toyota Financial Services</strong>
                <div class="date">June 2022 - Present</div>
                <ul>
                    <li>Uncovered and corrected missing step in production data pipeline which impacted over 70% of active accounts</li>
                    <li>Redeveloped loan originations model which resulted in 50% improvement in model performance</li>
                </ul>
            </div>
            <!-- Add other experience items similarly -->
        </div>

        <div class="section">
            <h2>Projects</h2>
            <div class="project">
                <h3>Data-Driven EEG Band Discovery with Decision Trees</h3>
                <a href="#">Publication</a>
                <p>Developed objective strategy for discovering optimal EEG bands based on signal power spectra using Python...</p>
                <img src="/assets/img/eeg_band_discovery.jpeg" alt="EEG Band Discovery">
            </div>
            <!-- Add other projects similarly -->
        </div>

        <div class="section">
            <h2>Publications</h2>
            <div class="publication">
                <p>1. Talebi S., Lary D.J., Wijeratne L. OH., and Lary, T. Modeling Autonomic Pupillary Responses from External Stimuli Using Machine Learning (2019).</p>
            </div>
            <!-- Add other publications similarly -->
        </div>
    </div>
</body>
</html>
