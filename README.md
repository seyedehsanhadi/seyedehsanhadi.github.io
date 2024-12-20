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

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            width: 100%;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
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
            margin-top: 40px;
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
            margin: 20px 0;
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
            justify-content: center;
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

        @media (max-width: 768px) {
            .container {
                padding: 20px 10px;
            }

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.8em;
            }

            .skill-tag {
                font-size: 0.8em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Data Scientist</h1>
        </div>

        <div class="section">
            <h2>Technical Skills</h2>
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
