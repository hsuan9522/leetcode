const allPathsSourceTarget = (graph) => {
    let ans = [];
    graph[0].forEach((el, index) => {
        ans.push(path(graph[el], [0, el]));
    });
    function path(arr, p) {
        if (arr.length === 0) {
            if(p[p.length-1]!==graph.length-1) return
            return p;
        } else {
            arr.forEach((el) => {
                if(p[p.length-1] === graph.length-1) {
                    ans.push(p)
                }
                ans.push(path(graph[el], [...p, el]));
            });
        }
    }
    return ans.filter((el) => el);
};

export default allPathsSourceTarget;
