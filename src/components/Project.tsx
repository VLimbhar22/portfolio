import React from "react";
import mock01 from '../assets/images/Img1.png';
import mock02 from '../assets/images/Img2.png';
import mock03 from '../assets/images/Img3.png';
import mock04 from '../assets/images/Img4.png';
import mock05 from '../assets/images/Img5.png';
import mock06 from '../assets/images/Img6.png';
import mock07 from '../assets/images/Img7.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/VLimbhar22/TeamOrion" target="_blank" rel="noopener noreferrer">
                    <img src={mock01} className="zoom" alt="project preview" width="100%" />
                    <h2>LLM for Knowledge Graph Extraction and Complex Reasoning</h2>
                    <p>Led Agile project as Scrum Master for 5 sprints; developed AI pipeline to extract biomedical knowledge graphs using LLMs and Neo4j. Built ETL using Python, automated workflows with Airflow, and deployed a Streamlit UI for real-time querying.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://public.tableau.com/views/FlightsDashboard_17217786143080/Dashboard1?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">
                    <img src={mock02} className="zoom" alt="project preview" width="100%" />
                    <h2>Flights Cancellation/Delays Survey Dashboard</h2>
                    <p>Analyzed 5M+ U.S. airline flight records using Tableau. Built interactive dashboards with bar charts, heatmaps, and KPIs to identify delay trends and improve operational efficiency.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/VLimbhar22/Shoe-set-classification-and-generation-Zappos50k" target="_blank" rel="noopener noreferrer">
                    <img src={mock03} className="zoom" alt="project preview" width="100%" />
                    <h2>Shoe Set Classification and Generation – Zappos50K</h2>
                    <p>Classified 50K+ shoe images using CNNs in TensorFlow. Achieved 88% accuracy; generated realistic images via GANs; applied transfer learning with ResNet50/VGG16 to reduce training time by 40%.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/VLimbhar22/Twitter-Sentiment-Analysis-on-Major-U.S.-Airlines" target="_blank" rel="noopener noreferrer">
                    <img src={mock04} className="zoom" alt="project preview" width="100%" />
                    <h2>Twitter Sentiment Analysis on U.S. Airlines</h2>
                    <p>Used Databricks & PySpark to analyze 15K+ tweets. Built ML models (LogReg, RF) to predict sentiment with 89% accuracy. Identified top issues via visualizations to guide service improvements.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/VLimbhar22/Web-Scraping-and-Sentiment-Analysis-on-BBC-Sports" target="_blank" rel="noopener noreferrer">
                    <img src={mock05} className="zoom" alt="project preview" width="100%" />
                    <h2>Web Scraping and Sentiment Analysis on BBC Sports</h2>
                    <p>Scraped 5K+ BBC Sports articles using BeautifulSoup. Preprocessed text, classified sentiment (85% accuracy), and visualized trends using Seaborn. Built chatbot to summarize article sentiment.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/VLimbhar22/Credit_Fraud" target="_blank" rel="noopener noreferrer">
                    <img src={mock06} className="zoom" alt="project preview" width="100%" />
                    <h2>Credit Card Fraud Detection</h2>
                    <p>Processed 284K+ transactions in R; applied sampling techniques and built models (XGBoost, RF) to detect fraud with 93% accuracy. Used Excel and R for preprocessing and modeling.</p>
                </a>
            </div>
            <div className="project">
                <a href="https://github.com/VLimbhar22/Gun-Violence-in-United-States--2013-18-" target="_blank" rel="noopener noreferrer">
                    <img src={mock07} className="zoom" alt="project preview" width="100%" />
                    <h2>Gun Violence Analysis in the U.S.</h2>
                    <p>Analyzed 250K+ incidents using Python, Power BI, and OpenRefine. Mapped hotspots, trends, and drivers using interactive dashboards and EDA techniques to support policy recommendations.</p>
                </a>
            </div>
        </div>
    </div>
    );
}

export default Project;