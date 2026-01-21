const proyects = [
  {
    title: 'Yanapay',
    subtile: 'Plataforma web de impacto social',
    img: './src/img/dashboard.PNG',
    description: 'Yanapay es una comunidad digital orientada a la prevención y visibilización de la violencia ginecológica y obstétrica en el sector salud, enfocada en empoderar a mujeres durante sus consultas médicas.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'reactjs',
      'html',
      'css',
      'javascript',
    ],
    contribution: 'Desarrollo frontend de la aplicación web junto a un equipo multidisciplinario.Implementación de dashboards de métricas para centralizar experiencias médicas y denuncias.Integración de funcionalidades para compartir experiencias categorizadas.Desarrollo del flujo “Pedir ayuda” con conexión a asesoría legal y apoyo emocional.Colaboración en la creación de contenidos educativos en formato infografías',
    hit: 'Generación de una base de datos inédita sobre una problemática sin cifras oficiales en el país.Alianza con el Movimiento Manuela Ramos para soporte legal y emocional en tiempo real'
  },
  {
    title: 'Bootcamp Performance Analytics Dashboard',
    subtile: 'Dashboard de análisis educativo',
    img: './src/img/dashboard.PNG',
    description: 'Dashboard web diseñado para optimizar el análisis del desempeño académico de las estudiantes de Laboratoria, presentando información clara, ordenada y accionable para la toma de decisiones.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'javascript',
      'html',
      'css',
      'json',
      'fetch',
      'ux',
      'git'
    ],
    contribution: 'Diseño y desarrollo del dashboard frontend.Implementación de filtros por cohort, país y sede.Cálculo automático de métricas académicas clave.Investigación con Training Managers para priorización de indicadores.Prototipado en Figma y desarrollo responsive (desktop, tablet y móvil)',
    hit: 'Reducción del esfuerzo manual en el análisis de datos.Mejora en la visibilidad del progreso académico y la gestión educativa basada en datos'
  },
  {
    title: 'Mi Banco – Talent Fest',
    subtile: 'Optimización de procesos financieros',
    img: './src/img/dashboard.PNG',
    description: 'Solución web orientada a simplificar el registro de cobros en campo para Mi Banco, unificando múltiples plataformas en una sola interfaz clara y funcional.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'reactjs',
      'nodejs',
      'html',
      'css',
      'bootstrap',
      'git'
    ],
    contribution: 'Desarrollo frontend de la solución web.Diseño de una interfaz unificada para el ingreso de datos.Optimización del flujo de carga de información.Trabajo colaborativo enfocado en experiencia de uso y eficiencia operativa',
    hit: 'Reducción de fricción en el registro de cobros.Mejora en la eficiencia operativa de los equipos en campo'
  },
  {
    title: 'Belcorp – Talent Fest',
    subtile: 'Experiencia omnicanal (1er puesto)',
    img: './src/img/dashboard.PNG',
    description: 'Solución omnicanal orientada a integrar los canales de venta de Belcorp (e-commerce, consultoras y retail) mediante un catálogo interactivo unificado.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'reactjs',
      'javascript',
      'html',
      'css',
      'bootstrap',
      'git'
    ],
    contribution: 'Desarrollo frontend del catálogo interactivo.Colaboración en el diseño de una experiencia consistente entre canales.Implementación de navegación clara y jerarquía de información.Trabajo en equipo bajo metodología colaborativa',
    hit: 'Mejora en la experiencia de usuarias y consultoras.Proyecto ganador del 1er puesto en el Talent Fest de Laboratoria'
  },
  {
    title: 'It\'s Food',
    subtile: 'Red social enfocada en alimentación saludable',
    img: './src/img/dashboard.PNG',
    description: 'Red social diseñada para conectar personas interesadas en alimentación saludable, priorizando contenido relevante y una experiencia clara para la comunidad.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'javascript',
      'firebase',
      'html',
      'css',
      'fetch'
    ],
    contribution: 'Investigación de usuarios (benchmark, entrevistas y análisis de necesidades).Definición de funcionalidades clave y público objetivo.Diseño y validación de prototipos (mobile y desktop).Desarrollo frontend y testing con usuarios reales',
    hit: 'Producto validado por usuarios.Mejora en arquitectura de información y experiencia de uso'
  },
  {
    title: 'Markdown Links',
    subtile: 'Herramienta CLI para desarrolladores',
    img: './src/img/dashboard.PNG',
    description: 'Librería desarrollada para analizar archivos Markdown y validar enlaces, ayudando a mantener la calidad y confiabilidad de la documentación técnica.',
    demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
    code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
    tags: [
      'javascript',
      'cli',
      'git',
      'async',
    ],
    contribution: 'Desarrollo de librería en JavaScript para uso desde línea de comandos.Implementación de validación de enlaces y generación de métricas.Manejo de asincronía y estructuración de datos',
    hit: 'Optimización del tiempo dedicado a la revisión manual de documentación.Herramienta práctica para desarrolladores y equipos técnicos'
  },
  // {
  //   title: '',
  //   subtile: '',
  //   img: './src/img/dashboard.PNG',
  //   description: '',
  //   demo: 'https://melyhc.github.io/lim-2018-05-bc-core-pm-datadashboard/src/',
  //   code: 'https://github.com/MelyHC/lim-2018-05-bc-core-pm-datadashboard',
  //   tags: [
  //     'react',
  //     'html',
  //     'css',
  //     'javascript',
  //   ],
  //   contribution: '',
  //   hit: ''
  // }
];

export default proyects;