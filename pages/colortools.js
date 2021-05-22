import Head from "next/head";
import { useState } from "react";
import { toHex } from "../util";

const ColorTool = () => {
  const [trip, setTrip] = useState("");
  const [hex, setHex] = useState("");

  const isHexColor = (hex) => {
    console.log(hex);
    // console.log(typeof hex);
    // console.log(hex.length);
    // console.log(Number("0x" + hex));
    // console.log(!isNaN(Number("0x" + hex)));
    return typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
  };

  console.log(isHexColor("123456"));

  return (
    <>
      <Head>
        <title>Color Tools</title>
      </Head>
      <div className="colortool">
        <h1>Color Tools</h1>
        <hr />
        <h2>Tripcode</h2>
        <p>Enter a tripcode below to see what color it will be.</p>
        <input
          className="yourSecret preventToggle"
          placeholder="Enter text..."
          onChange={(e) => {
            setTrip(e.target.value);
          }}
          value={trip}
          style={{ background: toHex(trip) }}
        />
        <div>
          <h3 style={{ color: trip.length > 0 ? toHex(trip) : "#fafafa" }}>
            {trip.length > 0 ? toHex(trip) : "#??????"}
          </h3>
        </div>
        <hr />
        <h2>Hex color</h2>
        <p>
          Enter a{" "}
          <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet" rel="noreferrer" target="_blank">
            hex color
          </a>{" "}
          below, no hashtag, just six numbers.
        </p>
        <input
          className="yourHex preventToggle"
          placeholder="Enter hex..."
          onChange={(e) => {
            setHex(e.target.value);
          }}
          value={hex}
        />
        <div>
          <h3 style={{ color: isHexColor(hex) ? "#" + hex : "#ffffff" }}>{isHexColor(hex) ? "#" + hex : "#??????"}</h3>
        </div>
      </div>
    </>
  );
};

export default ColorTool;
