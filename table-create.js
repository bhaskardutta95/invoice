document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("table-container");
    if (!container) return;
    
    const table = document.createElement("table");
    table.border = "1";
    
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Sr No", "Name", "Qty", "MFG", "Batch", "EXP", "Amount"];
    
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.id = "medicine-rows";
    
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        
        ["srno", "name", "qty", "mfg", "batch", "exp", "amount"].forEach(className => {
            const cell = document.createElement("td");
            cell.className = className;
            const input = document.createElement("input");
            input.type = "text";
            input.className = "form-control";
            cell.appendChild(input);
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    container.appendChild(table);
});
