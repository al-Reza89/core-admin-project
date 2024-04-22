const COLORS = ['#EFEFEF', '#FFD88D', '#B1E5FC', '#CABDFF', '#B5E4CA'];

export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
