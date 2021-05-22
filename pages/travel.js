import Head from "next/head";
import ReactMarkdown from "react-markdown";

const Travel = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Travel</title>
    </Head>
    <img
      src="/img/bg/tajikistan.jpg"
      className="fullSizeBackground"
      style={{ opacity: 0.1 }}
    />
    {topbar}
    <div className="wrapper">
      <ReactMarkdown children={md} />
    </div>
  </div>
);

const md = `
# Travel

Notes on travel.

## Packing

Being smart with packing is key to enjoying a trip, be it 3 days, 3 weeks or
3 months long.

Limit yourself to one bag, preferably a backpack if you're going to be walking
and moving around a lot. Follow the advice from either of these pages:

- [/r/onebag wiki](https://www.reddit.com/r/onebag/wiki/index)
- [onebag.com](https://www.onebag.com/)

Why pack light? From the onebag.com page:

- Security – you can always keep your single bag on you
- Economy – no need to check luggage or pay for transport for walkable distances
- Mobility – you're never held back by heavy luggage
- Serenity – less stuff to lose, easy to pack and unpack

### Minimum viable packing list

Here follows a very minimal packing list. In general you don't _need_ more than
this, but you should of course adjust for climate, comfort, and niche needs.
So if you're going to a beach town obviously also pack swimwear, duh (or better
yet, find shorts that double as swimwear). If you're a photographer bring your
camera. And so on.

- **Clothing** (wear one item from each bullet point):
  - 3 x Shirts
  - 3 x Underwear
  - 3 x Socks
  - 1 x Pants
  - 1 x Shoes
  - Adjust layers according to climate
- **Technology & Entertainment**
  - Phone – for GPS, ongoing trip planning and connecting with people you meet
  - Earbuds – not essential, I like to be part of the surroundings
  - Book or E-reader – good for long transports
  - Necessary chargers
- **Documents**
  - Wallet + Cash
  - Passport
  - Small pen – always useful
  - Small notebook – optional
- **Hygiene & Miscellaneous**
  - Dry bag _or_ sink stopper – see the laundry section below
  - Clothesline – ditto
  - Eye mask
  - Ear plugs
  - Toothbrush

Toothpaste, soap and other hygiene articles can be bought at the destination or
brought with you, it's up to you.

**How big a backpack do I need?**

For the above list, no more than 15L. But you'll likely want to pack more than
what's in there. There are many packing list examples on the "onebag" links
above. You shouldn't need more than 30L, in my opinion.

**But how am I supposed to survive with only three sets of clothing?**

Just do your laundry during your daily shower. One set of clothing to wear, one
to clean and dry, and one as a buffer for a day when you might be too busy.

### Laundry

The dead sinple way to clean is to use a dry bag, 5-10L in size. You simply pour
some shampoo or shower gel into it, then some hot/warm water until it lathers,
put clothes inside, shake around, let sit for 10 minutes or more if really
dirty. Empty and rinse in the shower or sink. Usually underwear and socks are
easier to wash by hand directly, and then you don't need more than a 5L dry bag.
Don't worry, this method _does_ in fact clean your clothes very well.

Hang your clothes to dry overnight or during the day, using hangers or the
lightweight clothesline you brought with you.

If you are lazy, have more clothes with you and are in a country where laundry
service is cheap, you can have it done for you for the equivalent of 1-2 USD
per kg.

## Being social

Traveling alone and want to have fun and meet people? Stay in a hostel that has
good reviews (and reviews that mention a "social atmosphere") and you'll be able
to meet people from all over the world. But do bring ear plugs and an eye mask.

Want to connect and make friends with locals? Learn the basics of their language
or at least some phrases such as "good day", "thank you", etc. It will really
make people open up.

## Other

This page will be updated as more things related to travel come to mind.
`;

export default Travel;
