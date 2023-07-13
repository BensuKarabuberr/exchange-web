class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=Yky5O92xU7jAoJuK34GWYYUMUZFV4vVo8LtFqg7k&base_currency=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const exchangeResult = amount * result.data[secondCurrency];
    return exchangeResult;
  }
}
