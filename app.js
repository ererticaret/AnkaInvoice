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

  const invoiceText = `
Invoice

Client: ${client}
Service: ${service}
Amount: €${amount}
Status: Unpaid
  `;

  document.getElementById("invoiceOutput").innerText = invoiceText;
}

function downloadInvoice() {
  const content = document.getElementById("invoiceOutput").innerText;

  if (!content) {
    alert("Create invoice first");
    return;
  }

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "invoice.txt";
  link.click();
}
