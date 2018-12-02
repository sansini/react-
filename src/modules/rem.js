function remFn () {
    document.getElementsByTagName('html')[0].style.fontSize =
      document.documentElement.clientWidth /6.4+ 'px'
  }
  remFn()
  window.onresize = remFn
  