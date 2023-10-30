export default {
  fields: [
    //Adress
    {
      type: 'input',
      inputType: 'text',
      label: 'Nombre del sitio',
      placeholder: 'Twiter, github...',
      model: 'network',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Username
    {
      type: 'input',
      inputType: 'text',
      label: 'Usuario',
      placeholder: 'Jhon doe',
      model: 'username',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
    //Url
    {
      type: 'input',
      inputType: 'text',
      label: 'Url',
      placeholder: 'https://github.com',
      model: 'url',
      styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
    },
  ],
};
