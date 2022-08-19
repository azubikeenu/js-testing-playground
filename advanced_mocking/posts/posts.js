import { sendDataRequest } from '../util/http.js';
import { validateNotEmpty } from '../util/validation.js';

export function savePost(postData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}


export function extractPostData(form) {
  const title = form.get('title');
  const content = form.get('content');
  validateNotEmpty(title, 'A title must be provided.');
  validateNotEmpty(content, 'Content must not be empty!');
  return { title, content };
}


export function extractFormData(formData) {
  const data = serializeData(formData)
  return validateEntries(data);
}


export function serializeData(formData) {
  const parsed = {};
  for (let key of formData.keys()) {
    parsed[key] = formData.get(key);
  }
  return parsed;
}


const ERROR_MESSAGES = {
  title: 'A title must be provided',
  content: 'Content must not be empty',
};


export function validateEntries(formData) {
  Object.keys(formData).forEach((prop) => {
    validateNotEmpty(formData[prop], ERROR_MESSAGES[prop]);
  });
  return formData;
}
