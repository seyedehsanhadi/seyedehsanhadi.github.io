<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            border-radius: 5px 5px 0 0;
        }

        .tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 16px;
            border-right: 1px solid #ccc;
        }

        .tab button:last-child {
            border-right: none;
        }

        .tab button:hover {
            background-color: #ddd;
        }

        .tab button.active {
            background-color: #ccc;
        }

        .tabcontent {
            display: none;
            padding: 20px;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 5px 5px;
            background-color: #fff;
        }

        .tabcontent h3 {
            margin-top: 0;
        }

        .tabcontent ul {
            list-style-type: disc;
            padding-left: 20px;
        }
    </style>
</head>
<body>

<div class="tab">
  <button class="tablinks" onclick="openProject(event, 'Project1')" id="defaultOpen">Project 1</button>
  <button class="tablinks" onclick="openProject(event, 'Project2')">Project 2</button>
  <button class="tablinks" onclick="openProject(event, 'Project3')">Project 3</button>
</div>

<div id="Project1" class="tabcontent">
  <h3>Project 1: Advanced Fiber-Based Materials</h3>
  <p>Leading research on the production of advanced fiber-based materials, focusing on sheet paper and foam applications.</p>
  <ul>
    <li>Developing innovative methodologies for optimizing fiber processing and enhancing material properties.</li>
    <li>Collaborating with cross-functional teams to drive projects from concept to implementation, ensuring alignment with industry standards.</li>
  </ul>
</div>

<div id="Project2" class="tabcontent">
  <h3>Project 2: Nanocomposite Solutions</h3>
  <p>Developed high-performance nanocomposite solutions for industrial applications.</p>
  <ul>
    <li>Led 6+ projects in experimental design and execution, resulting in multiple publications.</li>
    <li>Mentored students at various levels, fostering the next generation of scientists.</li>
    <li>Optimized processes to achieve 95% bulk magnetite performance.</li>
  </ul>
</div>

<div id="Project3" class="tabcontent">
  <h3>Project 3: Hybrid Core-Shell Nanoparticles</h3>
  <p>One-Pot Synthesis of Hybrid Core-Shell Nanoparticles for Antibacterial Photodynamic Therapy</p>
  <ul>
    <li>Developed a one-pot synthesis method to create hybrid core-shell nanoparticles.</li>
    <li>Investigated the antibacterial properties of synthesized nanoparticles through photodynamic therapy.</li>
    <li>Published results in high-impact peer-reviewed journals.</li>
  </ul>
</div>

<script>
function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

</body>
</html>
