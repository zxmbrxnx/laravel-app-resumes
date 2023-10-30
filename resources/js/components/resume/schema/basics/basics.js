export default {
  groups: [
    {
      legend: 'Datos basicos',
      fields: [
        //Nombres
        {
          type: 'input',
          inputType: 'text',
          label: 'Nombres',
          placeholder: 'Nombres...',
          model: 'name',
          required: true,
          styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
        },
        //Apellidos
        {
          type: 'input',
          inputType: 'text',
          label: 'Apeliidos',
          placeholder: 'Apellidos...',
          model: 'lastname',
          required: true,
          styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
        },
        //Email
        {
          type: 'input',
          inputType: 'text',
          label: 'Email',
          placeholder: 'yourname@email.com',
          validator: 'email',
          model: 'email',
          required: true,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        //Phone
        {
          type: 'input',
          inputType: 'tel',
          label: 'Numero de telefono',
          placeholder: '31684452...',
          model: 'phone',
          required: true,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        //Label
        {
          type: 'input',
          inputType: 'text',
          label: 'Cargo',
          placeholder: 'Cargo...',
          model: 'label',
          required: true,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        //site
        {
          type: 'input',
          inputType: 'text',
          label: 'Sitio web',
          placeholder: 'https://www.yoursite.com',
          validator: 'url',
          model: 'website',
          styleClasses: ['col-md-12', 'p-0', 'pr-md-1'],
        },
        //summary
        {
          type: 'textArea',
          inputType: 'text',
          label: 'Resumen del perfil',
          placeholder: 'Tecnologo en analisis y desarrollo...',
          model: 'summary',
          styleClasses: ['col-md-12', 'p-0', 'pr-md-1'],
        },
      ],
    },
  ],
};
