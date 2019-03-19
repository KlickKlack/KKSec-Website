window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-73946831-6');

(function() {
try {
  var setCookie = function(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  }
  var getCookie = function(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset)
        if (end == -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end));
      }
    }
    return(setStr);
  }
  var switchPage = function (language) {
    if (getCookie('kksec-auto-locale') !== 'redirected') {
      switch (language) {
        case 'zh':
        case 'zh-tw':
        case 'zh-cn':
          window.location.href = '/tw/';
          return true;
        default:
          return true;
      }
    }
    return true;
  };

  // detect window.navigator.languages
  var found = false;
  if (typeof(window.navigator.languages) === 'object') {
    for (var index in window.navigator.languages) {
      console.log(window.navigator.languages[index].toLowerCase());
      found = switchPage(window.navigator.languages[index].toLowerCase());
      if (found) break;
    }
  }
  if (!found) {
    var lang = window.navigator.userLanguage || window.navigator.language;
    var relang = lang.toLowerCase();
    found = switchPage(relang);
  }
  else {
    if (getCookie('kksec-auto-locale') !== 'redirected') {
      date = new Date();
      date.setHours(date.getHours() + (24*7));
      setCookie('kksec-auto-locale', 'redirected', date.toUTCString(), '/');
    }
  }
} catch (e) {
  console.log(e);
}
});