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
    END_SESSION: (playSessionId: number) => `/play-sessions/${playSessionId}/end`,
    HISTORIES: (playSessionId: number) => `/play-sessions/${playSessionId}/histories`,
    GENERATE_IMAGE: '/images/generate',
  },
  BOOKSHELF: {
    SHARED_STORIES: '/shared-stories',
    SHARED_STORY: (playSessionId: number) => `/shared-stories/${playSessionId}`,
  },
  RESULT: {
    GET: (playSessionId: number) => `/play-sessions/${playSessionId}/results`,
  },
}
