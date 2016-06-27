# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Member Cycles

### Members API Request Actions

* `fetchAllMembers`
  0. invoked from `MembersIndex` `didMount`/`willReceiveProps`
  0. `GET /members` is called.
  0. `receiveAllMembers` is set as the callback.

* `createMember`
  0. invoked from sign up button `onClick`
  0. `POST /members` is called.
  0. `receiveSingleMember` is set as the callback.

* `fetchSingleMember`
  0. invoked from `MemberDetail` `didMount`/`willReceiveProps`
  0. `GET /members/:memberid` is called.
  0. `receiveSingleMember` is set as the callback.

* `updateMember`
  0. invoked from `Member Form` `onSubmit`
  0. `POST /members/memberid` is called.
  0. `receiveSingleMember` is set as the callback.

* `destroyMember`
  0. invoked from delete member button `onClick`
  0. `DELETE /member/:memberid` is called.
  0. `removeMember` is set as the callback.

### Member API Response Actions

* `receiveAllMembers`
  0. `Member` store updates `_members` and emits change.

* `receiveSingleMember`
  0. `Member` store updates `_members[id]` and emits change.

* `removeMember`
  0. `Member` store removes `_members[id]` and emits change.

### Store Listeners

* `MemberIndex` component listens to `Member` store.
* `MemberDetail` component listens to `Member` store.


## Event Cycles

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `EventsIndex` `didMount`/`willReceiveProps`
  0. `GET /events` is called.
  0. `receiveAllEvents` is set as the callback.

* `createEvent`
  0. invoked from new Event button `onClick`
  0. `POST /events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `fetchSingleEvent`
  0. invoked from `EventDetail` `didMount`/`willReceiveProps`
  0. `GET /events/:eventid` is called.
  0. `receiveSingleEvent` is set as the callback.

* `updateEvent`
  0. invoked from `EventForm` `onSubmit`
  0. `POST /events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `destroyEvent`
  0. invoked from delete Event button `onClick`
  0. `DELETE /events/:eventid` is called.
  0. `removeEvent` is set as the callback.

### Events API Response Actions

* `receiveAllEvents`
  0. `Event` store updates `events` and emits change.

* `receiveSingleEvent`
  0. `Event` store updates `events[id]` and emits change.

* `removeEvent`
  0. `Event` store removes `_events[id]` and emits change.

### Store Listeners

* `EventsIndex` component listens to `Event` store.

## Group Cycles

### Groups API Request Actions

* `fetchAllGroups`
  0. invoked from `GroupsIndex` `didMount`/`willReceiveProps`
  0. `GET /groups` is called.
  0. `receiveAllGroups` is set as the callback.

* `createGroup`
  0. invoked from new Group button `onClick`
  0. `POST /groups` is called.
  0. `receiveSingleGroup` is set as the callback.

* `fetchSingleGroup`
  0. invoked from `GroupDetail` `didMount`/`willReceiveProps`
  0. `GET /groups/:groupid` is called.
  0. `receiveSingleGroup` is set as the callback.

* `updateGroup`
  0. invoked from `GroupForm` `onSubmit`
  0. `POST /groups` is called.
  0. `receiveSingleGroup` is set as the callback.

* `destroyGroup`
  0. invoked from delete Group button `onClick`
  0. `DELETE /groups/:groupid` is called.
  0. `removeGroup` is set as the callback.

### Groups API Response Actions

* `receiveAllGroups`
  0. `Group` store updates `groups` and emits change.

* `receiveSingleGroup`
  0. `Group` store updates `groups[id]` and emits change.

* `removeGroup`
  0. `Group` store removes `_groups[id]` and emits change.

### Store Listeners

* `GroupsIndex` component listens to `Group` store.



## SearchSuggestion Cycles

* `fetchSearch Suggestions`
  0. invoked from `GlobalSearchBar` `onChange` when there is text
  0. `GET /events`, `GET /members`, `GET /groups`  are called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `GlobalSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
