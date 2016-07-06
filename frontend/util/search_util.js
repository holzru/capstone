module.exports = {
  fetchSearch: function(query, cb) {
    $.ajax({
      url: '/search',
      type: "GET",
      data: {query: query},
      dataType: "JSON",
      success (resp) {
        cb(resp);
      }
    });
  }
};
