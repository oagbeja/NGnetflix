import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MoviesDbService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let movies  = [
      {
        id: 13988,
        title: "Thunderbirds",
        year: 2004,
        runtime: 95,
        genres: [
        "Action",
        "Adventure",
        "Comedy",
        "Family",
        "Sci-Fi"
        ],
        summary: "The year is 2010. Teenager Alan Tracy, sent off to a distant boarding school, is the youngest of the sons of Jeff Tracy, a retired American astronaut. Jeff, a widower, has formed International Rescue, and raised his sons to act as a secret, volunteer organization which uses highly advanced technology to save lives worldwide. Jeff and his older sons John, Virgil, Scott, and Gordon, who like Alan were named after the Mercury Seven astronauts are joined in this effort by Lady Penelope and her butler/chauffeur Parker. Their futuristic hardware is largely developed by a genius scientist known as Brains, who lives at the International Rescue base on Tracy Island, somewhere in the Pacific.",
        language: "English",
        mpa_rating: "PG",
        large_cover_image: "https://yts.lt/assets/images/movies/thunderbirds_2004/large-cover.jpg",


      },
      {
        id: 13986,
        title: "Toys Are Not for Children",
        year: 1972,
        runtime: 85,
        genres: [
        "Drama"
        ],
        summary: "Emotionally stunted child woman Jamie Godard not only suffers from an unhealthy fixation on her long absent father, but also has an obsession with all the toys he gave her as a little girl. After getting a job at a toy store, Jamie decides to marry co-worker Charlie Belmond. When the marriage doesn't work out, Jamie runs away to New York City and becomes a prostitute who specializes in servicing perverted old men who want to play daddy with her.",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/toys_are_not_for_children_1972/large-cover.jpg",


      },
      {
        id: 13985,
        title: "Red Heat",
        year: 1988,
        runtime: 104,
        genres: [
        "Action",
        "Comedy",
        "Crime",
        "Thriller"
        ],
        summary: "A mutually uneasy alliance is formed between the stern Captain Ivan Danko of the Moscow Police and his American equivalent, the Chicago Detective Art Ridzik when the latter captures Viktor Rostavili, a dangerous Georgian drug kingpin. With his partner murdered by Viktor's hands, Ivan lands in Chicago to extradite the crime lord back to Russia, however, when he manages to escape, a frenzied chase in the bustling downtown will begin. In the end, to bring down the ruthless criminal, are the two reluctant comrades who are worlds apart willing to put their differences aside?",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/red_heat_1988/large-cover.jpg",

      },
      {
        id: 13984,
        title: "Heroic Purgatory",
        year: 1970,
        runtime: 118,
        genres: [
        "Drama",
        "Fantasy"
        ],
        summary: "An engineer's wife returns home with a lost teenager. A man posing as her dad tries to get her back, causing the engineer to recall his youth as a revolutionary, obscured by dreamlike disruptions of time and space, fantasy and reality.",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/heroic_purgatory_1970/large-cover.jpg",

        },
        {
        id: 13983,
        title: "Birds of a Feather",
        year: 2019,
        runtime: 90,
        genres: [
        "Adventure",
        "Animation",
        "Comedy",
        "Family"
        ],
        summary: "The little swift Manou grows up believing he's a seagull. Learning to fly he finds out he never will be. Shocked, he runs away from home. He meets birds of his own species and finds out who he really is. When both seagulls and swifts face a dangerous threat, Manou becomes the hero of the day.",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/birds_of_a_feather_2019/large-cover.jpg",

      },
      {
        id: 13982,
        title: "Batman & Bill",
        year: 2017,
        runtime: 93,
        genres: [
        "Animation",
        "Documentary",
        "Mystery"
        ],
        summary: "Documentary about the uncredited co-creator of Batman, Bill Finger.",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/batman_bill_2017/large-cover.jpg",

        },
        {
        id: 13981,
        title: "Boys on the Side",
        year: 1995,
        runtime: 115,
        genres: [
        "Comedy",
        "Drama"
        ],
        summary: "Jane is a night club singer, out of work. Robin is a quirky real estate agent looking for a ride-share to accompany her to California. Her advertisement is answered by Jane, who at first was uncertain about her. A stop in Pittsburgh picks up a third, Holly, escaping a violent and drug-dealing partner. Girls on the road, reaching understanding, respect, and care for each other. But this trio is different - Jane a lesbian, Robin suffering with AIDS, Holly running from her past, seeking one-night stands and a good man.",
        language: "English",
        mpa_rating: "",
        large_cover_image: "https://yts.lt/assets/images/movies/boys_on_the_side_1995/large-cover.jpg",

      },
      {
        id: 13980,
        title: "Extra Ordinary",
        year: 2019,
        runtime: 94,
        genres: [
        "Comedy",
        "Fantasy",
        "Horror"
        ],
        summary: "Rose, a sweet, lonely driving instructor in rural Ireland, is gifted with supernatural abilities. Rose has a love/hate relationship with her 'talents' & tries to ignore the constant spirit related requests from locals - to exorcise possessed rubbish bins or haunted gravel. But! Christian Winter, a washed up, one-hit-wonder rock star, has made a pact with the devil for a return to greatness! He puts a spell on a local teenager- making her levitate. Her terrified father, Martin Martin, asks Rose to help save his daughter. Rose has to overcome the fear of her supernatural gift & work with Martin to save the girl, get the guy and be home in time for a light snack...maybe a yogurt or something...",
        language: "English",
        mpa_rating: "R",
        large_cover_image: "https://yts.lt/assets/images/movies/extra_ordinary_2019/large-cover.jpg",
      }
      ];
    return {movies};
  }

}
