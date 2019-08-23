// from data.js
var tableData = data;
var table = document.getElementById("ufo-table");
var button = document.getElementById("filter-btn");

function filteredList() {

  var dateFilter = document.getElementById("datetime").value;
  var cityFilter = document.getElementById("city").value;
  var stateFilter = document.getElementById("state").value;
  var countryFilter = document.getElementById("country").value;
  var shapeFilter = document.getElementById("shape").value;

  if (dateFilter.length !== 0 || cityFilter.length !== 0 || stateFilter.length !== 0 || countryFilter.length !== 0 || shapeFilter.length !== 0) {
    var filterData = tableData.filter(function (ufo) {
        return (
        (ufo.datetime === dateFilter   || dateFilter.length === 0) &&
        (ufo.city === cityFilter       || cityFilter.length === 0) &&
        (ufo.state === stateFilter     || stateFilter.length === 0) &&
        (ufo.country === countryFilter || countryFilter.length === 0) &&
        (ufo.shape === shapeFilter     || shapeFilter.length === 0)
        );
      });
    } 
  else {
    var filterData = tableData;
    }
  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
     }
  
  filterData.forEach(tableList);

}

function tableList(ufo) {

    // var table = document.getElementById("ufo-table");
    var row = table.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var datetime = row.insertCell(0);
    var city = row.insertCell(1);
    var state = row.insertCell(2);
    var country = row.insertCell(3);
    var shape = row.insertCell(4);
    var durationMinutes = row.insertCell(5);
    var comments = row.insertCell(6);

    datetime.innerHTML = ufo.datetime;
    city.innerHTML = ufo.city;
    state.innerHTML = ufo.state;
    country.innerHTML = ufo.country;
    shape.innerHTML = ufo.shape;
    durationMinutes.innerHTML = ufo.durationMinutes;
    comments.innerHTML = ufo.comments; 
}

var table = document.getElementById("ufo-table");

tableData.forEach(tableList);