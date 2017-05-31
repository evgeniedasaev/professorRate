import '../node_modules/blaze/dist/blaze.min.css'
import '../node_modules/blaze/dist/themes/blaze.example.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    .c-hero {
        border-bottom: 1px solid #e7e7e7;
        background-color: #f7f7f7;
    }
`;
