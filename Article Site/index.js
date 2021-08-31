if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  document.write("mobile device");
window.location.href = 'm.index.html';
}else{
  // false for not mobile device
  document.write("not mobile device");
}