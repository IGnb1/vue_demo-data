export const myColor = {
  inserted (el, binding) {
    console.log(el, binding)
    el.style.color = binding.value
  }
}
export const myFont = {
  inserted (el, binding) {
    el.style.fontSize = 30 + 'px'
  }
}
