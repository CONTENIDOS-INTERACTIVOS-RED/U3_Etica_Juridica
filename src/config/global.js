export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'El código disciplinario del abogado',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Código disciplinario del abogado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La falta disciplinaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es una falta disciplinaria?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '¿Cómo funciona el régimen de faltas disciplinarias?',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '¿Por qué la falta disciplinaria es éticamente relevante?',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modalidades de la conducta sancionable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fundamento de la responsabilidad disciplinaria',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Modalidades de la conducta sancionable en el régimen general disciplinario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Modalidades de la conducta sancionable en el código disciplinario del abogado (Ley 1123 del 2007)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Ejemplos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Causales de exclusión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La acción disciplinaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto y naturaleza jurídica de la acción disciplinaria',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características esenciales de la acción disciplinaria',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Principios rectores de la acción disciplinaria',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Sujetos en la acción disciplinaria',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Requisitos y procedencia de la acción disciplinaria',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Oportunidad y límites de la acción disciplinaria',
            hash: 't_5_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.7',
            titulo: 'Dimensión ética de la acción disciplinaria',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Maldonado Sierra, G. A. (2020) El derecho disciplinario ético-profesional y su lugar en el ordenamiento jurídico colombiano. DIXI, 32, 1–44.',
      link: 'https://revistas.ucc.edu.co/index.php/di/article/view/3826/3104',
    },
    {
      referencia:
        'Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962',
    },
    {
      referencia:
        'Cruz, M. (2015). La ética en el ámbito del derecho disciplinario. Universidad Militar Nueva Granada.',
      link:
        'https://repository.umng.edu.co/server/api/core/bitstreams/6ece8eeb-3398-47c5-bd64-de75031e7730/content',
    },
    {
      referencia: 'Corte Constitucional. (s.f.). Sentencia C-181/02.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2002/c-181-02.htm',
    },
    {
      referencia:
        'Ley 1952 de 2019. Por medio de la cual se expide el código general disciplinario se derogan la ley 734 de 2002 y algunas disposiciones de la ley 1474 de 2011, relacionadas con el derecho disciplinario. Enero 28 de 2019.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324',
    },
    {
      referencia:
        'Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962',
    },
    {
      referencia:
        'Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962',
    },
    {
      referencia:
        'Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962',
    },
    {
      referencia:
        'Henao, J. & Rincón, J. (2022). Naturaleza jurídica de los actos disciplinarios y afectación del derecho a la igualdad en la doble instancia. Universidad Libre.',
      link: 'https://repository.unilibre.edu.co/handle/10901/22914?show=full',
    },
  ],
  glosario: [
    {
      termino: 'Acción disciplinaria',
      significado:
        'Facultad del Estado o del organismo competente para iniciar, investigar y sancionar las conductas que constituyen faltas disciplinarias. Su objetivo es garantizar la ética y la legalidad en el ejercicio de funciones públicas o profesionales.',
    },
    {
      termino: 'Causal de exclusión',
      significado:
        'Circunstancia establecida por la Ley que impide atribuir responsabilidad disciplinaria a una persona, ya sea porque no se configura la falta o porque concurre una justificación legal para su conducta.',
    },
    {
      termino: 'Código disciplinario del abogado',
      significado:
        'Conjunto de normas que regulan el comportamiento ético y profesional de los abogados en el ejercicio de sus funciones, estableciendo deberes, prohibiciones, sanciones y procedimientos disciplinarios específicos.',
    },
    {
      termino: 'Conducta sancionable',
      significado:
        'Hecho, acto u omisión que infringe una norma de carácter disciplinario y que, según su modalidad e intensidad, puede dar lugar a una sanción en el marco del derecho disciplinario.',
    },
    {
      termino: 'Derecho disciplinario',
      significado:
        'Rama del derecho público que regula el poder sancionador del Estado frente a las conductas de los servidores públicos o de ciertos profesionales, con el fin de proteger el correcto ejercicio de sus funciones y la moralidad administrativa.',
    },
    {
      termino: 'Derecho público',
      significado:
        'Área del Derecho que rige las relaciones entre el Estado y los particulares, así como entre las entidades públicas, incluyendo ramas como el Derecho constitucional, administrativo, penal y disciplinario.',
    },
    {
      termino: 'Falta disciplinaria',
      significado:
        'Infracción de los deberes funcionales o de las normas ético-profesionales establecidas para servidores públicos o abogados. Puede derivarse de acciones u omisiones dolosas o culposas, y se sanciona en virtud del Derecho disciplinario.',
    },
    {
      termino: 'Proceso disciplinario',
      significado:
        'Procedimiento administrativo que permite investigar, juzgar y sancionar las posibles faltas cometidas por sujetos disciplinables. Garantiza el derecho de defensa, el debido proceso y la valoración integral de los hechos.',
    },
    {
      termino: 'Sanción',
      significado:
        'Consecuencia jurídica impuesta a una persona por haber cometido una falta disciplinaria. Puede ir desde la amonestación hasta la suspensión o exclusión del ejercicio profesional, dependiendo de la gravedad de la conducta.',
    },
    {
      termino: 'Sujeto disciplinable',
      significado:
        'Persona que, por razón de su cargo, función o profesión, está sujeta al control disciplinario. Incluye a servidores públicos, abogados y otras figuras expresamente señaladas en la normativa correspondiente.',
    },
  ],
}
