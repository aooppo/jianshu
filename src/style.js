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
        background: #3f3f3f;
        color: #c8c8c8;
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
    @font-face {font-family: "iconfont";
  src: url('./statics/iconfont/iconfont.eot?t=1548516460940'); /* IE9 */
  src: url('./statics/iconfont/iconfont.eot?t=1548516460940#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQcAAsAAAAACGAAAAPPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDeINOATYCJAMUCwwABCAFhG0HTxthB1FULspkPyRJAgtY2AahAwAACFRBQQQ/oAAgBuLh/9f+t8+V+fPvfPEkSRyx6qvjifzSTxCKJRLeIGVCIerqYiXM1dre0RJ2Oh5Jpkn7yd6b7SPTaZmUCBFCY0ivmmQOcCUymZPRAiphZE/8/5ZYOKY+LQFzdrtLNVUk/RSApwQ6WERhgRw0QH4w/jB2E+VBHCbQbOrQb1gfzlpdAUYF4iTaZVo9pVBq0kMvdCULi3ip6tPz9Akv+Ofjv3PBRFIzMPHmZCm1ya/hz61cND72gCLwxtNBW0bGEU0hHpYaTphh4IipOb+zXKFpekn6Nfxa/XXpz61xxBXuSN4gby9/vCwRHZA6A66IwcIvVswg+MXPLZNpiwwyf9yCEu5rIQ0D3uEHALh1l2ZJkXZn2Oi4uZl6ftZ5oVCKImk0dHFBnJ8HILFnwE52o6hsUoHI9Fy4AHkb5klgqr2YIkkprujCDS1S5jUAZyPZPFliWb19GiRY3gt5Bc+x1gLQgmWZpeYQK0aomF9oSIwPgaJh1to1DEMoUgUVF7OQDXXAcyWMaJKkF/Ttigj4tohGCqLW0akJKWLmQvFIshdeX0MS3Xd91UvXRydOgH2w9/q677Eebm3h9ZAlZtXDBri5BetFlrg9b6j69YzX9TT4Pe/tfaeSaoZXjo9X4qaF4CXTBbo/f8qCr0X375JU5f9WzwWWJzYnspYn4Rz/+XUqxtiFwM1Doo1pdL+NH6Vt6Kpg1Uw5UY6MZvdndTDVfw1AaXvC/L9Ftj9KbYK/bB1J+FKtpg+GY1XOgCvCW/MKv3+oHrO7aU2eFMsVFGJdGxP5YKfh0/09phKudLLmd7YCXgDGz3AcKnLKaC5DEHoCvWH+X/+OZzlhc4Gchl/l+6GA7ykfIrFgfFzkx/w6mda8f8xrWVZcAVDWYhdjrm2sziQUklPX8GctS37jyFdbpxJ6qzEkUzYg620hC/YIqsEF6PQuQ3NovXywrGCKMo0DLwHCgjckcz5CtuCDLNgvVGv+0FkICM394N1wsBPRLBYpyAgl8GzwQ9NEITU1g/QjulXEiqSAk69YlL4bhqfOZMNrTLAYY0qZ4Y4oTYFKSWNYCcdhFKWQpaQBCup5aZSN+6cnZQ/qicRYa7qugBiCJMA9AZ+QSihamzRz7z9CrkqEKWpKOsxXqFDyOwdDPYMWyLU0aVVyLd1LN64RQpQ8TCmkYmAl6lAEAymQlfcLIIH0eD18mbG+VE21lfbml8fPuA0asFmNFDlK1Oi0SXDiShb4lGSlJtkNs+D2ZfToiigUoZ9oGgA=') format('woff2'),
  url('./statics/iconfont/iconfont.woff?t=1548516460940') format('woff'),
  url('./statics/iconfont/iconfont.ttf?t=1548516460940') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/iconfont/iconfont.svg?t=1548516460940#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\e60b";
}

.icon-spin:before {
  content: "\e851";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-icon-checkin:before {
  content: "\e615";
}

`
