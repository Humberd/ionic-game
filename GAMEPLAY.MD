# Team Clicker

## Stories:
### 1. Registration
As a user I want to create a new account.
I can do that by clicking a "Create account" button on the starting page
I am redirected to the "Login Page", where I provide:
 * Username
 * Email
 * Password

After clicking a "Create account" button I am autimatically logged in and redirected to the "Home Page"

### 2. Login
As a user I want to login using previously created account.
I can do that by clicking a "Login" button on the starting page.
I am redirected to the "Login Page", where I provide:
 * Username or Email
 * Password

After clicking a "Login" button I am redirected to the "Home Page"

### 3. "Home Page"
On the "Home Page" I can see a 2D map (not tiled), where I can see some clickable places, for example:
 * Caves
 * Buildings
 * Castles
 * Dungeons
 * Pyramides

Those places are separated from each other with nothing to click  in between.
For eaxmple map is 20x20. a Cave is in the [4;12] coordinate and the Castle is in the [13;19].
Only those places are clickable. The rest is just a background map.

### 4. Lobby
A a player I want to go to the lobby, where I can wait for other players or start a hunt alone (when this is possible)
I can to that by clicking an available place on the map.
The popup above the place would appear with a button "Go to Lobby".
After clicking the "Go to Lobby" buton I am redirected to the "Lobby Page"


## Definitions:

### 1. "Home Page"
On the "Home Page" user can see a 2D map with "Places" for example:
 * Caves
 * Buildings
 * Castles
 * Dungeons
 * Pyramides
Those places are separated from each other with nothing to click inbetween.
For eaxmple map is 20x20. a Cave is in the [4;12] coordinate and the Castle is in the [13;19].
Only those places are clickable. The rest is just a background map.
Many of those places are locked, which means that the user did not meet the requirements and thus cannot be started, for example:
 * too low level
 * no required item (key)
 * did not completed the required "Place" before
The "Places", which are unlocked, which mean thet the user met the requirements.
After clicking the "Place" the "Mission Info Dialog" would be shown at the bottom of the screen.

### 2. "Mission Info Dialog"
In the "Mission Info Dialog" user can see:
 * "Mission" icon
 * "Mission" icon
 * required level
 * completion exp
 * number of creatures
 * listed icons of creatures with names that can be encountered

There would also be a "Create Lobby" button, which would be greyed out, when user did not met the "Mission" requirements.
"Create Lobby" button would redirect user to the "Mission Lobby Page".
There would also be a "Join Lobby" button, which would be greyed out, when user did not met the "Mission" requirements.
"Join Lobby" button would redirect user to the "Mission Lobby Page".

### 3. "Mission Invitations Page"
"Mission Invitations Page" shows invitations from friends to join their Mission Lobbys.
Invitations can only be send when invited user has met mission requirements.
There would be a list of "Missions" with:
 * "Mission" icon
 * "Mission" name
 * username of a player, who invited the user
 * "Join" button

### 4. "Mission Lobby Page"
On the "Lobby Page" there is the same information from "Mission Info Dialog", but with non of those buttons
I, as a player in the "Lobby Players List", am highlighted with a different color.
At the top there is a status of the lobby:
 * private: only invited friends of the host can join
 * public: every player can join using using "Join Lobby" button from "Mission Info Dialog"

There is also a "Leave Lobby" button, which would remove player from the lobby.
When the leaving player is the host, the host rights are passed to the first joined user.
When the leaving player is the last one in the lobby, the lobby is disbanded.

Lobby player types
1. "Host"
    When the player is a host he has a 2 buttons:
     * Invite Friends, which would show a "Invite Friends Dialog"
     * Make public, which would allow all the players to join the lobby

    Right to each player on the list the "Host" hest a "REMOVE" button, which would remove a player from the lobby
2.  "Not Hoost"
    No additional features.

Player on the list has:
 * level
 * username
 * status: "HOST" / "PENDING" / "JOINED"

### 5. "Invite Friends Dialog"
On the "Invite Friends Dialog" there is a list of friend players that have met the mission requirements.
Each player has:
 * level
 * username
 * "Invite" button, which would send a player invitation and remove from this list.
