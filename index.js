const hostname = this.location.hostname

const VOCABULARY = 'https://www.vocabulary.com/dictionary/'
const DUDEN_EN = 'http://www.duden.de/suchen/englisch/'

const hosts = {
  'www.vocabulary.com': VOCABULARY,
  'www.amazon.de': DUDEN_EN
}

const search = hosts[hostname]

document.ondblclick = function() {
  const selection = window.getSelection()
  const type = selection.anchorNode.nodeType
  if (search && type === Node.TEXT_NODE) {
    const text = selection.toString()
    const link = search + text
    window.open(link)
  }
}
