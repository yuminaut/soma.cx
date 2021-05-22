import SHA256 from "crypto-js/sha256";
import tripcode from "tripcode";

const toTrip = (str) => tripcode(SHA256(str).toString().slice(0, 8));

export const isEmpty = (str) => str.replace(/^\s+/, "").replace(/\s+$/, "") === "";

// can probably remove this
export const nametrip = (id, secret) => {
  let name = "anon";
  let trip = isEmpty(secret) ? toTrip(id) : toTrip(secret);
  if (secret.includes("#")) {
    let [left, ...rest] = secret.split("#");
    let right = rest.join("#");
    name = isEmpty(left) ? name : left;
    trip = isEmpty(right) ? toTrip(id) : toTrip(right);
  }
  return { name, trip };
};

export const toHex = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    value = value | 0x50; // added by me
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

const nameLengthLimit = 12;

export const onSecretChange = (e, setSecret) => {
  let v = e.target.value;
  const lim = nameLengthLimit;
  if (v[v.length - 1] === "#" && !v.slice(0, v.length - 1).includes("#") && v.length - 1 > lim) {
    let tmp = v.split("");
    tmp.splice(lim, tmp.length - lim);
    v = tmp.join("") + "#";
  }
  if (v.includes("#")) {
    let [name] = v.split("#");
    if (name.length > lim) {
      return;
    }
  }
  setSecret(v);
};
