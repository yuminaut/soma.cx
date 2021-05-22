import Head from "next/head";
import { BackHome } from "../components/BackButtons.js";
import { FavoriteBooks } from "../components/FavoriteBooks";
import { FavoriteMovies } from "../components/FavoriteMovies";

const Favorites = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <div className="page favorites">
        <BackHome />
        <div className="wrapper">
          <h1>Favorites of different kinds</h1>

          <h2>Shows</h2>
          <ul>
            <li>Neon Genesis Evangelion</li>
          </ul>
          <ul>
            <li>Welcome to the NHK</li>
          </ul>
          <ul>
            <li>JoJo's Bizarre Adventure</li>
          </ul>

          {/* TODO: NGE, NHK */}

          <h2>Movies</h2>
          <p>I very rarely watch movies, but here are some of my favorites.</p>
          <FavoriteMovies />
          <p>
            Some more ... Japanese movies: everything by Takeshi Kitano, Studio Ghibli and Makoto Shinkai. Chinese
            language movies: Zhang Yimou (<i>Raise the Red Lantern</i>, <i>To Live</i>, <i>Shanghai Triad</i>,{" "}
            <i>Hero</i>) and Chen Kaige (<i>Farewell My Concubine</i>, <i>Temptress Moon</i>). English language movies:
            the <i>Lord of the Rings</i> trilogy, <i>2001: A Space Odyssey</i> and <i>The Lighthouse</i>.
          </p>
          <p>
            Most H*llywood movies are disappointing although there are some great ones like <i>The Departed</i> and{" "}
            <i>Zodiac</i>, <i>Blade Runner</i>, <i>Drive</i>, plus I will make one exception for shitty comedy when it
            comes to <i>Walk Hard: The Dewey Cox Story</i>.
          </p>

          <h2>Books</h2>
          <FavoriteBooks />

          <h2>Music</h2>
          <p>[TODO]</p>
        </div>
      </div>
    </>
  );
};

export default Favorites;
