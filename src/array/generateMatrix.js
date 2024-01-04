export function generateSpiralMatrix(n) {

    const result = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

    let loopNum = n >> 1;
    let offset = 1;
    let startX = 0;
    let startY = 0;

    let row = startX;
    let col = startX;

    let count = 1;

    while (loopNum--) {
        row = startX;
        col = startX;

        for (; row < n - offset; row++) {
            result[col][row] = count++;
        }
        for (; col < n - offset; col++) {
            result[col][row] = count++;
        }

        for (; row > startX; row--) {
            result[col][row] = count++;
        }

        for (; col > startY; col--) {
            result[col][row] = count++;
        }



        startX++;
        startY++;

        offset++;
    }
    if (n % 2 === 1) {
        result[startY][startX] = count;
    }

    return result;

}