import React from 'react';
import style from './resume.module.css';

const ResumePage: React.FC = () => {
  return (
    <div className={style.PDFContainer}>
      <h1 className={style.pageTitle}>Resume</h1>
      <a href="/resume.pdf" download className={style.download}>
        Click to Download
      </a>
      <iframe
        src="/resume.pdf#zoom=100"
        className={style.embeddedPDF}
        title="Embedded Resume"
      ></iframe>
    </div>
  );
};

export default ResumePage;
