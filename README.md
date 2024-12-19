<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seyed Ehsan Hadi, PhD</title>
  <link rel="stylesheet" href="style.css">
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

      <nav class="project-nav"> <button class="tablinks active" onclick="openProject(event, 'Project1')">Project 1</button>
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

      <section class="project-content" id="Project2">
        </section>
    </section>
  </main>

  <footer>
    <p>Feel free to contact me if you have any questions or potential collaboration opportunities!</p>
  </footer>

  <script src="script.js"></script>

</body>
</html>
