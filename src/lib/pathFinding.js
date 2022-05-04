export function searchPath(graph, start, goal) {
    let predecessorMap = {start}
    let frontier = [start]

    while (!frontier.isEmpty) {
        const current = frontier[0]
        frontier.shift()

        if (current === goal) break

        graph[current].forEach(next => {
            if (!(next in predecessorMap)) {
                frontier.push(next);
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
    return path.reverse();
}