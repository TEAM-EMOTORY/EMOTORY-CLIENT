export const uploadToS3 = async (uploadUrl: string, file: File) => {
  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  })

  if (!response.ok) {
    throw new Error(`S3 upload failed: ${response.status}`)
  }
}
