export function get(key: string) {
    if (!isStorageAvailable()) return null;
    const value = localStorage.getItem(key);
    if (!value) return  null;
    return JSON.parse(value);
}

export function set(key: string, value: string) {
    if (!isStorageAvailable()) return null;
    localStorage.setItem(key, JSON.stringify(value));
}

export function remove(key: string) {
    if (!isStorageAvailable()) return null;
    localStorage.removeItem(key);
}

export function clear() {
    if (!isStorageAvailable()) return null;
    return localStorage.clear();
}

function isStorageAvailable(): boolean {
    return !!(navigator.cookieEnabled || window?.localStorage);
}