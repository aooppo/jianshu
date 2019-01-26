import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    a {
        cursor: pointer;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @font-face {
        font-family: 'iconfont';
        src: url('./statics/iconfont/iconfont.eot?t=1548401273075'); /* IE9 */
        src: url('./statics/iconfont/iconfont.eot?t=1548401273075#iefix') format('embedded-opentype'),
            /* IE6-IE8 */
                url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPQAAsAAAAAB8wAAAOCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDCIJuATYCJAMQCwoABCAFhG0HSBvgBsiemjwJFBYLpGYALMDwJQQR2X1fPd37bm7m6OjTEaEIzIhQDr8jMpIiR8T/zmUGQC5yhOx67W8v5ZfLyBFqBE+op5jU7IRcD6nVActA6v//OVzaFJ/fslzmmBz1Aoy3Bjb2AAm4QE7QbzmceRUeXZshQKCKaOw6dq5uRq4YpJcAMnOaxCHXlAKrSRc8QqpkoiGbSPButbsNbPR/Lx9oIq7gSBQysO/kEgHlv/Z43UL7/69gpIuAOZ4OEKeBAvVAGMjUUsN4HMJAPRwIenNHWoDweByMVVf4usX/MWsvAk//5YGgOJAUJDUDgGY4qPA62mQIvC7kUyZsASk4gBcywQPpwAIQRyGSinEWN1xGhnlfGH1KJry8DH59HfL8POjpaTTjDQxoyYe9vCxsjWrxCYMzBoYZcdjwmaqwVDKUO49rIUg4H9bclZVDhgz4B7YcdHCYFUfi2ksiQ4ZIcW0DK8PgHdsYWCC0zFVzD9i6WVY0YqF8Skjb4rHTJ6sPOr1f7161ffrkiTrR+5883mf7DQboft335Mn+V9v12jW3nVIha7vu0KvXdDtQ4TPzJyR+nB365ITzk8vuwzveg/f/8bzIuXUt9u3Hk9xX+916AbtIbyhO7RoYEa3Ea1Ts0Tbzd3Qbuwwr/F1W/WP1Kv4zds5159Y2G27nZFVvfCV8dkDYm5erj3d7ujjvVMXikNAYfLzsbbekzvXvFjbWq3NQbQkyQcD/9ITW8/HrSogO06W/7m/43nre9Jjsll99NAAezf3sA9t/Rjshev/M1swfxWyZZwabKM00js0wjUajRC8cEAjA74lAHj9jiApbp4LgKYzBkUYlKJ5qSMPWg4RIM0jhaQOBupRNj+RDcUAsHajDCAIhh21wZHEOlByukYb9hoQi/iBFjjhAYLDkLxipISR0mA8cAwFb+jDhDV1kauYepDeC1KVyNMn2ca1AbcSNExo0yobLQAc6xhBbt5TImIhFami4FG0Hqmpgkxoy8CzWypiZGddwctmbYnlDQ+50gAJwMAABjIU+MAQeAx3RLc5wz32/EUCiCxUOWpNTp2wFoNggjWMSiCW+BbJMoLfKuZZrbHQjkQiDIYIRoRhoYEqRDlBpwABjlreTAXgYsVh7+EwyicOFxLaC2PlF2hMuAQJkERMnKiYJYfI4XRI4mbh2+3bjPG+hRQxvBV4hOkIAAA==')
                format('woff2'),
            url('./statics/iconfont/iconfont.woff?t=1548401273075') format('woff'),
            url('./statics/iconfont/iconfont.ttf?t=1548401273075') format('truetype'),
            /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
                url('./statics/iconfont/iconfont.svg?t=1548401273075#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: 'iconfont' !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
    }
`
