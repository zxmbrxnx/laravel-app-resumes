export default {
  fields: [
    //Nombre empresa
    {
      type: 'input',
      inputType: 'text',
      label: 'Nombre de la empresa',
      placeholder: 'Nombre...',
      model: 'company',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Cargo
    {
      type: 'input',
      inputType: 'text',
      label: 'Cargo',
      placeholder: 'Desarrollador backend...',
      model: 'position',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Url
    {
      type: 'input',
      inputType: 'text',
      label: 'Sitio web',
      placeholder: 'https://nexura.com',
      model: 'website',
      validator: 'url',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Fecha de inicio
    {
      type: 'input',
      inputType: 'date',
      format: 'YYYY-MM-DD HH:mm:ss',
      label: 'Fecha de inicio',
      model: 'startDate',
      validator: 'date',
      styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
    },
    //Fecha fin
    {
      type: 'input',
      inputType: 'date',
      label: 'Fecha fin',
      format: 'YYYY-MM-DD HH:mm:ss',
      model: 'endDate',
      validator: 'date',
      styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
    },
    //summary
    {
      type: 'textArea',
      inputType: 'text',
      label: 'Funciones realizadas',
      placeholder: 'Desarrollo de aplicaciones web...',
      model: 'summary',
      styleClasses: ['col-md-12', 'p-0', 'pr-md-1'],
    },
  ],
};

//  "work": [{
//    "name": "Company",
//    "position": "President",
//    "url": "https://company.com",
//    "startDate": "2013-01-01",
//    "endDate": "2014-01-01",
//    "summary": "Description…",
//    "highlights": [
//      "Started the company"
//    ]
//  }],
