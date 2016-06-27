# Phase 1: User Authentication, Group Model and JSON API (2 days)

## Rails
### Models
* User
* Group
* Event


### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* GroupsController (create, destroy, index, show, update)
* EventsController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* users/show.html.erb
* session/new.html.erb
* groups/index.json.jbuilder
* groups/show.json.jbuilder

## Flux
### Views (React Components)
Member Details
Group Details
Group Member Index
Group index

### Stores
Group Store
Member Store

### Actions
receiveAllMembers
receiveSingleMember
removeMember
MemberIndex
MemberDetail

### ApiUtil
fetchAllMembers
createMember
fetchSingleMember
updateMember
destroyMember

## Gems/Libraries
* BCrypt (Gem)
* Flux Dispatcher (npm)
