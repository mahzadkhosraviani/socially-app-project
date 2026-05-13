import colors from "../constants/colors";

function setAvatarColors(name: string) {
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }

  const index = sum % colors.length;

  return colors[index];
}

export default setAvatarColors;
