<style>
    :root {
        --bg-primary: #1e1e2a;        /* Dark background */
        --bg-secondary: #2c2c2c;      /* Slightly lighter background */
        --accent-primary: #0047AB;    /* Cobalt Blue - main accent */
        --accent-secondary: #4682B4;  /* Steel Blue - secondary accent */
        --text-primary: #e0e0e0;      /* Light text */
        --text-secondary: #829ab1;    /* Muted blue text */
        --border-color: #486581;      /* Dark blue border */
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--bg-primary);
        color: var(--text-primary);
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
        color: var(--accent-secondary);
        margin-top: 30px;
    }

    h2 { 
        border-bottom: 2px solid var(--border-color);
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--accent-secondary);
    }

    .section {
        background-color: var(--bg-secondary);
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 1px solid var(--border-color);
    }

    .skill-tag {
        background-color: rgba(70, 130, 180, 0.1);
        border: 1px solid var(--accent-secondary);
        border-radius: 15px;
        padding: 5px 15px;
        font-size: 0.9em;
        transition: all 0.3s ease;
    }

    .skill-tag:hover {
        background-color: var(--accent-primary);
        color: var(--text-primary);
    }

    li::before {
        color: var(--accent-secondary);
    }

    .publication {
        border-left: 3px solid var(--accent-primary);
        background-color: rgba(70, 130, 180, 0.1);
    }
</style>

# Data Scientist

#### Technical Skills: Python, SQL, AWS, Snowflake, MATLAB

## Education
- Ph.D., Physics | The University of Texas at Dallas (_May 2022_)								       		
- M.S., Physics	| The University of Texas at Dallas (_December 2019_)	 			        		
- B.S., Physics | The University of Texas at Dallas (_May 2017_)

## Work Experience
**Data Scientist @ Toyota Financial Services (_June 2022 - Present_)**
- Uncovered and corrected missing step in production data pipeline which impacted over 70% of active accounts
- Redeveloped loan originations model which resulted in 50% improvement in model performance and saving 1 million dollars in potential losses

**Data Science Consultant @ Shawhin Talebi Ventures LLC (_December 2020 - Present_)**
- Conducted data collection, processing, and analysis for novel study evaluating the impact of over 300 biometrics variables on human performance in hyper-realistic, live-fire training scenarios
- Applied unsupervised deep learning approaches to longitudinal ICU data to discover novel sepsis sub-phenotypes

## Projects
### Data-Driven EEG Band Discovery with Decision Trees
[Publication](https://www.mdpi.com/1424-8220/22/8/3048)

Developed objective strategy for discovering optimal EEG bands based on signal power spectra using **Python**. This data-driven approach led to better characterization of the underlying power spectrum by identifying bands that outperformed the more commonly used band boundaries by a factor of two. The proposed method provides a fully automated and flexible approach to capturing key signal components and possibly discovering new indices of brain activity.

![EEG Band Discovery](/assets/img/eeg_band_discovery.jpeg)

### Decoding Physical and Cognitive Impacts of Particulate Matter Concentrations at Ultra-Fine Scales
[Publication](https://www.mdpi.com/1424-8220/22/11/4240)

Used **Matlab** to train over 100 machine learning models which estimated particulate matter concentrations based on a suite of over 300 biometric variables. We found biometric variables can be used to accurately estimate particulate matter concentrations at ultra-fine spatial scales with high fidelity (r2 = 0.91) and that smaller particles are better estimated than larger ones. Inferring environmental conditions solely from biometric measurements allows us to disentangle key interactions between the environment and the body.

![Bike Study](/assets/img/bike_study.jpeg)

## Talks & Lectures
- Causality: The new science of an old question - GSP Seminar, Fall 2021
- Guest Lecture: Dimensionality Reduction - Big Data and Machine Learning for Scientific Discovery (PHYS 5336), Spring 2021
- Guest Lecture: Fourier and Wavelet Transforms - Scientific Computing (PHYS 5315), Fall 2020
- A Brief Introduction to Optimization - GSP Seminar, Fall 2019
- Weeks of Welcome Poster Competition - UTD, Fall 2019
- A Brief Introduction to Networks - GSP Seminar, Spring 2019

- [Data Science YouTube](https://www.youtube.com/channel/UCa9gErQ9AE5jT2DZLjXBIdA)

## Publications
1. Talebi S., Lary D.J., Wijeratne L. OH., and Lary, T. Modeling Autonomic Pupillary Responses from External Stimuli Using Machine Learning (2019). DOI: 10.26717/BJSTR.2019.20.003446
2. Wijeratne, L.O.; Kiv, D.R.; Aker, A.R.; Talebi, S.; Lary, D.J. Using Machine Learning for the Calibration of Airborne Particulate Sensors. Sensors 2020, 20, 99.
3. Lary, D.J.; Schaefer, D.; Waczak, J.; Aker, A.; Barbosa, A.; Wijeratne, L.O.H.; Talebi, S.; Fernando, B.; Sadler, J.; Lary, T.; Lary, M.D. Autonomous Learning of New Environments with a Robotic Team Employing Hyper-Spectral Remote Sensing, Comprehensive In-Situ Sensing and Machine Learning. Sensors 2021, 21, 2240. https://doi.org/10.3390/s21062240
4. Zhang, Y.; Wijeratne, L.O.H.; Talebi, S.; Lary, D.J. Machine Learning for Light Sensor Calibration. Sensors 2021, 21, 6259. https://doi.org/10.3390/s21186259
5. Talebi, S.; Waczak, J.; Fernando, B.; Sridhar, A.; Lary, D.J. Data-Driven EEG Band Discovery with Decision Trees. Preprints 2022, 2022030145 (doi: 10.20944/preprints202203.0145.v1).
6. Fernando, B.A.; Sridhar, A.; Talebi, S.; Waczak, J.; Lary, D.J. Unsupervised Blink Detection Using Eye Aspect Ratio Values. Preprints 2022, 2022030200 (doi: 10.20944/preprints202203.0200.v1).
7. Talebi, S. et al. Decoding Physical and Cognitive Impacts of PM Concentrations at Ultra-fine Scales, 29 March 2022, PREPRINT (Version 1) available at Research Square [https://doi.org/10.21203/rs.3.rs-1499191/v1]
8. Lary, D.J. et al. (2022). Machine Learning, Big Data, and Spatial Tools: A Combination to Reveal Complex Facts That Impact Environmental Health. In: Faruque, F.S. (eds) Geospatial Technology for Human Well-Being and Health. Springer, Cham. https://doi.org/10.1007/978-3-030-71377-5_12
9. Wijerante, L.O.H. et al. (2022). Advancement in Airborne Particulate Estimation Using Machine Learning. In: Faruque, F.S. (eds) Geospatial Technology for Human Well-Being and Health. Springer, Cham. https://doi.org/10.1007/978-3-030-71377-5_13

- [Data Science Blog](https://medium.com/@shawhin)
