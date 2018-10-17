'use strict';

const e = React.createElement;
Redoc.init(
    "https://api.swaggerhub.com/apis/centrifuge.io/cent-node/0.0.2/swagger.json",
    {
        nativeScrollbars: true,
        theme: {
            colors: {
                primary: {main: '#FF9F00'}
            },
            rightPanel: {
                backgroundColor: "#212121",
            }
        },
    }
)
