console.log( 'its working' )

let themeDots = document.getElementsByClassName('theme-dot' )

for ( var i = 0; themeDots.length > i; i++ ) {
    themeDots[ i ].addEventListener( 'click', function () {
        let mode = this.dataset.mode
        console.log( 'option clicked', mode )
        setTheme( mode )
    } )
}

function setTheme ( mode ) {
    if ( mode == 'light' ) {
        document.getElementById( 'theme-style' ).href = './css/default.css'
    }
    if ( mode == 'dark' ) {
        document.getElementById( 'theme-style' ).href = './css/dark.css'
    }
    if ( mode == 'ambient' ) {
        document.getElementById( 'theme-style' ).href = './css/ambient.css'
    }
    if ( mode == 'brown' ) {
        document.getElementById( 'theme-style' ).href = './css/brown.css'
    }
}
