export const getPersonJsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    url: 'https://vedantmistry.com/',
    affiliation: [

    ],
    description:
      'Vedant Mistry is an Indian software engineer, builder, and graduate student based in Stuttgart, Germany. Guided by metacognition, dialectical thinking, and Stoic philosophy, he focuses on full-stack web architectures and building new-generation social systems.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Zeno_Rocha.png',
    name: 'Vedant Mistry',
    givenName: 'Vedant',
    familyName: 'Mistry',
    gender: 'Male',
    birthPlace: 'India',
    jobTitle: 'Passionate Thinker & Creator',
    sameAs: [
      'https://www.linkedin.com/in/ivedantmistry',
      'https://www.x.com/ivedantmistry',
      'https://www.instagram.com/ivedantmistry',
      'https://www.github.com/ivedantmistry',
      'https://www.vedantmistry.com',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q1860',
        name: 'English'
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q188',
        name: 'German'
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q5137',
        name: 'Gujarati'
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q1568',
        name: 'Hindi'
      }
    ],
    nationality: [
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q668',
        name: 'India'
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q22079913',
        name: 'GSFC University',
        url: 'https://www.gsfcuniversity.ac.in/',
        startDate: '2021',
        endDate: '2025',
        major: [
          {
            '@type': 'DefinedTerm',
            name: 'Computer Science & Engineering'
          }
        ]
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q3011938',
        name: 'SRH University, Heidelberg',
        url: 'https://www.srh-university.de/de/',
        startDate: '2026',
        endDate: '2028',
        major: [
          {
            '@type': 'DefinedTerm',
            name: 'Computer Science'
          }
        ]
      }
    ]
  };
};
