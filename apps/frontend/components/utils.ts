export function debounce(
  func: (...params: any[]) => any,
  timeout: number = 300,
) {
  let timer: number | undefined = undefined;
  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };
}
