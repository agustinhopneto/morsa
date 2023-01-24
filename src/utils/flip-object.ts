export function flipObject(object: Record<string, unknown>) {
  const objectEntriesArray = Object.entries(object);

  const flippedEntriesArray = objectEntriesArray.map(([key, value]) => [
    value,
    key,
  ]);

  const flippedObject = Object.fromEntries(flippedEntriesArray);

  return flippedObject;
}
