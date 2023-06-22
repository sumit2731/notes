let days2 = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

function generateHeader() {
  let header = document.createElement('thead');
  let headerRow = document.createElement('tr');
  for(let day of days) {
    let headerColumn = document.createElement('th');
    headerColumn.textContent = day;
    headerRow.append(headerColumn);
  }
  header.append(headerRow);
  return header;
}
//june - 5
function generateBody(month, year) {
  // 30
  let daysCount = new Date(year, month+1,0).getDate();
  // 4
  let firstDateDay = new Date(year, month,1).getDay() -1;
  if(firstDateDay < 0) {
    firstDateDay = days.length + 1
  }
  let noOfWeeksRequired = Math.ceil((firstDateDay + daysCount)/7);

  let tableBody = document.createElement('tbody'),currentDay = 1;
  for(let row = 0; row < noOfWeeksRequired; row++) {
    let currentRow = document.createElement('tr');
    for(let column = 0; column <7; column++) {
      let currentColumn = document.createElement('td');
      //skip some days of first week
      if(!((row == 0) && (column <firstDateDay))) {
        if(currentDay <= daysCount) {
          currentColumn.textContent = currentDay
          currentDay++;
        }
      }
      currentRow.append(currentColumn);
    }
    tableBody.append(currentRow);
  }
  return tableBody;
  }


function generateCalender(container,month, year) {
  let table = document.createElement('table');
  table.append(generateHeader(), generateBody(month, year));
  //table.append(generateHeader());
  container.append(table);
}


generateCalender(wrapper, 6,2023);

console.log("execution finished");