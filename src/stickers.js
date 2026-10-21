import M from "./stickers.json";

export const themes = Object.keys(M);
export const label = (t) => M[t].label;
export const items = (t) => M[t].items;
export const src = (t, f) => `./stickers/${t}/${f}`;
// figurinhas recortadas (decorativas) vêm primeiro; k escolhe qual
export const sticker = (t, k = 0) => {
  const d = M[t].items.filter((i) => i.d);
  const l = d.length ? d : M[t].items;
  return src(t, l[k % l.length].f);
};
