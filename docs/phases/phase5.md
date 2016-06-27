# Phase 5: Reminders and Garbage Collection, Fix Up

## Rails
### Models
* Reminders

### Controllers
* Api::RemindersController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)


### Stores
* Reminder

### Actions
* ApiActions.receiveAllReminders -> triggered by ApiUtil
* ApiActions.receiveSingleReminder
* ApiActions.deleteReminder
* ReminderActions.fetchAllReminders -> triggers ApiUtil
* ReminderActions.fetchSingleReminder
* ReminderActions.createReminder
* ReminderActions.updateReminder
* ReminderActions.destroyReminder

### ApiUtil
* ApiUtil.fetchAllReminders
* ApiUtil.fetchSingleReminder
* ApiUtil.createReminder
* ApiUtil.updateReminder
* ApiUtil.destroyReminder

## Gems/Libraries
