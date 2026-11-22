function validateForm(data) {
  if (!data || typeof data !== "object") {
    return "Title must be between 3 and 60 characters.";
  }

  const trimmedTitle = typeof data.title === "string" ? data.title.trim() : "";
  if (trimmedTitle.length < 3 || trimmedTitle.length > 60) {
    return "Title must be between 3 and 60 characters.";
  }

  const trimmedSubject = typeof data.subject === "string" ? data.subject.trim() : "";
  if (trimmedSubject === "") {
    return "Please choose a subject.";
  }

  return "";
}