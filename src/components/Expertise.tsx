import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Power BI",
    "Tableau",
    "Looker",
    "SQL",
    "Excel",
    "AWS Athena",
    "PostgreSQL",
    "SSRS",
    "Data Modeling"
];

const labelsSecond = [
    "Snowflake",
    "AWS Glue",
    "dbt",
    "Apache Airflow",
    "SSRS",
    "Excel VBA",
    "PySpark",
    "Databricks",
    "PostgreSQL"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analytics & Business Intelligence</h3>
                    <p>I specialize in turning raw data into actionable insights through interactive dashboards and reports. From healthcare to finance, I’ve used tools like Power BI, Looker, and Tableau to uncover key trends and support strategic decisions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>ETL Development & Data Automation</h3>
                    <p>I streamline data pipelines and automate workflows to ensure clean, timely, and scalable data delivery across business functions. From Snowflake schema optimization to end-to-end ETL development, I ensure data readiness for analytics and reporting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>My work in GenAI focuses on building domain-specific solutions using LLMs such as OpenAI and Groq. I’ve engineered pipelines that convert biomedical text into knowledge graphs, and integrated tools like LangChain and Qdrant to enable intelligent, queryable systems for enterprise use cases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;