import { themeVars } from '@shared/styles/theme.css'
import { style, keyframes } from '@vanilla-extract/css'

const popBounce = keyframes({
  '0%, 100%': { transform: 'translateY(0) scale(1)' },
  '40%': { transform: 'translateY(-20px) scale(1.15)' },
  '60%': { transform: 'translateY(-14px) scale(0.95)' },
})

const bgPulse = keyframes({
  '0%, 100%': { backgroundColor: themeVars.color.primary200 },
  '50%': { backgroundColor: themeVars.color.primary300 },
})

export const body = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.8rem',
  height: '100%',
  minHeight: '18rem',
})

export const image = style({
  width: '18rem',
  height: '18rem',
  objectFit: 'cover',
  borderRadius: '16px',
  flexShrink: 0,
})

export const imagePlaceholder = style({
  width: '18rem',
  height: '18rem',
  flexShrink: 0,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
  animationName: bgPulse,
  animationDuration: '2s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
})

export const dots = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-end',
})

const dotBase = {
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  animationName: popBounce,
  animationDuration: '0.9s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
}

export const dot1 = style({ ...dotBase, backgroundColor: '#F5622E', animationDelay: '0s' })
export const dot2 = style({ ...dotBase, backgroundColor: '#FCC944', animationDelay: '0.15s' })
export const dot3 = style({ ...dotBase, backgroundColor: '#4CAF50', animationDelay: '0.3s' })
export const dot4 = style({ ...dotBase, backgroundColor: '#5B8DEF', animationDelay: '0.45s' })

export const loadingText = style({
  ...themeVars.fontStyles.body_14eb,
  color: themeVars.color.brown200,
})

export const line = style({
  ...themeVars.fontStyles.body_21eb,
  flex: 1,
  lineHeight: 1.55,
  wordBreak: 'keep-all',
  color: themeVars.color.brown200,
})
