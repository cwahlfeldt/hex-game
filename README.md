# WIP hex grid game ("hex battler")

### TODO
- [x] Instantiate map with random non traversable tiles
- [x] Create player on starting point of map
- [x] Animate player moving to another tile (neighbor)
- [x] Populate map with enemies
- [x] Implement pathfinding
- [ ] redo state system
    - [ ] research more generic redux implementation
    - [ ] research different, performant, state systems
    - [ ] roll your own state system
    - [ ] keep it simple
- [ ] Come up with general rules of game and tdd the rules
- [ ] Research artwork and story building

### Description (random babbling)
The game borrows a lot of gameplay ideas from [Hoplite](https://www.youtube.com/watch?v=aB_oG-_pYog), a simple little roguelike for mobile. I love the game, but I thought the gameplay and graphics could be improved. Ultimately I would love to have the game use 3d graphics. I also want the game to have a space theme similar to other games that have inspired this project ([FTL](https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/) and [Rymdkapsel](https://store.steampowered.com/app/253790/rymdkapsel/) to name a few but alot of the core mechanics still mimic hoplite).

## Rules
### game setup

- [ ] create a randomised hex map with non traversable tiles
    - [ ] as you progress the amount of non traversable tiles will increase
- [ ] player is spawned on random tile of the map
    - [ ] must be spawned at least 4ish tiles away from non traversable tiles and enemies
    - [ ] 
