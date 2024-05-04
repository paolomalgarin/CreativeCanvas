import { createSlice } from "@reduxjs/toolkit";  //import necessario per le slices
import EdilServizi from "../../assets/sites-imgs/EdilServizi.png"
import Boomba from "../../assets/sites-imgs/Boomba.png"
import Portfolio from "../../assets/sites-imgs/Portfolio.png"

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        value: [
            {
                id: 0,
                name: "EdilServizi",
                link: "https://edilservizi.net",
                imgURL: EdilServizi,
                year: 2024,
                description: "EdilServizi è stato il mio primo progetto. Si tratta di un impresa edile di piccole dimensioni che opera in veneto ed è specializzata in lavori di piccola manutenzione.",
            },
            {
                id: 1,
                name: "Boomba",
                link: "https://boomba.netlify.app",
                imgURL: Boomba,
                year: 2024,
                description: "Boomba è il sito di un progetto scolastico a cui ho lavorato. Si è trattato di ricreare il gioco campo minato e nel sito ho riportato la documentazione ed una spiegazione degli algoritmi che ci sono dietro.",
            },
            {
                id: 2,
                name: "Creative Canvas",
                link: "https://paolomalgarin.netlify.app",
                imgURL: Portfolio,
                year: 2024,
                description: "Questo è il mio portfolio, dove mostro una varietà di progetti che ho realizzato nel corso degli anni. Attraverso un design pulito e una navigazione intuitiva, i visitatori possono esplorare il mio lavoro e conoscere meglio le mie competenze e il mio approccio creativo.",
            },
        ]
    },
});

export const projectsReducer = projectsSlice.reducer;