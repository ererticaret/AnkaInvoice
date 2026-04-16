function generateInvoice() {
  const client = document.getElementById("clientName").value;
  const service = document.getElementById("service").value;
  const amount = document.getElementById("amount").value;

  if (!client || !service || !amount) {
    alert("Please fill all fields");
    return;
  }

  const invoiceHTML = `
    <h3>Invoice</h3>
    <p><strong>Client:</strong> ${client}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Amount:</strong> €${amount}</p>
    <p>Status: Unpaid</p>
  `;

  document.getElementById("invoiceOutput").innerHTML = invoiceHTML;
}

// 🔥 YENİ EKLENEN
function startApp() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("app").style.display = "block";
}
