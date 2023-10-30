export default {
  groups: [
    {
      legend: 'Ubicacion',
      fields: [
        //Adress
        {
          type: 'input',
          inputType: 'text',
          label: 'Direccion',
          placeholder: 'Escriba su direccion...',
          model: 'address',
          required: true,
          styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
        },
        //Codigo postal
        {
          type: 'input',
          inputType: 'text',
          label: 'Codigo postal',
          placeholder: '960001',
          model: 'postalCode',
          required: false,
          styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
        },
        //Departamento
        {
          type: 'input',
          inputType: 'text',
          label: 'Departamento',
          placeholder: 'Valle del cauca',
          model: 'region',
          required: false,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        //Ciudad
        {
          type: 'input',
          inputType: 'text',
          label: 'Ciudad',
          placeholder: 'Pradera',
          model: 'city',
          required: false,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        //Pais
        {
          type: 'input',
          inputType: 'text',
          label: 'Pais',
          placeholder: 'Colombia',
          model: 'countryCode',
          required: false,
          styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
      ],
    },
  ],
};
