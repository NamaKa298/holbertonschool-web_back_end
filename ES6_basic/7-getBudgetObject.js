export default function getBudgetObject(income, gdp, capita) {
  var budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
