export const QUERY_KEYS = {
  stories: ['stories'] as const,
  playSession: (playSessionId: number) => ['play-session', playSessionId] as const,
  storyNode: (storyNodeId: number) => ['story-node', storyNodeId] as const,
}
