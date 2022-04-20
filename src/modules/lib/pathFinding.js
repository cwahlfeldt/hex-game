export function breadthFirstSearch(graph, start, goal) {
    let frontier = [start]
    let cameFrom = [start]

    while (frontier.length > 0) {
        const current = frontier[0]
        frontier.shift()

        if (current === goal) break

        graph[current].forEach(next => {
            if (!cameFrom.includes(next)) {
                frontier.push(next)
                cameFrom.push(next)
            }
        })
    }
    return cameFrom
}