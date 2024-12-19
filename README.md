<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyed Ehsan Hadi CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
            color: #333;
        }

        .header {
            display: flex;
            align-items: flex-start;
        }

        .header-left {
            width: 21%;
            margin-right: 2%;
        }

        .header-right {
            width: 77%;
        }

        .header-left .photo {
            width: 90%;
            height: auto;
            display: block;
            margin: 0 auto;
        }

        .header-left .contact {
            text-align: center;
            margin-top: 10px;
        }

        .header-left .contact .rule {
            border-top: 1px solid #007BFF;
            width: 80%;
            margin: 10px auto;
        }

        .header-left .contact .contact-item {
            margin: 5px 0;
        }

        .header-right .name {
            font-size: 28px;
            font-weight: bold;
            color: #007BFF;
        }

        .header-right .title {
            font-size: 20px;
            font-style: italic;
        }

        .header-right .rule {
            border-top: 1px solid #007BFF;
            margin-top: 10px;
        }

        .header-right .summary {
            margin-top: 15px;
        }

        .impact-highlights {
            margin-top: 20px;
        }

        .impact-highlights .highlight-item {
            margin: 5px 0;
        }

        .section {
            margin-top: 30px;
        }

        .section-title {
            font-size: 24px;
            font-weight: bold;
            color: white;
            background-color: #007BFF;
            padding: 10px;
            border-radius: 5px;
        }

        .section-content {
            margin-top: 15px;
            background-color: #f9f9f9;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .section-content table {
            width: 100%;
            border-collapse: collapse;
        }

        .section-content table tr:not(:last-child) td {
            border-bottom: 1px solid #ddd;
        }

        .section-content table td {
            padding: 10px;
            vertical-align: top;
        }

        .section-content table td:nth-child(1) {
            width: 30%;
        }

        .section-content ul {
            list-style-type: disc;
            padding-left: 20px;
        }

        .section-content li {
            margin: 5px 0;
        }

        .projects-tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 5px 5px 0 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .projects-tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 20px;
            transition: 0.3s;
            font-size: 16px;
            border-right: 1px solid #ccc;
            position: relative;
            z-index: 1;
        }

        .projects-tab button:last-child {
            border-right: none;
        }

        .projects-tab button:hover {
            background-color: #ddd;
        }

        .projects-tab button.active {
            background-color: #007BFF;
            color: white;
            border-bottom: 2px solid #fff;
            z-index: 2;
        }

        .tabcontent {
            display: none;
            padding: 20px;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 5px 5px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: opacity 0.3s ease-in-out;
            opacity: 0;
        }

        .tabcontent.active {
            display: block;
            opacity: 1;
        }

        .tabcontent h3 {
            margin-top: 0;
        }

        .tabcontent ul {
            list-style-type: disc;
            padding-left: 20px;
        }

        .tabcontent p, .tabcontent li {
            color: #333;
        }

        .tabcontent h3 {
            color: #007BFF;
        }

        .skill-category {
            font-weight: bold;
        }

        .skill-items ul {
            list-style-type: disc;
            padding-left: 20px;
        }

        .skill-items li {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<div class="header">
    <div class="header-left">
        <img src="photo.png" alt="Photo" class="photo">
        <div class="contact">
            <div class="rule"></div>
            <div class="contact-item"><i class="fas fa-phone"></i> +46</div>
            <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:s.com">sy..com</a></div>
            <div class="contact-item"><i class="fas fa-map-marker-alt"></i> 4, 183 59 Stockholm, Sweden</div>
            <div class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/seyed-ehsan-hadi">seyed-ehsan-hadi</a></div>
            <div class="contact-item"><i class="fas fa-globe"></i> <a href="https://scholar.google.com/citations?hl=en&user=aqsQc48AAAAJ">Google Scholar</a></div>
            <div class="contact-item"><i class="fas fa-check"></i> <span style="color: green;">Swedish Resident</span></div>
        </div>
    </div>
    <div class="header-right">
        <div class="name">Seyed Ehsan Hadi, PhD</div>
        <div class="title">Materials Chemist | Project Manager</div>
        <div class="rule"></div>
        <div class="summary">Multidisciplinary leader with 7+ years in materials science, driving R&D and optimizing processes for innovative materials.</div>
        <div class="impact-highlights">
            <div class="impact-item">• Wallenberg Wood Science Center PhD Grant (2019-2023)</div>
            <div class="impact-item">• Stockholm University PhD Grant (2019-2024)</div>
            <div class="impact-item">• UNAM Fellowship and Bilkent University Scholarship (2017-2019)</div>
            <div class="impact-item">• TÜBİTAK Fellowship (2018-2019)</div>
            <div class="impact-item">• Published in peer-reviewed journals, including research on nanocellulose composites and magnetic foams.</div>
            <div class="impact-item">• Led multiple projects and mentored students, contributing to the development of future scientific talent.</div>
            <div class="impact-item">• Developed high-performance nanocomposite solutions for industrial applications.</div>
        </div>
    </div>
</div>

<div class="section">
    <div class="section-title">Education</div>
    <div class="section-content">
        <table>
            <tr>
                <td>2019--2024</td>
                <td><strong>PhD in Materials Chemistry</strong>, Stockholm University, Sweden<br>
                    <em>Thesis:</em> Colloidal Processing and Alignment of Wood-Based Dispersions and Hybrid Functional Foams<br>
                    <em>Supervisors:</em> Prof. Lennart Bergström, Prof. Aji Mathew
                </td>
            </tr>
            <tr>
                <td>2017--2019</td>
                <td><strong>M.Sc. in Materials Science and Nanotechnology</strong>, Bilkent University, Turkey<br>
                    <em>Thesis:</em> One-Pot Synthesis of Hybrid Core-Shell Nanoparticles for Antibacterial Photodynamic Therapy<br>
                    <em>Supervisor:</em> Prof. Dönüş Tuncel
                </td>
            </tr>
            <tr>
                <td>2012--2017</td>
                <td><strong>B.Sc. in Chemical Engineering</strong>, University of Tehran, Iran</td>
            </tr>
        </table>
    </div>
</div>

<div class="section">
    <div class="section-title">Professional Experience</div>
    <div class="section-content">
        <table>
            <tr>
                <td>Postdoctoral Research Associate<br>(2024-Ongoing)</td>
                <td><em>KTH Royal Institute of Technology, Sweden</em><br>
                    <ul>
                        <li>Leading research on the production of advanced fiber-based materials, focusing on sheet paper and foam applications.</li>
                        <li>Developing innovative methodologies for optimizing fiber processing and enhancing material properties.</li>
                        <li>Collaborating with cross-functional teams to drive projects from concept to implementation, ensuring alignment with industry standards.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Senior Graduate Research Assistant<br>(2019-2024)</td>
                <td><em>Stockholm University, Sweden</em><br>
                    <ul>
                        <li>Led 6+ projects in experimental design and execution, resulting in multiple publications.</li>
                        <li>Mentored students at various levels, fostering the next generation of scientists.</li>
                        <li>Developed high-performance nanocomposites for targeted applications.</li>
                        <li>Optimized processes to achieve 95% bulk magnetite performance.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Junior Graduate Research Assistant<br>(2017-2019)</td>
                <td><em>Bilkent University, Turkey</em><br>
                    <ul>
                        <li>Conducted laboratory work and data analysis, contributing to publications.</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="section">
    <div class="section-title">Selected Publications</div>
    <div class="section-content">
        <ol>
            <li><strong>Hadi, S. E.</strong>, Möller, E., et al. (2024). Hierarchical Incorporation of rGO into Anisotropic CNF Foams. <em>ACS Appl. Mater. Interfaces</em>, <strong>16</strong>, 45337.</li>
            <li>Di, A., Schiele, C., <strong>Hadi, S. E.</strong>, et al. (2023). Moisture-Resilient Aramid/Cellulose Nanofiber Foams. <em>Adv. Mater.</em>, <strong>35</strong>, 2305195.</li>
            <li><strong>Hadi, S. E.</strong>, Yeprem, H. A., et al. (2023). Magnetic hybrid foams from Fe3O4@TA and TOCN. <em>RSC Adv.</em>, <strong>13</strong>, 13919.</li>
            <li>Moreno, A., Liu, J., <strong>Hadi, S. E.</strong>, et al. (2021). Unravelling the hydration barrier of lignin oleate nanoparticles. <em>Angew. Chem. Int. Ed.</em>, <strong>60</strong>, 20897.</li>
            <li>Özkan, M., <strong>Hadi, S. E.</strong>, et al. (2020). CB[7]-capped hybrid AuNPs for PDT/PTT therapy. <em>ACS Appl. Polym. Mater.</em>, <strong>2</strong>, 3840.</li>
            <li>Kumar, Y., <strong>Hadi, S. E.</strong>, et al. (2019). CB[7]-Porphyrin Photocatalyst for H2 Generation. <em>ChemCatChem</em>, <strong>11</strong>, 2994.</li>
        </ol>
    </div>
</div>

<div class="section">
    <div class="section-title">Projects</div>
    <div class="section-content">
        <div class="projects-tab">
            <button class="tablinks" onclick="openProject(event, 'Project1')" id="defaultOpen">Project 1</button>
            <button class="tablinks" onclick="openProject(event, 'Project2')">Project 2</button>
            <button class="tablinks" onclick="openProject(event, 'Project3')">Project 3</button>
        </
