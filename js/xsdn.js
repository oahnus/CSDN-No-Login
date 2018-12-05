console.log('xsdnjs')

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function remove() {
  console.log('remove')
  document.cookie = 'userName=asdfa;domain=.csdn.net;path=/'
  // remove header adblock tip
  var csdnAdBlockTipElem = document.querySelector('body > div:nth-child(2)')
  csdnAdBlockTipElem && (csdnAdBlockTipElem.style.display = 'none')

  // reomve bottom login tip
  var csdnLoginTipElem = document.querySelector('body > div.pulllog-box')
  csdnLoginTipElem && (csdnLoginTipElem.style.display = 'none')
  // remove show more button and modal
  var csdnShowMoreButton = getElementByXpath('//*[@id="mainBox"]/main/div[1]/article/div[2]')
  csdnShowMoreButton && (csdnShowMoreButton.style.display = 'none')

  // change article content div height
  var articleContentDiv = getElementByXpath('//*[@id="article_content"]')
  articleContentDiv && (articleContentDiv.style.height = 'auto')

  var leftAdSliderDiv = getElementByXpath('/html/body/div[11]')
  leftAdSliderDiv && (leftAdSliderDiv.style.display = 'none')

  // getElementByXpath('//*[@id="mainBox"]/main/div[1]/div').scrollIntoView()
  var backTop = getElementByXpath('//*[@id="backtop"]')
  backTop && (backTop.click())

  // 阻止 xsdn 新的强制登录弹窗

  // remove 登录 js
  let scriptElems = document.getElementsByTagName('script')
  console.log(scriptElems)
  for (let i =0;i < scriptElems.length; i++) {
    let e = scriptElems[i]
    if (e.src.includes('check-adblock')) {
      e.parentNode.removeChild(e)
    }
  }

  // 更改倒计时
  let ele = document.getElementById('check-adblock-time')
  ele && (ele.innerHTML = 9999999)

  // 隐藏登录弹出框
  let loginDlg = getElementByXpath('/html/body/div[3]/div')
  loginDlg && (loginDlg.style.display = 'none')

  document.cookie = 'userName=asdfa;domain=.csdn.net;'
}

document.addEventListener('DOMContentLoaded', function () {
  remove()
});

window.onload = function() {
  console.log('onloaded')
  remove()
}

