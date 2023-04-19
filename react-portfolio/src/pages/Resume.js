import React from 'react';
import pdfFile from '../assets/resume.pdf';
import '../styles/Resume.css';

function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = './asssets/resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className = "container">
            <p>Download My Resume Below:</p>
            <button onClick={handleDownload}>
                Download PDF
            </button>
        </div>
    )
}

export default Resume
