import { BlipFadeNavLink } from "./Blip";

export const Iceberg = () => (
  <div className="iceberg">
    <Link href="/recipes#reuteri">Lactobacillus reuteri</Link>
    <Link href="/breathing">Nosebreathing 24/7</Link>
    <Link href="/breathing">Buteyko Breathing</Link>
    <Link href="#">Open Windows</Link>
    <Link href="#">Cold Exposure</Link>
    <Link href="#">Ancestral Diet</Link>
    <Link href="#">Intermittent Fasting</Link>
    <Link href="#">Lacto-Fermented Foods</Link>
    <Link href="#">Pine Pollen</Link>
    <Link href="#">Bone Broth</Link>
    <Link href="#">Raw Meat</Link>
    <Link href="#">Raw Milk</Link>
    <Link href="#">Raw Eggs</Link>
    <Link href="#">High Meat</Link>
    <Link href="#">Organ Meats</Link>
    <Link href="#">Nigella Sativa</Link>
    <Link href="#">Only Warm Drinks w/ Food</Link>
    <Link href="#">Topical Magnesium Chloride</Link>
    <Link href="#">PUFAs are Poison</Link>
    <Link href="#">NSAIDs are Toxic</Link>
    <Link href="#">Skin = 2nd Mouth</Link>
    <Link href="#">Gut = 2nd Brain</Link>
    <Link href="#">Oil Cleansing</Link>
    <Link href="#">Oil Pulling</Link>
    <Link href="#">ACV as Deo</Link>
    <Link href="#">No Aluminium Deo</Link>
    <Link href="#">Eggs as Shampoo</Link>
    <Link href="#">No Industrial Shampoo</Link>
    <Link href="#">Sunscreen = Endocrine Disruptor</Link>
    <Link href="#">Myopia is Reversible</Link>
    <Link href="#">Blue Light is Toxic</Link>
    <Link href="#">f.lux 24/7</Link>
    <Link href="#">Ball Sunning</Link>
    <Link href="#">The Lindy Effect</Link>
    <Link href="#">Sleep on Left Side</Link>
    <Link href="#">No Flouride, More Iodine</Link>
    <Link href="#">Porn = Population Control</Link>
    <Link href="#">Thoughts are Prayers</Link>
    <Link href="#">Words are Spells</Link>
    <Link href="#">Hormesis</Link>
  </div>
);

const Link = ({ children, ...rest }) => (
  <li>
    <BlipFadeNavLink {...rest}>{children}</BlipFadeNavLink>
  </li>
);
