let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((row1, row2) => row1.cells[0].innerHTML > row2.cells[1].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);