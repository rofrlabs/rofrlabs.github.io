Papa.parse(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSs_hlQQBfkHaICGp1lMTAxo0rZM2i0rY5hsQnK0AnxA4Tzd0JZ2K9e8jjcet41zO5Mr04MXHWjzOcL/pub?gid=0&single=true&output=csv",
  {
    download: true,
    header: true,
    complete: function (results) {
      var data = results.data;
      updateValues(data);
    },
  }
);

function updateValues(data) {
  console.log(data);
  for (let elem of data) {
    $("#" + elem.id).html(elem.value);
  }
}
