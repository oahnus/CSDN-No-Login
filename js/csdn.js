console.log('csdnjs')

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function remove() {
    // remove header adblock tip
    var csdnAdBlockTipElem = getElementByXpath('/html/body/div[2]/div')
    csdnAdBlockTipElem && (csdnAdBlockTipElem.style.display = 'none')

    // reomve bottom login tip
    var csdnLoginTipElem = getElementByXpath('/html/body/div[7]')
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
}

var count = 0

var csdnInterval = setInterval(function() {
    if (count < 5) {
        console.log('remove')
        remove()
        count++
    }
}, 300)

window.onload = function() {
    remove()
    clearInterval(csdnInterval)
}