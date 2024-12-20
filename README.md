<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Scientist Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #bb86fc;
            --secondary-color: #03dac6;
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --section-bg: #1e1e1e;
        }

        @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }

        @keyframes rotate {
            to {
                --angle: 360deg;
            }
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

        h1, h2, h3, h4 {
            color: var(--primary-color);
            margin-top: 30px;
            font-weight: 700;
        }

        h1 { 
            font-size: clamp(2.5rem, 5vw, 4rem);
            text-align: center;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: hue-rotate 10s infinite linear;
        }

        @keyframes hue-rotate {
            from { filter: hue-rotate(0deg); }
            to { filter: hue-rotate(360deg); }
        }

        h2 { 
            font-size: 2em;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
        }

        a {
            color: var(--secondary-color);
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
            background-color: var(--secondary-color);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        a:hover::after {
            transform: scaleX(1);
        }

        .section {
            background-color: var(--section-bg);
            border-radius: 16px;
            padding: 30px;
            margin: 40px 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .skill-tag {
            background-color: rgba(187, 134, 252, 0.1);
            border: 1px solid var(--primary-color);
            border-radius: 20px;
            padding: 8px 20px;
            font-size: 0.9em;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background-color: var(--primary-color);
            color: var(--bg-color);
            transform: scale(1.05);
        }

        @media (prefers-reduced-motion: no-preference) {
            .section {
                position: relative;
            }

            .section::before {
                content: '';
                position: absolute;
                inset: -2px;
                z-index: -1;
                background: conic-gradient(from var(--angle), var(--primary-color), var(--secondary-color), var(--primary-color));
                border-radius: 18px;
                animation: rotate 20s linear infinite;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .section:hover::before {
                opacity: 1;
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
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(section);
        });
    </script>
</body>
</html>
