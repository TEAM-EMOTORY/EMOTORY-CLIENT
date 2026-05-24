export const END_POINT = {
  CHILD_INFO: {
    PRESIGNED_UPLOAD: '/s3/presigned-upload',
    CREATE_MEMBER: '/members',
  },
  EMOTION_SELECT: {
    STORIES: '/stories',
    PLAY_SESSIONS: '/play-sessions',
  },
  STORY: {
    STORY_NODE: (storyNodeId: number) => `/story-nodes/${storyNodeId}`,
    SELECT_CHOICE: (playSessionId: number) => `/play-sessions/${playSessionId}/choices`,
  },
  RESULT: {
    // 결과 조회
  },
}
