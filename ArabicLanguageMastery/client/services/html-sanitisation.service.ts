import sanitizeHtml from 'sanitize-html';

export class HtmlSanitisationService {
  sanitizeHtml(html: string) {
    let sanitisedHtml = sanitizeHtml(html, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      allowedAttributes: {
        p: ['style'],
        span: ['style'],
        img: ['src'],
      },
    });

    // Style ordered lists
    sanitisedHtml = sanitisedHtml.replace(/<ol>/g, '<ol class="pb-2">');

    // Style unordered lists
    sanitisedHtml = sanitisedHtml.replace(/<ul>/g, '<ul class="pb-2">');

    // Style Notes
    sanitisedHtml = sanitisedHtml.replace(
      /\[Note\]/g,
      '<v-alert border="left" color="teal darken-1" class="ma-2" dark><h4 class="mt-n1 pb-2">Note</h4>'
    );
    sanitisedHtml = sanitisedHtml.replace(/\[\/Note\]/g, '</v-alert>');

    // Style Summary
    sanitisedHtml = sanitisedHtml.replace(
      /\[Summary\]/g,
      '<v-alert border="left" color="blue darken-1" class="ma-2" dark><h2 class="mt-n1 pb-2">Summary</h2>'
    );
    sanitisedHtml = sanitisedHtml.replace(/\[\/Summary\]/g, '</v-alert>');

    // Style Arabic
    sanitisedHtml = sanitisedHtml.replace(
      /\(\(arabic-l /g,
      '<span class="arabic-l">'
    );
    sanitisedHtml = sanitisedHtml.replace(/\(\(/g, '<span class="arabic">');
    sanitisedHtml = sanitisedHtml.replace(/\)\)/g, '</span>');

    // Required for the V Runtime Template package that allows dynamic vue components
    // to be used at runtime
    sanitisedHtml = `<div>${sanitisedHtml}</div>`;

    return sanitisedHtml;
  }
}
