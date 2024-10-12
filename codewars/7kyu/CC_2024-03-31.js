/* Help your fellow warrior!


*/

function getHonorPath(honorScore, targetHonorScore) {
  if (honorScore >= targetHonorScore) return {};
  return {
    '1kyus': Math.floor((targetHonorScore - honorScore) / 2),
    '2kyus': (targetHonorScore - honorScore) % 2
  }
}