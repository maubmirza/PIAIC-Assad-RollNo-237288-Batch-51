#;
Make;
a;
list;
of;
current;
users;
current_users = ["john", "mary", "alice", "bob", "eve"];
#;
Make;
another;
list;
of;
new users;
new_users = ["alice", "charlie", "john", "dave", "frank"];
#;
Convert;
current_users;
to;
lowercase;
for (; ; )
    ;
-insensitive;
comparison;
current_users_lower = [user.lower()];
for (user in current_users)
    ;
#;
Loop;
through;
new_users;
to;
check;
for (unique; usernames; )
    for (new_user in new_users)
        : #;
Check;
if (the)
    lowercase;
version;
of;
the;
new username;
is in current_users_lower;
if (new_user.lower() in current_users_lower)
    : print(f, "Sorry, the username '{new_user}' is not available. Please enter a new username.");
else
    : print(f, "The username '{new_user}' is available!");
#;
Note: The;
comparison;
is;
-insensitive;
due;
to;
the;
use;
of;
the;
lower();
method.
;
