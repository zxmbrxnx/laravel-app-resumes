export default {
    fields: [
      //Titulo
      {
        type: 'input',
        inputType: 'text',
        label: 'Titulo',
        placeholder: 'Titulo...',
        model: 'level',
        styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
      },
      //Awarder
      {
        type: 'input',
        inputType: 'text',
        label: 'Nivel',
        placeholder: '...',
        model: 'name',
        styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
      },
    ],
  };

//  "skills": [{
//    "name": "Web Development",
//    "level": "Master",
//    "keywords": [
//      "HTML",
//      "CSS",
//      "JavaScript"
//    ]
//  }],
