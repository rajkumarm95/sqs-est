const json = '[\n' +
      '    {\n' +
      '        "question": "What does HTML stand for?",\n' +
      '        "type": "mcq",\n' +
      '        "complexity": 1,\n' +
      '        "options": [\n' +
      '            { "option": "Hyperlinks and Text Markup Language", "isCorrect": false },\n' +
      '            { "option": "Home Tool Markup Language", "isCorrect": false },\n' +
      '            { "option": "Hypertext Markup Language", "isCorrect": true },\n' +
      '            { "option": "Hyper Text Madeup Language", "isCorrect": false }\n' +
      '        ]\n' +
      '    },\n' +
      '    {\n' +
      '        "question": "What is the correct HTML element for inserting a line break?",\n' +
      '        "type": "mcq",\n' +
      '        "complexity": 1,\n' +
      '        "options": [\n' +
      '            { "option": "<br>", "isCorrect": true },\n' +
      '            { "option": "<lb>", "isCorrect": false },\n' +
      '            { "option": "<break>", "isCorrect": false },\n' +
      '            { "option": "<newline>", "isCorrect": false }\n' +
      '        ]\n' +
      '    },\n' +
      '    {\n' +
      '        "question": "How do you create an ordered list in HTML?",\n' +
      '        "type": "mcq",\n' +
      '        "complexity": 2,\n' +
      '        "options": [\n' +
      '            { "option": "<ol>", "isCorrect": true },\n' +
      '            { "option": "<ul>", "isCorrect": false },\n' +
      '            { "option": "<li>", "isCorrect": false },\n' +
      '            { "option": "<list>", "isCorrect": false }\n' +
      '        ]\n' +
      '    },\n' +
      '    {\n' +
      `        "question": "What is the purpose of the 'alt' attribute in the 'img' tag?",\n` +
      '        "type": "mcq",\n' +
      '        "complexity": 2,\n' +
      '        "options": [\n' +
      '            { "option": "It defines a caption for the image", "isCorrect": false },\n' +
      '            { "option": "It specifies the URL of the image", "isCorrect": false },\n' +
      '            { "option": "It sets the alignment of the image", "isCorrect": false },\n' +
      '            { "option": "It provides alternative text if the image cannot be displayed", "isCorrect": true }\n' +
      '        ]\n' +
      '    },\n' +
      '    {\n' +
      `        "question": "What does the 'doctype' declaration do?",\n` +
      '        "type": "mcq",\n' +
      '        "complexity": 3,\n' +
      '        "options": [\n' +
      '            { "option": "It defines the title of the HTML document", "isCorrect": false },\n' +
      '            { "option": "It specifies the character encoding of the HTML document", "isCorrect": false },\n' +
      '            { "option": "It links the HTML document to an external style sheet", "isCorrect": false },\n' +
      '            { "option": "It defines the document type and version of the HTML document", "isCorrect": true }\n' +
      '        ]\n' +
      '    },\n' +
      '    {\n' +
      `        "question": "Explain the purpose of the 'div' tag in HTML.",\n` +
      '        "type": "long",\n' +
      '        "complexity": 1\n' +
      '    },\n' +
      '    {\n' +
      `        "question": "What is the difference between the 'id' and 'class' attributes in HTML?",\n` +
      '        "type": "long",\n' +
      '        "complexity": 2\n' +
      '    },\n' +
      '    {\n' +
      '        "question": "Describe the process of embedding a video in an HTML document.",\n' +
      '        "type": "long",\n' +
      '        "complexity": 3\n' +
      '    },\n' +
      '    {\n' +
      '        "question": "Write an HTML code snippet to create a table with two rows and three columns.",\n' +
      '        "type": "code",\n' +
      '        "complexity": 1\n' +
      '    },\n' +
      '    {\n' +
      '        "question": "Write an HTML code snippet to create a hyperlink to an external website.",\n' +
      '        "type": "code",\n' +
      '        "complexity": 2\n' +
      '    },\n' +
      '    {\n' +
      `        "question": "Write an HTML code snippet to embed an image on a web page with the 'alt' text as 'Example Image' and the source file as 'image.jpg'.",\n` +
      '        "type": "code",\n' +
      '        "complexity": 3\n' +
      '    }\n' +
      ']'

const questions = JSON.parse(json);

console.log(questions);