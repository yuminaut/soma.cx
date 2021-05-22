export const FavoriteBooks = () => (
  <>
    <ul>
      <li>
        <Book a="Fyodor Dostoevsky" t="The Brothers Karamazov" />
      </li>
      <li>
        <Book a="Leo Tolstoy" t="War and Peace" />
      </li>
      <li>
        <Book a="Haruki Murakami" t="A Wild Cheep Chase" />
      </li>
      <li>
        <Book a="Haruki Murakami" t="Norwegian Wood" />
      </li>
      <li>
        <Book a="Vladimir Nabokov" t="Lolita" />
      </li>
      <li>
        <Book a="Friedrich Nietzsche" t="(all his books)">
          It's not possible to understand his philosophy by selecting single aphorisms or even single books. My
          favorites are The Gay Science and Twilight of the Idols. As for his major works, here is my suggested reading
          order: <i>The Birth of Tragedy</i> (parts 1-10), <i>Twilight of the Idols</i>, <i>Beyond Good and Evil</i>,{" "}
          <i>On the Genealogy of Morality</i>, <i>The Antichrist</i>, <i>The Gay Science</i>, <i>Ecce Homo</i>, and
          finally <i>Thus Spoke Zarathustra</i>. If you're reading in English, get the Walter Kaufmann translations.
        </Book>
      </li>
    </ul>
  </>
);

const Book = ({ a, t, children }) => (
  <div className="book">
    <b>{a}</b> -{" "}
    <b>
      <i>{t}</i>
    </b>
    {children ? (
      <>
        <br />
        {children}
      </>
    ) : (
      ""
    )}
  </div>
);
