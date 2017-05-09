import 'normalize.css'
import { injectGlobal } from 'styled-components'

injectGlobal`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #383838;
    }
`
