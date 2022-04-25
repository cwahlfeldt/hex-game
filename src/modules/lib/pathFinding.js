import {Queue} from "./utilities.js";

export function searchPath(graph, start, goal) {
    let predecessorMap = {start}
    let frontier = new Queue()
    frontier.enqueue(start)

    while (!frontier.isEmpty) {
        const current = frontier.dequeue()

        if (current === goal) break

        graph[current].forEach(next => {
            if (!(next in predecessorMap)) {
                frontier.enqueue(next);
                predecessorMap[next] = current;
            }
        });
    }
    return predecessorMap;
}

export function findPath(predecessorMap, start, goal) {
    let current = goal;
    let path = [];
    while (current !== start) {
        path.push(current);
        current = predecessorMap[current];
    }
    return path;
}