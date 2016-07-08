module.exports = {
  fetchAllGroups: function(cb) {
    $.ajax({
      url: '/groups',
      type: "GET",
      success (resp) {
        cb(resp);
      }
    });
  },

  fetchGroup: function(id, cb) {
    $.ajax({
      url: `/groups/${id}`,
      type: "GET",
      success (resp) {
        cb(resp);
      }
    });
  },

  createGroup(group, cb, error){
    $.ajax({
      url: `/groups`,
      type: 'POST',
      dataType: 'JSON',
      data: {group: group},
      success (resp) {
        cb(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;

				error("new", errors);
      }
    });
  },

  updateGroup(group, cb, error){
    $.ajax({
      url: `/groups/${group.id}`,
      type: 'PATCH',
      dataType: 'JSON',
      data: {group: group},
      success (resp) {
        cb(resp.id);
      },
      error(xhr) {
				const errors = xhr.responseJSON;

				error("edit", errors);
      }
    });
  },

  deleteGroup(id) {
    $.ajax({
      url: `/groups/${id}`,
      method: "delete",
      dataType: "JSON",
      data: { group: {id: id}},
      success() {
        return;
      }
    });
  }
};
