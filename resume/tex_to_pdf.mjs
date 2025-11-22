
import selflatex from 'node-latex-pdf';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

console.log("Generating Resume PDF...");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mainPath = dirname(__dirname);
// const mainPath = dirname(__dirname);


selflatex(mainPath + '/resume/resume.tex', mainPath + '/public/resume.pdf', (err,msg) => {
    if(err)
      console.log(`Error, ${msg}`);
    else
      console.log(`Success! ${msg}`);
});


// To run this script, ensure you have the necessary LaTeX packages installed on your system.
// sudo apt-get update
// sudo apt-get install -y texlive-latex-base texlive-latex-recommended texlive-fonts-recommended

// Or use texlive-full for a complete installation
// sudo apt-get install -y texlive-full