import {addHexagons, convertHexToPixel, direction, distanceBetweenHexagons} from "./hexagons.js";
import {Queue} from "./utilities.js";

export function searchPath(graph, start, goal) {
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

export function findPath(cameFrom, start, goal) {
    let current = goal
    let path = []
    while (current !== start) {
        path.push(current)
        current = cameFrom[current]
    }
    return path
}

function prepend(value, array) {
    let newArray = array.slice();
    newArray.unshift(value);
    return newArray;
}
function breadthFirstSearch(start) {
    /* see https://www.redblobgames.com/pathfinding/a-star/introduction.html */
    let cost_so_far = {}; cost_so_far[start] = 0;
    let came_from = {}; came_from[start] = null;
    let fringes = [[start]];
    for (let k = 0; fringes[k].length > 0; k++) {
        fringes[k+1] = [];
        for (let hex of fringes[k]) {
            for (let dir = 0; dir < 6; dir++) {
                let neighbor = hex.neighbor(dir);
                if (cost_so_far[neighbor] === undefined) {
                    cost_so_far[neighbor] = k+1;
                    came_from[neighbor] = hex;
                    fringes[k+1].push(neighbor);
                }
            }
        }
    }
    return {cost_so_far, came_from};
}

export function reconstructedPath(map, cameFrom) {
    let path = [];
    let d = [];
    cameFrom.forEach(hex => {
        const {x, y} = convertHexToPixel(map[hex].cubeCoords);
        path.push(map[hex]);
        d.push(d.length === 0? 'M' : 'L', x, y);
    })
    path.toString = () => d.join(" ");
    return path;
}
export function returnShortestPath(graph, start, end) {
    let queue = [{vertex: start, path: [start]}]
    let visited = []

    while (queue.length > 0) {
        const {vertex, path} = queue.shift()
        visited.push(vertex)
        graph.forEach((node, i) => {
            if (i === end) {
                path.push(end)
                return
            }

            if (visited.includes({vertex: i, path: node})) {
                queue = prepend(node, queue)
            }
        })
    }

    return queue
}
//
// function breadthFirstSearch(start, end) {
//     let visited = []
//     let fringes = [[start]];
//     while (!fringes.includes(end)) {
//         fringes.push([]);
//         for (let hex of fringes[k]) {
//             // for (let dir = 0; dir < 6; dir++) {
//             hex.neighbors.forEach(neighbor => {
//                 if (!visited.includes(neighbor)) {
//                     fringes[k+1].push(neighbor);
//                 }
//             })
//             // }
//         }
//     }
//     return visited;
// }

function breadthFirstSearch(graph, start, end) {
    let reached = [start]
    let frontier = new Queue();
    frontier.enqueue(start)
    while (frontier.length > 0) {
        const current = frontier.dequeue()
    }
}

// function hex_reachable(start, movement) {
//
//     fringes.push([start])
//     for each 1 < k ≤ movement) {}
//         fringes.append([])
//         for each hex in fringes[k-1]:
//             for each 0 ≤ dir < 6:
//                 var neighbor = hex_neighbor(hex, dir)
//                 if neighbor not in visited and not blocked:
//                     add neighbor to visited
//                     fringes[k].append(neighbor)
//
//     return visited
// }
// add start to visited
//
// for each 1 < k ≤ movement:
//     fringes.append([])
// for each hex in fringes[k-1]:
// for each 0 ≤ dir < 6:
// var neighbor = hex_neighbor(hex, dir)
// if neighbor not in visited and not blocked:
//     add neighbor to visited
// fringes[k].append(neighbor)
//
// return visited
//
// queue = [(start,[start])]
// visited = set()
//
// while queue:
// vertex, path = queue.pop(0)
// visited.add(vertex)
// for node in graph[vertex]:
// if node == end:
// return path + [end]
// else:
// if node not in visited:
// visited.add(node)
// queue.append((node, path + [node]))
//
// export function reconstructPath(cameFrom, start, goal) {
//     // console.log(cameFrom, goal)
//     let current = goal
//     let path = []
//     let i = 0
//     while (cameFrom.length - 1 !== i && current[i] !== start) {
//         // console.log(current, start, i)
//         path.push(current)
//         current = cameFrom[i]
//         i++
//     }
//     path.push(start)
//     console.log(path)
//     return path
// }


export function findPathD(graph, start, goal) {
    let frontier = [{neighbor: start.neighbor}]
    let cameFrom = [start]
    let costSoFar = [{neighbor: start.neighbor, weight: 0}]

    let i = 0
    while (frontier.length > 0) {
        const current = frontier[0]
        frontier.shift()

        if (current === goal) break

        graph[current].forEach(next => {
            console.log(current(next))
            const newCost = costSoFar[current.weight] + graph[current].weight
            if (!costSoFar.includes(next.weight) || newCost < costSoFar.weight) {
                costSoFar.push({neighbor: next.neighbor, weight: newCost})
                frontier.push({neighbor: next.neighbor, weight: newCost})
                cameFrom.push({neighbor: next.neighbor, weight: current.weight})
            }
        })
    }
    return cameFrom
}


export function path(coord1, coord2) {
    const hex1 = coord1
    const hex2 = coord2

    if (!hex1 || !hex2) {
        return undefined;
    }

    // const testPath = this.easyPath(coord1, coord2);
    // if (testPath) {
    //     return testPath;
    // }

    const destCoord = hex2.toString();

    const allPaths = {};
    const toExpand = {};
    let toExpandNext= [];

    const addPath = (path) => {
        const [last] = path.slice(-1);

        const minDist = distanceBetweenHexagons(last, hex2);
        toExpand[minDist] = toExpand[minDist] || {};
        toExpand[minDist][last.toString()] = path;
        allPaths[last.toString()] = path;
    };

    const readyNextIteration = () => {
        let minDistance = Number.POSITIVE_INFINITY;

        for (const key of Object.keys(toExpand)) {
            if (+key < minDistance) {
                minDistance = +key;
            }
        }

        if (minDistance < Number.POSITIVE_INFINITY) {
            toExpandNext = Object.values(toExpand[minDistance]);
            delete toExpand[minDistance];
        } else {
            toExpandNext = [];
        }
    };

    addPath([hex1]);
    readyNextIteration();

    while (!(destCoord in allPaths) && toExpandNext.length > 0) {
        for (const path of toExpandNext) {
            const hex = path[path.length - 1];

            for (const neighbour of this.neighbours(hex)) {
                if (allPaths[neighbour.toString()]) {
                    continue;
                }

                addPath([...path, neighbour]);
            }
        }

        readyNextIteration();
    }

    return allPaths[destCoord];
}

export function easyPath(coord1, coord2) {
    const hex1 = coord1;
    const hex2 = coord2;

    if (!hex1 || !hex2) {
        return undefined;
    }

    const path = [hex1];

    let currentHex = hex1

    while (currentHex.q !== hex2.q || currentHex.r !== hex2.r) {
        currentHex = addHexagons(hex1, hex2)

        if (!currentHex) {
            return undefined;
        }

        path.push(currentHex);
    }

    return path;
}


/**
 * Finds the shortest distance between two nodes using the A-star (A*) algorithm
 * @param graph an adjacency-matrix-representation of the graph where (x,y) is the weight of the edge or 0 if there is no edge.
 * @param heuristic an estimation of distance from node x to y that is guaranteed to be lower than the actual distance. E.g. straight-line distance
 * @param start the node to start from.
 * @param goal the node we're searching for
 * @return The shortest distance to the goal node. Can be easily modified to return the path.
 */

export function aStar(graph, start, goal) {


    //This contains the distances from the start node to all other nodes
    let distances = [];
    //Initializing with a distance of "Infinity"
    for (let i = 0; i < graph.length; i++) distances[i] = Number.MAX_VALUE;
    //The distance from the start node to itself is of course 0
    distances[start] = 0;

    //This contains the priorities with which to visit the nodes, calculated using the heuristic.
    let priorities = [];
    //Initializing with a priority of "Infinity"
    for (let i = 0; i < graph.length; i++) priorities[i] = Number.MAX_VALUE;
    //start node has a priority equal to straight line distance to goal. It will be the first to be expanded.
    priorities[start] = heuristic(start, goal);

    //This contains whether a node was already visited
    let visited = [];

    //While there are nodes left to visit...
    while (true) {

        // ... find the node with the currently lowest priority...
        let lowestPriority = Number.MAX_VALUE;
        let lowestPriorityIndex = -1;
        for (let i = 0; i < priorities.length; i++) {
            //... by going through all nodes that haven't been visited yet
            if (priorities[i] < lowestPriority && !visited[i]) {
                lowestPriority = priorities[i];
                lowestPriorityIndex = i;
                console.log(lowestPriorityIndex)
            }
        }

        if (lowestPriorityIndex === -1) {
            // There was no node not yet visited --> Node not found
            return -1;
        } else if (lowestPriorityIndex === goal) {
            // Goal node found
            // console.log("Goal node found!");
            return distances[lowestPriorityIndex];
        }

        // console.log("Visiting node " + lowestPriorityIndex + " with currently lowest priority of " + lowestPriority);

        //...then, for all neighboring nodes that haven't been visited yet....
        for (let i = 0; i < graph[lowestPriorityIndex].length; i++) {
            if (graph[lowestPriorityIndex][i] !== 0 && !visited[i]) {
                //...if the path over this edge is shorter...
                if (distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i] < distances[i]) {
                    //...save this path as new shortest path
                    distances[i] = distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i];
                    //...and set the priority with which we should continue with this node
                    priorities[i] = distances[i] + heuristic[i][goal];
                    // console.log("Updating distance of node " + i + " to " + distances[i] + " and priority to " + priorities[i]);
                }
            }
        }

        // Lastly, note that we are finished with this node.
        visited[lowestPriorityIndex] = true;
        //console.log("Visited nodes: " + visited);
        //console.log("Currently lowest distances: " + distances);

    }
}

function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
}