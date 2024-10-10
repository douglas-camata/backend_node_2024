let serie = {
    titulo: 'Once Upon a Time (Era uma vez)',
    diretor: [	
        'Edward Kitsis',
        'Adam Horowitz'
    ],
    genero: ['drama', 'fantasia', 'mistério'],
    anoLancamento: 2011,
    nrTemporadas: 7,
    episodios: [
        {temporada: 1, nrEpisodio: 3, titulo:'Neve e Paixão', duracao: 45},
        {temporada: 3, nrEpisodio: 10, titulo:'A Nova Terra do Nunca', duracao: 45},
        {temporada: 6, nrEpisodio: 7, titulo:'Sem Coração', duracao: 45},
    ]
}

console.log(`Ep. ${serie.episodios[1].titulo} 
                ${serie.episodios[1].duracao} min  
                Temporada ${serie.episodios[1].temporada}`);
