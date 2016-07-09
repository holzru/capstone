# LetsMeet

[LetsMeet live][heroku] **NB:** This should be a link to your production site

[heroku]: https://thawing-brook-34178.herokuapp.com/#/?_k=xtohni

LetsMeet is a full-stack web application inspired by Evernote.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

 **NB**: don't copy and paste any of this.  Many folks will implement similar features, and many employers will see the READMEs of a lot of a/A grads.  You must write in a way that distinguishes your README from that of other students', but use this as a guide for what topics to cover.  

### Single-Page App

LetsMeet is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

```ruby
class Api::SessionsController < ApplicationController
    def get_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

### Group Rendering and Editing

  On the database side, the groups and events are stored in multiple tables in the database, which contains columns for `id`, `location`, `description`, and `updated_at`.  Upon login, an API call is made to the database group index database and renders all groups. These groups are held in the `GroupStore`.

  Groups are rendered with an event index, of the groups events as well as, members and group info.

![image of group index](http://res.cloudinary.com/dywbzmakl/image/upload/v1468023045/splash-snap_pmhxwf.png)
![image of group detail](http://res.cloudinary.com/dywbzmakl/image/upload/v1468023307/user_detail_bfcrku.png)

Note editing is implemented using modals.

### Events

Events were implemented.

`Events` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Search

Searching groups, events, users by name is a standard feature available on the splash page.
