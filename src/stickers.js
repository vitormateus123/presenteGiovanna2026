import M from "./stickers.json";

export const themes = Object.keys(M);
export const label = (t) => M[t].label;
export const items = (t) => M[t].items;
export const src = (t, f) => `./stickers/${t}/${f}`;

// Figurinhas escolhidas à mão para os enfeites: de pé, sem corte e sem fundo estranho.
// Ficaram de fora as que vieram deitadas/viradas ou cortadas na extração. O álbum continua mostrando todas.
const GOOD = {
  "gatos": [
   "05",
   "13",
   "03",
   "04",
   "07",
   "09",
   "12",
   "14",
   "15",
   "16",
   "18",
   "22",
   "24",
   "25",
   "28",
   "29",
   "30",
   "31",
   "32",
   "33",
   "34",
   "35",
   "37",
   "40",
   "42"
  ],
  "kate": [
   "03",
   "02",
   "01",
   "05",
   "15",
   "22",
   "11",
   "20"
  ],
  "sdpm": [
   "31",
   "30",
   "09",
   "16",
   "23",
   "11",
   "33",
   "05",
   "25",
   "32",
   "35",
   "36"
  ],
  "su": [
   "03",
   "14",
   "06",
   "07",
   "08",
   "10",
   "04",
   "02"
  ],
  "toh": [
   "12",
   "07",
   "16",
   "14",
   "15",
   "17",
   "18",
   "01"
  ],
  "b99": [
   "16",
   "30",
   "04",
   "14",
   "34",
   "35",
   "10",
   "20",
   "01",
   "47"
  ],
  "volei": [
   "02",
   "03",
   "01",
   "05",
   "09",
   "10",
   "06"
  ],
  "coca": [
   "04",
   "05",
   "02",
   "03",
   "08",
   "06"
  ],
  "jiu": [
   "03",
   "06",
   "11",
   "14",
   "07",
   "18"
  ],
  "f1": [
   "12",
   "04",
   "11",
   "16",
   "01"
  ],
  "stardew": [
   "21",
   "36",
   "09",
   "10",
   "14",
   "13",
   "22",
   "02"
  ],
  "minecraft": [
   "05",
   "06",
   "03",
   "07",
   "01",
   "08",
   "14"
  ],
  "rebelde": [
   "08",
   "04",
   "05",
   "25",
   "09",
   "18",
   "02",
   "07"
  ],
  "hg": [
   "25",
   "43",
   "10",
   "26",
   "15",
   "16",
   "24",
   "17"
  ],
  "httyd": [
   "06",
   "08",
   "10",
   "07",
   "04"
  ],
  "arcane": [
   "19",
   "32",
   "33",
   "14",
   "31",
   "18",
   "17"
  ],
  "tlou": [
   "03",
   "08",
   "10",
   "09",
   "02",
   "05"
  ],
  "st": [
   "33",
   "30",
   "39",
   "25",
   "20",
   "21",
   "38",
   "17",
   "27"
  ],
  "taylor": [
   "13",
   "09",
   "05",
   "20",
   "12",
   "23",
   "22"
  ],
  "sabrina": [
   "07",
   "09",
   "11",
   "13",
   "17",
   "18"
  ],
  "chappell": [
   "02"
  ]
};

// k número: escolhe pela posição na lista curada | k texto ("05"): escolhe a figurinha exata do tema
export const sticker = (t, k = 0) => {
  const g = GOOD[t];
  if (typeof k === "string") return src(t, `${t}-${k}.webp`);
  if (g) return src(t, `${t}-${g[k % g.length]}.webp`);
  const d = M[t].items.filter((i) => i.d);
  const l = d.length ? d : M[t].items;
  return src(t, l[k % l.length].f);
};
