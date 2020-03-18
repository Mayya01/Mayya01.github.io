/**
 * Объявление функций чтения/записи переменных cookie-хранилища
 * (Если они не объявлены)
 */
if (typeof setCookie != 'function') {
    function setCookie(name, value, expires) {
        var date = new Date(new Date().getTime() + expires * 1000);
        document.cookie = name + "=" + value + '; expires=' + date + '; path=/';
    }
}
if (typeof getCookie != 'function') {
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}
