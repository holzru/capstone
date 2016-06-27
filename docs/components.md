## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  **Member**
    * Search
    * Member Form
    * Member Detail view
    * Member Edit Form
  **Events Index**
    * Search
    * Event Items
    * Event Form
    * **EventDetail**
      * EventEditArea
  **GroupIndex**
    * Search
    * Group Items
    * Group Form
    * **Group Detail View**
        * Group Edit Form






## Routes

* **component:** `App` **path:** `/`
  * **component:** `Members` **path:** members
    * **component:** `MemberForm` **path:** `members/new`
    * **component:** `MemberDetail` **path:** `members/:memberId`
    * **component:** `MemberEdit` **path:** `members/:memberId/edit`
  * **component:** `EventIndex` **path:** events
    * **component:** `EventDetail` **path:** `events/:eventId`
      * **component:** `EventEdit` **path:** `events/:eventId/edit`
      * **component:** `EventForm` **path:** `events/new`
    * **component:** `EventForm` **path:** `events/new`
  * **component:** `Groups` **path:** groups
    * **component:** `GroupForm` **path:** `groups/new`
    * **component:** `GroupDetail` **path:** `groups/:groupId`
    * **component:** `GroupView` **path:** `groups/:groupId`
      * **component:** `GroupEdit` **path:** `groups/:groupId/edit`
