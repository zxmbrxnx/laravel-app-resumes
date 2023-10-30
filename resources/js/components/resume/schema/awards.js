export default {
  fields: [
    //Titulo
    {
      type: 'input',
      inputType: 'text',
      label: 'Reconocimiento',
      placeholder: 'Titulo...',
      model: 'title',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Awarder
    {
      type: 'input',
      inputType: 'text',
      label: 'Organizacion',
      placeholder: '...',
      model: 'awarder',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Fecha de inicio
    {
      type: 'input',
      inputType: 'date',
      format: 'YYYY-MM-DD HH:mm:ss',
      label: 'Fecha de inicio',
      model: 'date',
      validator: 'date',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Url
    {
      type: 'textArea',
      inputType: 'text',
      label: 'Sumary',
      placeholder: '...',
      model: 'summary',
      styleClasses: ['col-md-12', 'p-0', 'pr-md-1'],
    },
  ],
};

//  "awards": [{
//    "title": "Award",
//    "date": "2014-11-01",
//    "awarder": "Company",
//    "summary": "There is no spoon."
//  }],
