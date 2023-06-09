

The game "Hunter" aka "Totally NOT Duck Hunt" is a simple game requiring players to click on multiple birds, accumulating score and trying not to lose all 5 of their lives. While it may not be clear and present, this game was inspired by the classic Nintendo game "Duck Hunt". However, instead of round based gameplay, the gameplay loop only ends when the full lives are lost. The game functions around mostly appending and removing elements in the DOM such as the menu as well as the birds. The birds will despawn when hitting the set boundary as well as after being hit by the player. I got the idea from this game after working through the class' game assignment after working out the mechanics of removing an item on a click as well as creating moving enemies. I figured that surely i would be able to make a simple game with these easy mechanics. I was wrong. The game works mostly as intended with the slight bug of having to actually reload the window instead of being able to return to the menu and start again after losing. If trying to restart the lives will be lost from rapidly from seemingly invisible birds. Not sure how to correct yet but it at least almost works.

        CREDITS
-------------------------
Background music: https://freesound.org/people/lextrack/sounds/272417/

CHALLENGES:

- scoping issue with creating menu buttons
- custom cursor on body, body element is NOT fullscreen by default.
- scoping issues with everything actually.
- dragging enemy img
- randomizing spawn side/height
- event listener to delete the enemy and take a life
- lives decreasing infinitely for one enemy
- having to stop things by naming them instead of them being anonymous and inline
- more scoping issues...
- lives still lost for shot enemies