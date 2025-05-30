function calculateLineLength(x1, y1, x2, y2) {
  // Apply the distance formula: √[(x2-x1)² + (y2-y1)²]
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

console.log(calculateLineLength(0, 0, 5, 5));
