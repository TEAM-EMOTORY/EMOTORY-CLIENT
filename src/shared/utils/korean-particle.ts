export const hasConsonantEnding = (str: string): boolean => {
  const code = str.charCodeAt(str.length - 1)
  return code >= 0xac00 && code <= 0xd7a3 && (code - 0xac00) % 28 !== 0
}

export const replaceNameInContent = (content: string, name: string): string => {
  const endsInConsonant = hasConsonantEnding(name)
  return content
    .replaceAll('{name}이', endsInConsonant ? `${name}이` : name)
    .replaceAll('{name}', name)
}
