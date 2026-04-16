function generateInvoice() {
  const client = document.getElementById("clientName").value;
  const service = document.getElementById("service").value;
  const amount = document.getElementById("amount").value;

  if (!client || !service || !amount) {
    alert("Please fill all fields");
    return;
  }

  const date = new Date().toLocaleDateString();
  const invoiceNumber = Math.floor(Math.random() * 100000);

  const invoiceText = `
INVOICE

Invoice No: ${invoiceNumber}
Date: ${date}

Client: ${client}
Service: ${service}
Amount: €${amount}

Status: Unpaid
  `;

  document.getElementById("invoiceOutput").innerText = invoiceText;
}
