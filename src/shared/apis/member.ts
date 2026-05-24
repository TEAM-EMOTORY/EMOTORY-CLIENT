import { http } from './http'

export interface MemberResponse {
  name: string
}

export const fetchMemberName = async (memberId: string): Promise<MemberResponse> => {
  const response = await http.get<MemberResponse>(`/members/${memberId}`)
  return response
}
