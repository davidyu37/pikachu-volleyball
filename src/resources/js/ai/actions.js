export const takeAction = (player, ball, theOtherPlayer, userInput) => {
  // Essentially only three output to take action. Although they can all change at the same time
  userInput.xDirection = 0; // -1, 0, 1
  userInput.yDirection = 0; // -1, 0, 1
  userInput.powerHit = 0; // 0, 1
};
