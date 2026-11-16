export const QUERY_KEYS = {
  stories: ['stories'] as const,
  storyNode: (storyNodeId: number) => ['story-node', storyNodeId] as const,
  playHistories: (playSessionId: number) => ['play-histories', playSessionId] as const,
  generateImage: (nodeId: number, playSessionId: number | undefined, faceImageKey: string) =>
    ['generate-image', playSessionId, faceImageKey, nodeId] as const,
  sharedStories: ['shared-stories'] as const,
  sharedStory: (playSessionId: number) => ['shared-story', playSessionId] as const,

  member: (memberId: string) => ['member', memberId] as const,

  storyResult: (playSessionId: number) => ['story-result', playSessionId] as const,
}
