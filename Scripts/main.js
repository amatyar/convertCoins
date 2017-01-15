function amountForCoins(amount, coins)
{
  if(amount===0)
  {
    return[];
  }
  else {
    if(amount >= coins[0])
    {
      left =(amount - coins[0]);
      return [coins[0]].concat(amountForCoins(left, coins));
    }
    else {
      coins.shift();
      return amountForCoins(amount, coins);
    }
  }
}
console.log(amountForCoins(56,[25,10,5,1]));
