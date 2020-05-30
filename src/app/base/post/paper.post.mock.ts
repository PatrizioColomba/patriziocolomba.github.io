import { Paper } from './paper.post';

export const PAPERS = [
    {
        id: 1,
        title: "Pagina post nello stato attuale", 
        text: "Il sito è ospitato interamente su Github Pages. Questo post è scritto nel vettore PAPERS per rendere le pagine fruibili nell'immediato.\n" +
        "Nelle prossime settimane verrà implementato un servizio REST su host remoto per rendere il sistema professionale.\n" +
        "Il codice sorgente dell'applicazione, scritta utilizzando come base Angular 9, è visualizzabile nel repository raggiungibile al link in fondo alla pagina " +
        "dove è possibile trovare il mio indizzo mail per eventuali contatti.\n",
        created: '2020-05-23'
    },
    {
        id: 2,
        title: "Aggiunto InMemoryDataService",
        text: "Aggiunto il servizio <a target=\"_blank\" href=\"https://github.com/angular/in-memory-web-api\">InMemoryData</a> in attesa del deploy su host remoto del " +
        "servizio REST reale.\n" + 
        "Le chiamate al servizio REST al momento sono simulate.\n",
        created: '2020/05/29'
    },
    {
        id: 3,
        title: "Repository REST API Service",
        text: "Creato e pubblicato lo scheletro del servizio REST per questo sito. Seguirà la pubblicazione della pipeline per praticare l'integrazione continua (CI).\n"  + 
        "Il repository è pubblicato su <a target=\"_blank\" href=\"https://bitbucket.org/\">Bitbucket</a>. " + 
        "Nella pagina <a href=\"https://patriziocolomba.github.io/portfolio/\">portfolio</a> l'indirizzo " + 
        "del <a target=\"_blank\" href=\"https://bitbucket.org/PatrizioColomba/rest.service/\">repository.\n",
        created: '2020/05/30'
    }
  ];
