<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #121212;
            color: #e0e0e0;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        h1, h2, h3, h4 {
            color: #bb86fc;
            margin-top: 30px;
        }

        h1 { font-size: 2.5em; }
        h2 { 
            font-size: 2em;
            border-bottom: 2px solid #bb86fc;
            padding-bottom: 10px;
        }
        h3 { font-size: 1.5em; }
        h4 { font-size: 1.2em; }

        a {
            color: #03dac6;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #bb86fc;
            text-decoration: underline;
        }

        .section {
            background-color: #1e1e1e;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        ul {
            list-style-type: none;
            padding-left: 0;
        }

        li {
            margin: 10px 0;
            padding-left: 20px;
            position: relative;
        }

        li::before {
            content: "•";
            color: #03dac6;
            position: absolute;
            left: 0;
        }

        img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .publication {
            padding: 10px;
            margin: 10px 0;
            border-left: 3px solid #03dac6;
            background-color: rgba(3, 218, 198, 0.1);
        }

        em {
            color: #bb86fc;
            font-style: normal;
        }

        strong {
            color: #03dac6;
            font-weight: 600;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            background-color: rgba(187, 134, 252, 0.1);
            border: 1px solid #bb86fc;
            border-radius: 15px;
            padding: 5px 15px;
            font-size: 0.9em;
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

        <!-- Rest of the content follows the same structure -->
    </div>
</body>
</html>
