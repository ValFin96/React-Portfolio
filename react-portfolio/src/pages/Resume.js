import React from 'react';
import pdfFile from '../assets/resume.pdf';

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
        <div>
            <p>Download My Resume</p>
            <button onClick={handleDownload}>
                Download PDF
            </button>
        </div>
    )
}

export default Resume
