const STORAGE_KEY = 'carefinder-ng-favorites';

export function getStoredFavorites() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(favorites) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(hospitalId) {
  const current = getStoredFavorites();
  const next = current.includes(hospitalId)
    ? current.filter((id) => id !== hospitalId)
    : [...current, hospitalId];

  saveFavorites(next);
  return next;
}
