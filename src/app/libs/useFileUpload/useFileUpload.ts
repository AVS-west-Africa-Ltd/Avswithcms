export function useFileUpload() {
  return async (filename: string, file: File) => {
    const result = await fetch(`/api/googleCloud/?file=${filename}`);
    const { url, fields } = await result.json();
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return upload.ok;
  };
}
