const card = document.querySelector(".flip-cat-card");
function setSheenPosition(xRatio, yRatio) {
    // This creates a "distance" up to 400 px each direction to offset the sheen
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    console.log("sheen offsets", xOffset, yOffset)
    card.style.setProperty('--sheenX', `${xOffset}px`)
    card.style.setProperty('--sheenY', `${yOffset}px`)
}

function handleMouseMove(e) {
    console.log("mouseEvent", e);
    const height = window.innerHeight;
    const width = window.innerWidth;
    // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
    const yAxisDegree = e.pageX / width * 40 - 20;
    const xAxisDegree = e.pageY / height * -1 * 40 + 20;
    card.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
    // Set sheen position
    setSheenPosition(e.pageX / width, e.pageY / width);
}

document.onmousemove = handleMouseMove;