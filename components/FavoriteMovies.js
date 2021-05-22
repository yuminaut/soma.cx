import styled from "styled-components";

const apu = "/img/movies/apu.jpg";
const akira = "/img/movies/akira.jpg";
const hanabi = "/img/movies/hanabi.jpg";
const children = "/img/movies/children.jpg";
const concubine = "/img/movies/concubine.jpg";
const tolive = "/img/movies/tolive.jpg";
const sonatine = "/img/movies/sonatine.jpg";
const laputa = "/img/movies/laputa.jpg";

export const FavoriteMovies = () => (
  <div className="movies">
    <Movie href="https://en.wikipedia.org/wiki/The_Apu_Trilogy" imgSrc={apu} title="The Apu Trilogy">
      A Bildungsroman about Apu, a high caste but poor young Bengali.
    </Movie>

    <Movie href="https://en.wikipedia.org/wiki/Akira_(1988_film)" imgSrc={akira} title="Akira">
      A post-apocalyptic cyberpunk anime.
    </Movie>

    <Movie href="https://en.wikipedia.org/wiki/Castle_in_the_Sky" imgSrc={laputa} title="Castle in the Sky">
      A young boy and a girl search for a legendary floating castle.
    </Movie>

    <Movie
      href="https://en.wikipedia.org/wiki/Children_Who_Chase_Lost_Voices"
      imgSrc={children}
      title="Children Who Chase Lost Voices"
    >
      A story about love bringing people to Agartha.
    </Movie>

    <Movie href="https://en.wikipedia.org/wiki/Sonatine_(1993_film)" imgSrc={sonatine} title="Sonatine">
      Betrayal, friendship and violence. Takeshi Kitano.
    </Movie>

    <Movie href="https://en.wikipedia.org/wiki/Hana-bi" imgSrc={hanabi} title="Hana-bi (Fireworks)">
      Violence and love. Takeshi Kitano.
    </Movie>

    <Movie
      href="https://en.wikipedia.org/wiki/Farewell_My_Concubine_(film)"
      imgSrc={concubine}
      title="Farewell My Concubine"
    >
      A friendship spanning nearly 70 years during China's troubled 20th century.
    </Movie>

    <Movie href="https://en.wikipedia.org/wiki/To_Live_(1994_film)" imgSrc={tolive} title="To Live">
      A portrayal of Chinese people living under social pressures.
    </Movie>
  </div>
);

const Movie = ({ href, imgSrc, title, children }) => (
  <MovieStyle imgSrc={imgSrc} className="flex-col">
    {/* <div className="movie" className="flex-col" imgSrc={imgSrc}> */}
    <a href={href} target="_blank" rel="noreferrer">
      <div id="bg">
        <div id="inside">
          <span id="title">{title}</span>
          <span id="desc">{children}</span>
        </div>
      </div>
    </a>
    {/* </div> */}
  </MovieStyle>
);

const MovieStyle = styled.div`
  width: 190px;
  height: 245px;
  border: 3px solid #333;
  text-align: center;
  margin: 0.5em;
  background: #444;
  position: relative;
  color: white;

  #inside {
    position: relative;
    opacity: 0;
    transition: opacity 0.2s, background 0.2s;
    padding: 0.5em;
  }

  a:hover {
    cursor: pointer;
  }

  :hover {
    #bg::before {
      filter: grayscale(0.5) brightness(0.5);
    }
    #inside {
      background: #00000088;
      opacity: 1;
    }
  }

  #bg {
    position: relative;
    height: 100%;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-image: url(${(props) => props.imgSrc});
      background-position: center;
      background-size: cover;
      filter: none;
    }
  }

  #title {
    // padding: 0;
    // margin: 0;
    font-weight: bold;
    display: block;
  }

  #desc {
    font-size: 0.8em;
  }

  transition: transform 0.2s;
  :hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: inherit;
    background: inherit;
  }
  a:hover {
    color: inhertit;
    background: inherit;
  }

  img {
    height: 250px;
    // width: 200px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
`;
