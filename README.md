!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Seyed Ehsan Hadi CV</title> <style> body { font-family: 'Roboto', Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f4f8; color: #333; }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    .header {
        display: flex;
        background-color: #2c3e50;
        color: #ecf0f1;
        padding: 30px;
    }

    .header-left {
        width: 30%;
        padding-right: 30px;
    }

    .header-right {
        width: 70%;
    }

    .photo {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #ecf0f1;
    }

    .contact {
        margin-top: 20px;
    }

    .contact-item {
        margin: 10px 0;
        display: flex;
        align-items: center;
    }

    .contact-item i {
        margin-right: 10px;
        color: #3498db;
    }

    .name {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .title {
        font-size: 24px;
        font-style: italic;
        color: #3498db;
        margin-bottom: 20px;
    }

    .summary {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .impact-highlights {
        background-color: #ecf0f1;
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
        color: #3498db;
        position: absolute;
        left: 0;
    }

    .section {
        padding: 30px;
    }

    .section-title {
        font-size: 24px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
    }

    .tab {
        overflow: hidden;
        background-color: #f1f1f1;
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
    }

    .tab button:hover {
        background-color: #ddd;
    }

    .tab button.active {
        background-color: #3498db;
        color: white;
    }

    .tabcontent {
        display: none;
        padding: 20px;
        border: 1px solid #ccc;
        border-top: none;
        border-radius: 0 0 8px 8px;
    }

    .skill-category {
        font-weight: bold;
        color: #2c3e50;
        margin-top: 15px;
    }

    .skill-items {
        margin-left: 20px;
    }
</style>
</head> <body> <div class="container"> <div class="header"> <div class="header-left"> <img src="photo.png" alt="Photo" class="photo"> <div class="contact"> <div class="contact-item"><i class="fas fa-phone"></i> +46</div> <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:s.com">sy..com</a></div> <div class="contact-item"><i class="fas fa-map-marker-alt"></i> 4, 183 59 Stockholm, Sweden</div> <div class="contact-item"><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/seyed-ehsan-hadi">seyed-ehsan-hadi</a></div> <div class="contact-item"><i class="fas fa-globe"></i> <a href="https://scholar.google.com/citations?hl=en&user=aqsQc48AAAAJ">Google Scholar</a></div> <div class="contact-item"><i class="fas fa-check"></i> <span style="color: #2ecc71;">Swedish Resident</span></div> </div> </div> <div class="header-right"> <div class="name">Seyed Ehsan Hadi, PhD</div> <div class="title">Materials Chemist | Project Manager</div> <div class="summary">Multidisciplinary leader with 7+ years in materials science, driving R&D and optimizing processes for innovative materials.</div> <div class="impact-highlights"> <div class="impact-item">Wallenberg Wood Science Center PhD Grant (2019-2023)</div> <div class="impact-item">Stockholm University PhD Grant (2019-2024)</div> <div class="impact-item">UNAM Fellowship and Bilkent University Scholarship (2017-2019)</div> <div class="impact-item">TÜBİTAK Fellowship (2018-2019)</div> <div class="impact-item">Published in peer-reviewed journals, including research on nanocellulose composites and magnetic foams.</div> <div class="impact-item">Led multiple projects and mentored students, contributing to the development of future scientific talent.</div> <div class="impact-item">Developed high-performance nanocomposite solutions for industrial applications.</div> </div> </div> </div>

    <div class="section">
        <div class="section-title">Experience</div>
        <div class="tab">
            <button class="tablinks" onclick="openTab(event, 'Academic')">Academic</button>
            <button class="tablinks" onclick="openTab(event, 'Industry')">Industry</button>
        </div>

        <div id="Academic" class="tabcontent">
            <h3>Academic Experience</h3>
            <p>Content for academic experience...</p>
        </div>

        <div id="Industry" class="tabcontent">
            <h3>Industry Experience</h3>
            <p>Content for industry experience...</p>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Skills</div>
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
</script>
</body> </html>
