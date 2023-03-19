
export function useLocalStorage () {
  const getLocalStorage = (item) => {
    return JSON.parse(window.localStorage.getItem(item)) || []
  }

  const updateLocalStorage = (key, state) => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }

  return { getLocalStorage, updateLocalStorage }
}
