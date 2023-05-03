const BADGE_COLORS = [
  '#FED6BC',
  '#FFFADD',
  '#DEF7FE',
  '#E7ECFF',
  '#C3FBD8',
  '#FDEED9',
  '#F6FFF8',
  '#B5F2EA',
  '#C6D8FF',
  '#d0abb4',
  '#A79AFF',
  '#AFF8D8',
  '#E7FFAC',
  '#FFF5BA',
  '#C5A3FF',
];

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
