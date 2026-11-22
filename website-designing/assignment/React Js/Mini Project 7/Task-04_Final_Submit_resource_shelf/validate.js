export function validateUrl(value) {
  const trimmedUrl = typeof value === "string" ? value.trim() : "";
  let parsedUrl;

  try {
    parsedUrl = new URL(trimmedUrl);
  } catch (error) {
    return "Enter a valid URL";
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    return "Only http or https links are allowed";
  }

  return "";
}

export function validateForm(data) {
  if (!data || typeof data !== "object") {
    return "Title must be between 3 and 60 characters.";
  }

  const trimmedTitle = typeof data.title === "string" ? data.title.trim() : "";
  if (trimmedTitle.length < 3 || trimmedTitle.length > 60) {
    return "Title must be between 3 and 60 characters.";
  }

  const urlError = validateUrl(data.url);
  if (urlError) {
    return urlError;
  }

  const trimmedSubject = typeof data.subject === "string" ? data.subject.trim() : "";
  if (trimmedSubject === "") {
    return "Please choose a subject.";
  }

  return "";
}