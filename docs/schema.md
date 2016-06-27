# Schema Information

## members
    column name | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | text      | not null


## Groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
creator_id  | integer   | not null, foreign key
title       | string    | not null
description | string    |
member_ids  | integer   | foreign key

## Events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
member_ids  | integer   | not null, foreign key
group_id    | integer   | not null, foreign key
description | text      | not null
date        | datetime  | not null
location    | string    | not null
type        | string    | not null
creator_id  | integer   | not null, foreign key
