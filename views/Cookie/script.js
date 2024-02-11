const cookieBox = document.querySelector('.wraper'),
accepBtn = cookieBox.querySelector('.set-cookie')

accepBtn.onclick = () => {

  // tiempo de expiracion -> 60s 60m 24h 30d == 1 mes
  document.cookie = 'CokkyeBy=Jair; max-age='+ 60*60*24*30

  if (document.cookie) {
    cookieBox.classList.add('hide')
  }
  else {
    alert('Cokkie no creada o encontrada')
  }

}

let checkedCookie = document.cookie.indexOf('CokkyeBy=Jair')
checkedCookie != -1 ? cookieBox.classList.add('hide') : cookieBox.classList.remove('hide')