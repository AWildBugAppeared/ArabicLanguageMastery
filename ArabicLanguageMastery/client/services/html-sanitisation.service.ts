import sanitizeHtml from 'sanitize-html';

export class HtmlSanitisationService {
  sanitizeHtml(html: string) {
    let sanitisedHtml = sanitizeHtml(html, {
      allowedAttributes: {
        p: ['style'],
      },
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    });
    sanitisedHtml = sanitisedHtml.replace(/\(\(/g, '<span class="arabic">');
    sanitisedHtml = sanitisedHtml.replace(/\)\)/g, '</span>');

    return sanitisedHtml;
  }
}
