import { Paper } from './paper.post';

export const PAPERS: Paper[] = [
    new Paper(
        "Pagina post nello stato attuale", 
        "Il sito è ospitato interamente su Github Pages. Questo post è scritto nel vettore PAPERS per rendere le pagine fruibili nell'immediato.\n" +
        "\n" +
        "Nelle prossime settimane verrà implementato un servizio REST su host remoto per rendere il sistema professionale.\n" + 
        "\n" +
        "Il codice sorgente dell'applicazione, scritta utilizzando come base Angular 9, è visualizzabile nel repository raggiungibile al link in fondo alla pagina " +
        "dove è possibile trovare il mio indizzo mail per eventuali contatti.\n\n", 
        new Date(2020, 4, 23))
]
