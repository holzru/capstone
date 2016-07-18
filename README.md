# LetsMeet

[LetsMeet live][LetsMeet]

[LetsMeet]: https://thawing-brook-34178.herokuapp.com/#/?_k=xtohni

LetsMeet is a full-stack web application inspired by Meetup.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

##Features & Implementation
###Splash & Global Search

LetsMeet allows the user access to a community of interest based groups who host social events.

LetsMeet is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

Users arrive to a splash page with the global search bar and pictures each representing individual groups.
Group descriptions are done with tooltips, interactive text boxes with the description and title of the group or event.

![image of group index](http://res.cloudinary.com/dywbzmakl/image/upload/v1468023045/splash-snap_pmhxwf.png)

The global search filters users, groups, and events by name/title and delivers matching results
using a custom SQL call built in ActiveRecord.

```ruby
def show
  query = params[:query]

  @groups= Group.where("name ILIKE ?", "%#{query}%")

  @users = User.where("username ILIKE ?", "%#{query}%")

  @events = Event.where("title ILIKE ?", "%#{query}%")

  render json: {groups: @groups, users: @users, events: @events}
end
```

While the search results return a loading graphic displays.

![image of group index](http://res.cloudinary.com/dywbzmakl/image/upload/v1468812436/search_animation_ojakkg.jpg)

Results are dynamically loaded on page and sorted by category.

On the database side, the groups and events are stored in multiple tables in the database, which contains columns for `id`, `location`, `description`, and `updated_at`.  Upon login, an API call is made to the database group index database and renders all groups. These groups are held in the `GroupStore`.


### Group Rendering and Editing

Group Show pages are rendered with an event index, of the groups events as well as, members and group info.

![image of group detail](http://res.cloudinary.com/dywbzmakl/image/upload/v1468023307/user_detail_bfcrku.png)

The groups were eager loaded to avoid async issues and loading time, using custom built objects
in manual Ruby instead of jBuilder to avoid unnecessary database querying.

```ruby
def show
  @group = Group.find(params[:id])
  render json: {group: @group, members: @group.members, creator: @group.creator, events: @group.events}
end
```

Group editing and creation are implemented using a single modal partial, whose content is determined by formType props passed by the respective action's button. Only the creators can
edit or destroy the group.

```javascript
getInitialState() {
  return (this.props.formType === "new" ? {
    name: "",
    location: "",
    pic_url: "",
    description: ""
  } : {
    name: this.props.group.name,
    location: this.props.group.location,
    pic_url: this.props.group.pic_url,
    description: this.props.group.description
  });
},
```


### Events

Event show page:
![image of event detail](http://res.cloudinary.com/dywbzmakl/image/upload/v1468814095/event_detail_rkgpg0.jpg)

Similar to the groups the events were eager loaded to avoid async issues and loading time, using custom built objects in manual Ruby instead of jBuilder to avoid unnecessary database querying.

```Ruby
def show
  @event = Event.find(params[:id])
  @event_comments = []
  @event.comments.each do |comment|
    @event_comments << {comment: comment, author: comment.author}
  end
  render json: {event: @event, group: @event.group, attendees: @event.attendees, creator: @event.creator, comments: @event_comments}
end
```

Events feature comment boards for event attendees, displayed using a comment index component.

```javascript
<div>
  <h4 className="comment-board-title">Comments</h4>
  <div className="comment-board">
    {this.comment_render()}
    <form className="new-comment-form">
      <input type="text" placeholder="Comment" className="comment-input" onChange={this.handleInput} value={this.state.body}/>
      <button onClick={this._submitComment} className="btn-success">Create Comment</button>
    </form>
</div>
</div>);
```

Again, similar to the Groups Events can only be edited and destroyed by their creators.
