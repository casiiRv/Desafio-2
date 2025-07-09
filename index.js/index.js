document.getElementById('calculate').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const type = document.querySelector('input[name="type"]:checked').value;
  
    if (!amount || !term || !rate) {
      document.getElementById('output').innerText = "Please fill in all fields.";
      return;
    }
  
    const months = term * 12;
    let monthlyPayment;
  
    if (type === "repayment") {
      monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    } else {
      monthlyPayment = amount * rate;
    }
  
    document.getElementById('output').innerText =
      `Estimated Monthly Payment: £${monthlyPayment.toFixed(2)}`;
  });
  
  document.querySelector('.clear').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('amount').value = '';
    document.getElementById('term').value = '';
    document.getElementById('rate').value = '';
    document.querySelector('input[value="repayment"]').checked = true;
    document.getElementById('output').innerText = '';
  });
  