// Function to generate markdown for the README.md
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ## Table of Contents
  1. [Description](#description)
  2. [Usage](#usage)
  3. [Installation](#installation)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [Questions](#questions) 
  7. [License](#license)

  ## Description 
          
  ${data.description}
          
  ## Usage 
          
  ${data.usage}
          
  ## Installation 
          
  ${data.install}
          
  ## Contributions
          
  ${data.contribute}

  ## Test

  ${data.test}
          
  ## Questions
          
  For any inquiries, contact me at:
  
  https://github.com/${data.github}
          
  ${data.email}

  ## License 
  ${data.license}
  `;
}

module.exports = generateMarkdown;
