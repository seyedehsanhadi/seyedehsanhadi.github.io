<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi, PhD</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        header {
            text-align: center;
            margin-bottom: 20px;
        }
        nav {
            display: flex;
            flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
            justify-content: center;
            margin-bottom: 20px;
        }
        .tablinks {
            padding: 10px 15px;
            border: none;
            background-color: #f1f1f1;
            cursor: pointer;
            margin: 5px; /* Add some spacing between buttons */
            border-radius: 5px; /* Rounded corners */
        }
        .tablinks.active {
            background-color: #ddd;
        }
        .tabcontent, .project-content {
            display: none;
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
        }
        .tabcontent.active, .project-content.active {
            display: block;
        }
        .project-nav {
            display: flex;
            margin-bottom: 10px;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
        }
        @media (max-width: 600px) { /* Styles for smaller screens */
            nav {
                flex-direction: column; /* Stack buttons vertically */
                align-items: stretch; /* Make buttons full width */
            }
            .tablinks {
                margin: 5px 0; /* Adjust margin for vertical layout */
            }
        }
    </style>
</head>
<body>

    <header>
        <h1>Seyed Ehsan Hadi, PhD</h1>
        <h2>Materials Chemist | Project Manager</h2>
    </header>

    <nav>
        <button class="tablinks active" onclick="openSection(event, 'AboutMe')">About Me</button>
        <button class="tablinks" onclick="openSection(event, 'ImpactHighlights')">Impact Highlights</button>
        <button class="tablinks" onclick="openSection(event, 'Education')">Education</button>
        <button class="tablinks" onclick="openSection(event, 'ProfessionalExperience')">Professional Experience</button>
        <button class="tablinks" onclick="openSection(event, 'Publications')">Publications</button>
        <button class="tablinks" onclick="openSection(event, 'TechnicalSkills')">Technical Skills</button>
        <button class="tablinks" onclick="openSection(event, 'LanguagesGrantsAwards')">Languages, Grants & Awards</button>
        <button class="tablinks" onclick="openSection(event, 'Projects')">Projects</button>
    </nav>

    <main>
        <section class="tabcontent active" id="AboutMe">
            <h2>About Me</h2>
            <p>Multidisciplinary leader with 7+ years in materials science, driving R&D and optimizing processes for innovative materials.</p>
        </section>

        <section class="tabcontent" id="ImpactHighlights">
            <h2>Impact Highlights</h2>
            <ul>
                <li>Wallenberg Wood Science Center PhD Grant (2019-2023)</li>
                <li>Stockholm University PhD Grant (2019-2024)</li>
                <li>UNAM Fellowship and Bilkent University Scholarship (2017-2019)</li>
                <li>TÜBİTAK Fellowship (2018-2019)</li>
                <li>Published in peer-reviewed journals, including research on nanocellulose composites and magnetic foams.</li>
                <li>Led multiple projects and mentored students, contributing to the development of future scientific talent.</li>
                <li>Developed high-performance nanocomposite solutions for industrial applications.</li>
            </ul>
        </section>

        <section class="tabcontent" id="Projects">
            <h2>Projects</h2>
            <nav class="project-nav">
                <button class="tablinks active" onclick="openProject(event, 'Project1')">Project 1</button>
                <button class="tablinks" onclick="openProject(event, 'Project2')">Project 2</button>
                <button class="tablinks" onclick="openProject(event, 'Project3')">Project 3</button>
            </nav>
            <section class="project-content active" id="Project1">
                <h3>Project 1: Advanced Fiber-Based Materials</h3>
                <p>Leading research on the production of advanced fiber-based materials, focusing on sheet paper and foam applications.</p>
                <ul>
                    <li>Developing innovative methodologies for optimizing fiber processing and enhancing material properties.</li>
                    <li>Collaborating with cross-functional teams to drive projects from concept to implementation, ensuring alignment with industry standards.</li>
                </ul>
            </section>
            <section class="project-content" id="Project2"></section>
            <section class="project-content" id="Project3"></section>

        </section>
    </main>

    <footer>
        <p>Feel free to contact me if you have any questions or potential collaboration opportunities!</p>
    </footer>

    <script>
        function openSection(evt, sectionName) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(sectionName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        function openProject(evt, projectName) {
            let i, projectContent, tablinks;
            projectContent = document.getElementsByClassName("project-content");
            for (i = 0; i < projectContent.length; i++) {
                projectContent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(projectName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
    </script>

</body>
</html>
