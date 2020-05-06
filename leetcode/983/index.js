var mincostTickets = function (days, costs) {
  let max = days[days.length - 1];
  let dp = new Array(max + 1).fill(Infinity);
  let cost1, cost7, cost30;
  dp[0] = 0;
  for (let i = 1; i <= max; i++) {
    if (days.indexOf(i) !== -1) {
      if (i === days[0]) {
        dp[i] = Math.min(...costs);
      } else {
        cost1 = dp[i - 1] + costs[0];
        cost7 = i >= 7 ? dp[i - 7] + costs[1] : costs[1];
        cost30 = i >= 30 ? dp[i - 30] + costs[2] : costs[2];
        dp[i] = Math.min(cost1, cost7, cost30);
      }
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[max]
};