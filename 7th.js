function memoize(fn, maxSize = 5) {
  const cache = new Map(); // Maintains insertion order (used for LRU eviction)

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key); // Return cached result
    }

    const result = fn(...args);

    // Add to cache
    cache.set(key, result);

    // Evict oldest if cache exceeds max size
    if (cache.size > maxSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    return result;
  };
}
