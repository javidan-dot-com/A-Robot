//Meadowfield

// Meadowfield Village is consist of 11 places with 14 roads 
// between them

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

    function buildGraph(edges) {
        let graph = Object.create(null);
        function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
            console.log([to]);
            } else {
            graph[from].push(to);
            }
        }
        for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
        }
        return graph;
    }

    const roadGraph = buildGraph(roads);
    console.log(roadGraph);

// The Task

// Our robot will be moving around the village. There are parcels in various places, each addressed to some other place. The robot picks up
// parcels when it comes to them and delivers them when it arrives at their
// destinations.

class VillageState {
    constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
    }
    
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
                return new VillageState(destination, parcels);
        }
    }
}





