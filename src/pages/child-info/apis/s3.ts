export const uploadToS3 = async (uploadUrl: string, file: File) => {
  await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
  })
}
