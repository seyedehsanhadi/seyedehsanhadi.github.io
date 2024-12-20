<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Data Scientist Portfolio</title> <style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
 
    :root {
        --primary: #6200ee;
        --secondary: #03dac6;
        --background: #121212;
        --surface: #1e1e1e;
        --on-background: #e0e0e0;
        --on-surface: #ffffff;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--background);
        color: var(--on-background);
        line-height: 1.6;
        overflow-x: hidden;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    h1, h2, h3, h4 {
        color: var(--primary);
        margin-top: 30px;
        font-weight: 600;
    }

    h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
    h2 { 
        font-size: clamp(2rem, 4vw, 3rem);
        border-bottom: 2px solid var(--primary);
        padding-bottom: 10px;
    }
    h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); }
    h4 { font-size: clamp(1.2rem, 2vw, 2rem); }

    a {
        color: var(--secondary);
         -decoration: none;
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
        background-color: var(--secondary);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .section {
        background-color: var(--surface);
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

    ul {
        list-style-type: none;
    }

    li {
        margin: 15px 0;
        padding-left: 25px;
        position: relative;
    }

    li::before {
        content: "▹";
        color: var(--secondary);
        position: absolute;
        left: 0;
    }

    img {
        max-width: 100%;
        border-radius: 16px;
        margin: 30px 0;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.02);
    }

    .publication {
        padding: 20px;
        margin: 20px 0;
        border-left: 3px solid var(--secondary);
        background-color: rgba(3, 218, 198, 0.05);
        border-radius: 0 16px 16px 0;
        transition: background-color 0.3s ease;
    }

    .publication:hover {
        background-color: rgba(3, 218, 198, 0.1);
    }

    em {
        color: var(--primary);
        font-style: normal;
    }

    strong {
        color: var(--secondary);
        font-weight: 600;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .skill-tag {
        background-color: rgba(98, 0, 238, 0.1);
        border: 1px solid var(--primary);
        border-radius: 20px;
        padding: 8px 20px;
        font-size: 0.9em;
        transition: all 0.3s ease;
    }

    .skill-tag:hover {
        background-color: var(--primary);
        color: var(--on-surface);
        transform: translateY(-2px);
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            transition: none !important;
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --background: #ffffff;
            --surface: #f5f5f5;
            --on-background: #121212;
            --on-surface: #1e1e1e;
        }
    }

    @media screen and (max-width: 768px) {
        .container {
            padding: 20px;
        }
        
        .section {
            padding: 20px;
        }
    }
</style>
</head> <body> <div class="container"> <h1>Data Scientist</h1>
 
    <div class="section">
        <h4>Technical Skills</h4>
        <div class="skills">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Snowflake</span>
            <span class="skill-tag">MATLAB</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">PyTorch</span>
            <span class="skill-tag">Scikit-learn</span>
            <span class="skill-tag">Pandas</span>
            <span class="skill-tag">NumPy</span>
        </div>
    </div>

    <!-- Rest of the content follows the same structure -->
</div>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(section);
        });
    });
</script>
</body> </html>
