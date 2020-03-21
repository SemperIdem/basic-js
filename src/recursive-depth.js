module.exports = class DepthCalculator {
    calculateDepth(arr) {
           let depth = 1;
            for (element of arr) {
                let currentDepth = 1;
                if (element instanceof Array) {
                    currentDepth += this.calculateDepth(element);
                    depth = Math.max(depth, currentDepth);
            }
        }
        return depth;
        }
    };