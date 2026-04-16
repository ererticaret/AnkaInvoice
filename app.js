function startApp() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}

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

function downloadInvoice() {
  const { jsPDF } = window.jspdf;

  const client = document.getElementById("clientName").value;
  const service = document.getElementById("service").value;
  const amount = document.getElementById("amount").value;

  if (!client || !service || !amount) {
    alert("Create invoice first");
    return;
  }

  const date = new Date().toLocaleDateString();
  const invoiceNumber = Math.floor(Math.random() * 100000);

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("INVOICE", 20, 20);

  doc.setFontSize(12);
  doc.text(`Invoice No: ${invoiceNumber}`, 20, 40);
  doc.text(`Date: ${date}`, 20, 50);

  doc.text(`Client: ${client}`, 20, 70);
  doc.text(`Service: ${service}`, 20, 80);
  doc.text(`Amount: €${amount}`, 20, 90);

  doc.text("Status: Unpaid", 20, 110);

  doc.save("invoice.pdf");
}
