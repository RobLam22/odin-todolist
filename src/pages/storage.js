function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export const getStorage = () => {
    if (storageAvailable("localStorage")) {
        console.log("localStorage online")
        // Yippee! We can use localStorage awesomeness
      } else {
        console.log("localStorage offline")
        // Too bad, no localStorage for us
      }
}

export const populateStorage = (key, data) => {
  localStorage.setItem(key, data)
}