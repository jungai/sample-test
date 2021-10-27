function isOverlapXAxis({ max, min, current }) {
  return current.min <= max && current.min + current.max >= min;
}

function isOverlapYAxis({ max, min, current }) {
  return current.min <= max && current.min >= min;
}

function isOverlap(items, newItem) {
  const hasExist = items.filter((item) => {
    // x axis
    const minX = item.x;
    const maxX = item.x + item.width;

    // y axis
    const minY = item.y;
    const maxY = item.y + item.height;

    // new item (new insert)
    const currentMinX = newItem.x;
    const currentMaxX = newItem.x + newItem.width;
    const currentMinY = newItem.y;
    const currentMaxY = newItem.y + newItem.height;

    const overlap =
      isOverlapXAxis({
        max: maxX,
        min: minX,
        current: { max: currentMaxX, min: currentMinX },
      }) &&
      isOverlapYAxis({
        max: maxY,
        min: minY,
        current: { max: currentMaxY, min: currentMinY },
      });

    return overlap;
  });

  return hasExist.length > 0;
}

module.exports = {
  isOverlap,
};
