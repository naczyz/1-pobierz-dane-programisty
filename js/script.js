$(document).ready(function () {
  $("#get-data").click(function () {
    $.getJSON(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
    )
      .done(function (data) {
        let pfirma = $("<p></p>").text(`Firma: ${data.firma}`);
        let pImie = $("<p></p>").text(`Imie: ${data.imie}`);
        let pNazwisko = $("<p></p>").text(`Nazwisko: ${data.nazwisko}`);
        let pZawod = $("<p></p>").text(`Zawod: ${data.zawod}`);

        let hr = $("<hr/>");

        let jqDiv = $("div");
        jqDiv.append(pfirma);
        jqDiv.append(pImie);
        jqDiv.append(pNazwisko);
        jqDiv.append(pZawod);
        jqDiv.append(hr);
      })
      .fail(function (error) {
        console.error(error);
      });
  });
});
