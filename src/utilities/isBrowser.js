export function isBrowser() {
  return window && window.navigator;
}

export function isServer() {
  return !isBrowser();
}
