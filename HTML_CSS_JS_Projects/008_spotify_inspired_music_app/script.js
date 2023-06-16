const pause_svg_string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>'
const pause_circle_svg_string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>'

let songIndex = 0;


let songs = [
    { songName: '01 - As You Fade Away - NEFFEX.mp3', filePath: 'music/01 - As You Fade Away - NEFFEX.mp3' },
    { songName: '02 - Broken Ladder - Jeremy Black.mp3', filePath: 'music/02 - Broken Ladder - Jeremy Black.mp3' },
    { songName: '03 - Coast - Anno Domini Beats.mp3', filePath: 'music/03 - Coast - Anno Domini Beats.mp3' },
    { songName: '04 - Contrast - Anno Domini Beats.mp3', filePath: 'music/04 - Contrast - Anno Domini Beats.mp3' },
    { songName: '05 - Culture - Anno Domini Beats.mp3', filePath: 'music/05 - Culture - Anno Domini Beats.mp3' },
    { songName: '06 - Enough - NEFFEX.mp3', filePath: 'music/06 - Enough - NEFFEX.mp3' },
    { songName: '07 - Fat Man - Yung Logos.mp3', filePath: 'music/07 - Fat Man - Yung Logos.mp3' },
    { songName: '08 - Free Me (Instrumental) - NEFFEX.mp3', filePath: 'music/08 - Free Me (Instrumental) - NEFFEX.mp3' },
    { songName: '09 - Glass - Anno Domini Beats.mp3', filePath: 'music/09 - Glass - Anno Domini Beats.mp3' },
    { songName: '10 - Good Days - Yung Logos.mp3', filePath: 'music/10 - Good Days - Yung Logos.mp3' },
    { songName: '11 - Illusions - Anno Domini Beats.mp3', filePath: 'music/11 - Illusions - Anno Domini Beats.mp3' },
    { songName: '12 - In Five Straight Rows - Mini Vandals.mp3', filePath: 'music/12 - In Five Straight Rows - Mini Vandals.mp3' },
    { songName: '13 - Never Surrender - Anno Domini Beats.mp3', filePath: 'music/13 - Never Surrender - Anno Domini Beats.mp3' },
    { songName: '14 - Pray - Anno Domini Beats.mp3', filePath: 'music/14 - Pray - Anno Domini Beats.mp3' },
    { songName: '15 - Sinister - Anno Domini Beats.mp3', filePath: 'music/15 - Sinister - Anno Domini Beats.mp3' },
    { songName: '16 - Skylines - Anno Domini Beats.mp3', filePath: 'music/16 - Skylines - Anno Domini Beats.mp3' },
    { songName: '17 - Statement - NEFFEX.mp3', filePath: 'music/17 - Statement - NEFFEX.mp3' },
    { songName: '18 - Warzone - Anno Domini Beats.mp3', filePath: 'music/18 - Warzone - Anno Domini Beats.mp3' },
    { songName: '19 - Winning - NEFFEX.mp3', filePath: 'music/19 - Winning - NEFFEX.mp3' }
]

