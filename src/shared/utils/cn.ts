/** 조건부 className 합치기 (falsy 값은 무시) */
export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')
