import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalFontFace('TmoneyRoundWind', {
  src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff") format("woff")',
  fontWeight: 400,
  fontStyle: 'normal',
})

globalFontFace('TmoneyRoundWind', {
  src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff") format("woff")',
  fontWeight: 800,
  fontStyle: 'normal',
})

globalStyle('html, body', {
  fontSize: '62.5%',
  fontFamily: "'TmoneyRoundWind', sans-serif",
  overflow: 'hidden',
  width: '100%',
  height: '100%',
})

globalStyle('#root', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})
