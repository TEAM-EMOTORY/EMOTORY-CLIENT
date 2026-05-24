export const QUERY_KEYS = {
  stories: ['stories'] as const,
  storyNode: (storyNodeId: number) => ['story-node', storyNodeId] as const,

  member: (memberId: string) => ['member', memberId] as const,
}
