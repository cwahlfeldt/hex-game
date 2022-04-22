# WIP hex grid game ("hex battler")

### TODO

- [x] Instantiate map with random un traversable tiles
- [ ] Create player on starting point of map
- [ ] Animate player moving to another tile (neighbor)
- [ ] Populate map with enemies
- [ ] Test redux slices
- [ ] Implement A*
- [ ] Come up with general rules of game
- [ ] Research artwork and story building
- [ ] Come up with theme for game

### Description (random babbling)
The game borrows a lot of gameplay ideas from [Hoplite](https://www.youtube.com/watch?v=aB_oG-_pYog), a simple little roguelike for mobile. I love the game, but I thought the gameplay and graphics could be improved. Ultimately I would love to have the game use 3d graphics. I also want the game to have a space theme similar to other games that have inspired this project ([FTL](https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/) and [Rymdkapsel](https://store.steampowered.com/app/253790/rymdkapsel/) to name a few but alot of the core mechanics still mimic hoplite).


I cant seem to get breadth first search right. Ive gone through redblobs implementation guides of hex grids and have that all figured out but pathfinding is proving to be difficult.

So I have a search function that implements the algorithm.

```
function searchPath(graph, start, goal) {
    let cameFrom = [start]
    let frontier = new Queue()
    frontier.enqueue(start)

    while (!frontier.isEmpty) {
        const current = frontier.dequeue()

        if (current === goal) break

        graph[current].forEach(next => {
            if (!cameFrom.includes(next)) {
                frontier.enqueue(next)
                cameFrom.push(next)
            }
        })
    }
    return cameFrom
}
```

my graph is a two dimensional array where each index corresponds to a tile on the map and the value of each is an array of indexes of neighbors of that tile.

Example:
```
const graph = [
    [3,1,4],
    [0,4,2,5],
    [1,5,6],
    [7,0,4,8],
    [0,3,8,1,5,9],
    [1,4,9,2,6,10],
    [2,5,10,11],
    [3,8,12],
    [3,7,12,4,9,13],
    [4,8,13,5,10,14],
    [5,9,14,6,11,15],
    [6,10,15],
    [7,8,13,16],
    [8,12,16,9,14,17],
    [9,13,17,10,15,18],
    [10,14,18,11],
    [12,13,17],1
    [13,16,14,18],
    [14,17,15]
]
```

The function returns the indexes of searched tiles.

Example 1: `searchPath(graph, 12, 13)` will return `[12, 7, 8, 13, 16, 3, 4, 9]`
Example 2: `searchPath(graph, 8, 1)` will return `[8, 3, 7, 12, 4, 9, 13, 0, 16, 1, 5, 10, 14, 17]`

Now I attempt to reconstruct a path with this function but I cant get it to work. It ends up with an infinite loop.
```
function findPath(cameFrom, start, goal) {
    let current = goal
    let path = []
    while (current !== start) {
        path.push(current)
        current = cameFrom[cameFrom.indexOf(current)]
    }
    return path
}
```

I have a feeling my graph data structure is off but I just don't know. Any help would be much appreciated. Thanks!