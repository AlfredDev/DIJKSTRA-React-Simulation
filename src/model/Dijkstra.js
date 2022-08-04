



function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA,nodeB) => nodeA.distance - nodeB.distance)
}