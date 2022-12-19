const callback = (): number => {
  return 12;
}
window.setTimeout(callback, 1000) // callback это ссылка, указывать без скобочек

export {}