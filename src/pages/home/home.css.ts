import { style } from '@vanilla-extract/css'

export const STORY_LEFT_VAR = '--home-story-left'
export const STORY_TOP_VAR = '--home-story-top'
export const STORY_WIDTH_VAR = '--home-story-width'
export const STORY_HEIGHT_VAR = '--home-story-height'

export const bgContainer = style({
  position: 'relative',
  width: '100vw',
  height: '100dvh',
  overflow: 'hidden',
})

export const bgImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const storyButton = style({
  position: 'absolute',
  width: `var(${STORY_WIDTH_VAR})`,
  height: `var(${STORY_HEIGHT_VAR})`,
  left: `var(${STORY_LEFT_VAR})`,
  top: `var(${STORY_TOP_VAR})`,
  transform: 'translate(-50%, -50%)',
  borderRadius: '9999px',
})
