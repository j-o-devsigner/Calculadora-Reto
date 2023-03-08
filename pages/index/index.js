Page({
  data: {
    result: '',
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'Calculator',
      desc: 'Calculator App',
      path: 'pages/index/index',
    };
  },
  calculateResult() {
    this.validateData()
  },
  setResult(e) {

    const result = this.data.result
    const value = e.target.dataset.value

    this.setData({
      result: result + value
    })
  },
  validateData() {

    const result = this.data.result

    if(result.includes('+')) {
      this.prepareNumbers('+', result)

    } else if (result.includes('-')) {
      this.prepareNumbers('-', result)

    } else if (result.includes('x')) {
      this.prepareNumbers('x', result)

    } else if (result.includes('/')){
      this.prepareNumbers('/', result)
    }

  },
  prepareNumbers(operator, string) {
    const numbers = string.split(operator)
    console.log(numbers)
    const number1 = numbers[0]
    const number2 = numbers[1]
    console.log(number1)
    console.log(number2)
    this.setFinalResult(operator, number1, number2)
  },
  clearResult(){
    this.setData({
      result: ''
    })
  },
  setFinalResult(operator, number1, number2) {

    const operations = {
      "+": parseInt(number1) + parseInt(number2),
      "-": parseInt(number1) - parseInt(number2),
      "x": parseInt(number1) * parseInt(number2),
      "/": parseInt(number1) / parseInt(number2),
    }

    const result = operations[operator]
    this.setData({
      result: result
    })
  }

});

