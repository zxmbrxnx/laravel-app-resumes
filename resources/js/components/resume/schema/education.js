export default {
    fields: [
      // Institution
      {
        type: 'input',
        inputType: 'text',
        label: 'Institution',
        placeholder: 'Nombre de la universidad',
        model: 'institution',
        styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
      },
      // Area
      {
        type: 'input',
        inputType: 'text',
        label: 'Titulo',
        placeholder: 'Desarrollador web',
        model: 'area',
        styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
      },
      // Study Type
      {
        type: 'input',
        inputType: 'text',
        label: 'Tipo de estudios',
        placeholder: 'Tecnico, tecnologo...',
        model: 'studyType',
        styleClasses: ['col-md-4', 'p-0'],
      },
      // Start Date
      {
        type: 'input',
        inputType: 'date',
        format: 'YYYY-MM-DD HH:mm:ss',
        label: 'Fecha de inicio',
        model: 'startDate',
        styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
      },
      // End Date
      {
        type: 'input',
        inputType: 'date',
        format: 'YYYY-MM-DD HH:mm:ss',
        label: 'Fecha de finalizacion',
        model: 'endDate',
        styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
      },
      // GPA
      {
        type: 'input',
        inputType: 'number',
        label: 'GPA',
        model: 'gpa',
        validor: 'number',
        styleClasses: ['col-md-4', 'p-0'],
      },
    ],
  };
