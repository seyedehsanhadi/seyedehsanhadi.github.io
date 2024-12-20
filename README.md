<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #1E3A8A;
            --secondary-color: #333333;
            --accent-color: #C7AF6B;
            --bg-color: #F7F7F7;
            --text-color: #333333;
            --section-bg: #FFFFFF;
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
            color: var(--primary-color);
            margin-top: 30px;
            font-weight: 700;
        }

        h1 { 
            font-size: clamp(2.5rem, 5vw, 4rem);
            text-align: center;
        }

        h2 { 
            font-size: 2em;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        a::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: var(--accent-color);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        a:hover::after {
            transform: scaleX(1);
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
            color: var(--bg-color);
            border-radius: 20px;
            padding: 8px 20px;
            font-size: 0.9em;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background-color: var(--accent-color);
            color: var(--secondary-color);
            transform: scale(1.05);
        }

        @media (prefers-reduced-motion: no-preference) {
            .section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }

            .section.visible {
                opacity: 1;
                transform: translateY(0);
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

        <!-- Rest of the content follows the same structure -->
    </div>
    <script>
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>
